"use client";

import React, { Children } from "react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Page from "@src/components/Page";
import { useNavbarHeight } from "@src/hooks/useNavbarHeight";
import {
  Campaign,
  Error,
  LibraryBooks,
  Payment,
  Search,
} from "@mui/icons-material";
import CategoryCard, { Category } from "./components/CategoryCard";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Image from "@src/components/Image";
import SupportCard, { Support } from "./components/SupportCard";
import Link from "next/link";

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

    button: {
      margin: "8px",
    },
  },
}));

const CustomLink = styled(Link)(() => ({
  textDecoration: "none",
  "&:hover": { textDecoration: "underline white" },
}));

const SupportView = () => {
  const navbarHeight = useNavbarHeight();
  const { push } = useRouter();

  const issueCategories: Category[] = [
    {
      icon: <Payment sx={{ fontSize: { xs: "24px", md: "48px" } }} />,
      text: "Payment and Purchase Issues",
      to: "/360000415836-Payment-and-Purchase-Issues",
    },
    {
      icon: <LibraryBooks sx={{ fontSize: { xs: "24px", md: "48px" } }} />,
      text: "Tutorials",
      to: "/360000415856-Tutorials",
    },
    {
      icon: <Campaign sx={{ fontSize: { xs: "24px", md: "48px" } }} />,
      text: "Service Announcements",
      to: "/360000415876-Service-Announcements",
    },
  ];

  const customerSupports: Support[] = [
    {
      icon: "/static/icon/message.svg",
      text: '<p><a href="https://ca.support.codashop.com/hc/en-us/requests/new">Send us a message</a>&nbsp;and we&#39;ll get back to you in 24 hours or less</p>',
    },
    {
      icon: "/static/icon/messenger.svg",
      text: '<p>Send us a<a href="http://m.me/107465944210069" target="_blank">&nbsp;direct message</a>&nbsp;via Facebook</p>',
    },
  ];

  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: { query: "" },
    onSubmit: (values) => {
      if (values.query) {
        push(
          `https://ca.support.codashop.com/hc/en-us/search?utf8=%E2%9C%93&query=${values.query}`
        );
      }
    },
  });

  return (
    <Page pt={navbarHeight} hideFooter>
      <Box>
        <Box sx={{ pt: { xs: 2, md: 7 }, pb: 4 }} bgcolor="yellowBrand.main">
          <Container>
            <Stack alignItems="center" spacing={{ xs: 2, md: 4 }}>
              <Typography
                typography={{ xs: "kode32", md: "kode48" }}
                color="darkPurpleBrand.main"
              >
                Hello, how can we help you?
              </Typography>

              <TextInput
                {...getFieldProps("query")}
                size="small"
                placeholder="Search.."
                sx={{ width: { xs: "100%", md: "500px" } }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSubmit();
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      sx={{
                        bgcolor: "pinkBrand.main",
                        "&:hover": { bgcolor: "darkPurpleBrand.main" },
                      }}
                      size="small"
                      onClick={() => handleSubmit()}
                    >
                      <Search sx={{ color: "white" }} />
                    </IconButton>
                  ),
                }}
              />

              <Typography>
                or you can choose a category to find the help you need
              </Typography>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 2, md: 4 }}
                width={{ xs: "100%", md: "unset" }}
              >
                {Children.toArray(
                  issueCategories.map((category) => (
                    <CategoryCard category={category} />
                  ))
                )}
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Image
          src="/static/wave/yellow.svg"
          alt="wave"
          sx={{ width: "100%", bgcolor: "darkPurpleBrand.main" }}
        />
      </Box>

      <Box bgcolor="darkPurpleBrand.main">
        <Container>
          <Stack alignItems="center" spacing={{ xs: 1, md: 4 }} py={4}>
            <Typography typography="kode32" color="yellowBrand.main">
              CONTACT OUR CUSTOMER SUPPORT
            </Typography>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 4 }}
              width={{ xs: "100%", md: "unset" }}
            >
              {Children.toArray(
                customerSupports.map((support) => (
                  <SupportCard support={support} />
                ))
              )}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box bgcolor="darkPurpleBrand.main">
        <Image
          src="/static/wave/pink.svg"
          alt="wave"
          sx={{ width: "100%", bgcolor: "darkPurpleBrand.main" }}
        />

        <Box bgcolor="pinkBrand.main">
          <Container>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              pb={{ xs: 2, md: 6 }}
            >
              <Error sx={{ color: "white" }} />
              <CustomLink href="https://www.codapayments.com/terms-conditions/terms-conditions-canada">
                <Typography color="white">
                  Read our Terms & Conditions
                </Typography>
              </CustomLink>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Page>
  );
};

export default SupportView;
