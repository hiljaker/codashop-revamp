"use client";

import {
  Box,
  Container,
  IconButton,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Theme, styled } from "@mui/material/styles";
import { useNavbarHeight } from "@src/hooks/useNavbarHeight";
import React, { useState } from "react";
import Image from "./Image";
import Link from "next/link";
import { Menu } from "@mui/icons-material";

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.pinkBrand.main,
  textDecoration: "none",

  "&:hover": {
    textDecoration: `underline ${theme.palette.pinkBrand.main}`,
  },
}));

const TextInput = styled(TextField)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "100px",

  "& .MuiOutlinedInput-root": {
    paddingRight: 0,
    borderRadius: "100px",

    "&.Mui-focused fieldset": { borderColor: theme.palette.pinkBrand.main },

    button: { margin: "8px" },
  },
}));

const NavbarSupport = () => {
  const navbarHeight = useNavbarHeight();
  const mobile = useMediaQuery(({ breakpoints }: Theme) =>
    breakpoints.down("md")
  );

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box width="100%" position="fixed" bgcolor="white" zIndex={99}>
      <Container>
        <Stack
          height={navbarHeight}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/">
            <Image
              src="/static/logo/logo-dark.png"
              alt="logo"
              sx={{ width: { xs: "120px", md: "150px" } }}
            />
          </Link>

          {mobile ? (
            <IconButton onClick={() => setOpen(!open)}>
              <Menu sx={{ color: "darkPurpleBrand.main" }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={2}>
              <CustomLink href="https://ca.support.codashop.com/hc/en-us/requests/new">
                Submit a request
              </CustomLink>

              <CustomLink href="https://www.codashop.com/en-ca/sign-in">
                Sign in
              </CustomLink>
            </Stack>
          )}
        </Stack>
      </Container>

      {open && (
        <Box
          width="100%"
          bgcolor="white"
          borderTop="1px dashed"
          borderColor="neutral400.main"
        >
          <Container>
            <Stack direction="column" py={3} spacing={3}>
              <CustomLink href="https://ca.support.codashop.com/hc/en-us/requests/new">
                Submit a request
              </CustomLink>

              <CustomLink href="https://www.codashop.com/en-ca/sign-in">
                Sign in
              </CustomLink>
            </Stack>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default NavbarSupport;
