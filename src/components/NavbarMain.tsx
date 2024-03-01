import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  type Theme,
  Drawer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavbarHeight } from "@src/hooks/useNavbarHeight";
import Link from "next/link";
import React, { Children, useState } from "react";
import Image from "./Image";
import {
  BookmarksOutlined,
  Close,
  Menu,
  Percent,
  Search,
  ShieldOutlined,
} from "@mui/icons-material";
import { useFormik } from "formik";
import product from "@src/data/product.json";

const TextInput = styled(TextField)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "100px",

  "& .MuiOutlinedInput-root": {
    paddingRight: 0,
    borderRadius: "100px",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.5)",

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.pinkBrand.main,
    },

    input: { padding: "0 0 0 8px", fontSize: "14px" },

    button: { margin: "4px" },
  },

  [theme.breakpoints.down("md")]: {
    "& .MuiOutlinedInput-root": {
      boxShadow: "none",
    },
  },
}));

const signUpBenefits = [
  {
    icon: <Percent sx={{ fontSize: "32px" }} />,
    text: "Be first to know about exclusive promos and deals",
  },
  {
    icon: <BookmarksOutlined sx={{ fontSize: "32px" }} />,
    text: "Easy access to your order history",
  },
  {
    icon: <ShieldOutlined sx={{ fontSize: "32px" }} />,
    text: "Faster and more secure",
  },
];

const NavbarMain = () => {
  const navbarHeight = useNavbarHeight();
  const mobile = useMediaQuery(({ breakpoints }: Theme) =>
    breakpoints.down("md")
  );

  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const { values, getFieldProps } = useFormik({
    initialValues: { search: "" },
    onSubmit: () => {},
  });

  const filteredProducts = product.products.filter(
    (product) =>
      values.search &&
      product.name.toLowerCase().includes(values.search.toLowerCase()) &&
      product.slug
  );

  return (
    <Box position="fixed" width="100%" zIndex={99}>
      <Box
        sx={{
          background: "rgba(60, 31, 66, 0.8)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <Container>
          <Stack
            height={navbarHeight}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center">
              <IconButton onClick={() => setOpenDrawer(true)}>
                <Menu sx={{ color: "white" }} />
              </IconButton>

              <Link href="/">
                <Image
                  src="/static/logo/logo-light.png"
                  alt="logo"
                  sx={{ width: { xs: "120px", md: "150px" } }}
                />
              </Link>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2}>
              {!mobile && (
                <TextInput
                  {...getFieldProps("search")}
                  size="small"
                  sx={{ width: "300px" }}
                  placeholder="Search in Codashop.."
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        sx={{
                          bgcolor: "pinkBrand.main",
                          "&:hover": { bgcolor: "darkPurpleBrand.main" },
                        }}
                        size="small"
                      >
                        <Search sx={{ color: "white", fontSize: "14px" }} />
                      </IconButton>
                    ),
                  }}
                />
              )}

              {mobile && (
                <IconButton onClick={() => setOpenSearch(!openSearch)}>
                  <Search sx={{ color: "white" }} />
                </IconButton>
              )}

              <Link href="https://www.codashop.com/en-ca/sign-up">
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    borderRadius: "16px",
                    textTransform: "capitalize",
                    padding: "4px 16px",
                    bgcolor: "pinkBrand.main",
                    "&:hover": { bgcolor: "purpleBrand.main" },
                  }}
                >
                  Sign up
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {(values.search || (mobile && openSearch)) && (
        <Container sx={{ mt: 1 }}>
          {mobile && (
            <TextInput
              {...getFieldProps("search")}
              size="small"
              sx={{ width: { xs: "100%", md: "300px" } }}
              placeholder="Search in Codashop.."
              InputProps={{
                endAdornment: (
                  <IconButton
                    sx={{
                      bgcolor: "pinkBrand.main",
                      "&:hover": { bgcolor: "darkPurpleBrand.main" },
                    }}
                    size="small"
                  >
                    <Search sx={{ color: "white", fontSize: "14px" }} />
                  </IconButton>
                ),
              }}
            />
          )}

          <Stack
            maxHeight={{ xs: "300px" }}
            overflow="scroll"
            bgcolor="white"
            borderRadius="16px"
            padding={3}
            mt={1}
            width={{ md: "500px" }}
            ml={{ md: "auto" }}
            spacing={2}
            divider={<Divider />}
          >
            {filteredProducts.length ? (
              Children.toArray(
                filteredProducts.map((filtered) => (
                  <Link
                    href={{ pathname: filtered.slug }}
                    style={{ textDecoration: "none" }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Image
                        src={filtered.banner}
                        alt={filtered.name}
                        sx={{ width: "100px" }}
                      />
                      <Typography color="neutral100.main">
                        {filtered.name}
                      </Typography>
                    </Stack>
                  </Link>
                ))
              )
            ) : (
              <Typography textAlign="center">Product not found :(</Typography>
            )}
          </Stack>
        </Container>
      )}

      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            bgcolor: "lightPurpleBrand.main",
            maxWidth: { xs: "300px", md: "400px" },
          },
        }}
      >
        <Box p={3}>
          <IconButton onClick={() => setOpenDrawer(false)} sx={{ mb: 3 }}>
            <Close sx={{ color: "white" }} />
          </IconButton>

          <Typography color="white" typography="work24" fontWeight={500} mb={3}>
            Sign up to Codashop today!
          </Typography>

          <Stack spacing={2} mb={2}>
            {Children.toArray(
              signUpBenefits.map((benefit) => (
                <Stack direction="row" spacing={2} color="yellowBrand.main">
                  {benefit.icon}
                  <Typography color="white" fontWeight="light">
                    {benefit.text}
                  </Typography>
                </Stack>
              ))
            )}
          </Stack>

          <Stack spacing={1}>
            <Link href="https://www.codashop.com/en-ca/sign-up">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "24px",
                  bgcolor: "pinkBrand.main",
                  "&:hover": { bgcolor: "purpleBrand.main" },
                }}
              >
                Sign up
              </Button>
            </Link>

            <Link href="https://www.codashop.com/en-ca/sign-in">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "24px",
                  bgcolor: "white",
                  color: "darkPurpleBrand.main",
                  "&:hover": { bgcolor: "purpleBrand.main" },
                }}
              >
                Sign in
              </Button>
            </Link>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavbarMain;
