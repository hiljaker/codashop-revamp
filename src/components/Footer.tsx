import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import React, { Children } from "react";
import Image from "./Image";

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.purpleBrand.main,
  textDecoration: "none",

  "&:hover": {
    textDecoration: `underline ${theme.palette.purpleBrand.main}`,
  },
}));

const Footer = () => {
  const links = [
    {
      title: "Become An Affiliate",
      url: "https://marketing.codashop.com/marketing-and-partnership?_gl=1*u0ca9t*_ga*MTUxNTUxNDQ3MS4xNzA5MDI1MjY3*_ga_CSGEPL99WN*MTcwOTIxNDg4Mi4xOS4xLjE3MDkyMjM0MzguNTEuMC4w",
    },
    {
      title: "For Game Publishers",
      url: "https://www.codapayments.com/?_gl=1*u0ca9t*_ga*MTUxNTUxNDQ3MS4xNzA5MDI1MjY3*_ga_CSGEPL99WN*MTcwOTIxNDg4Mi4xOS4xLjE3MDkyMjM0MzguNTEuMC4w",
    },
    {
      title: "Terms & Conditions",
      url: "https://www.codapayments.com/terms-conditions/terms-conditions-canada?_gl=1*1hdy1db*_ga*MTUxNTUxNDQ3MS4xNzA5MDI1MjY3*_ga_CSGEPL99WN*MTcwOTIxNDg4Mi4xOS4xLjE3MDkyMjM0MzguNTEuMC4w",
    },
    {
      title: "Privacy Notice",
      url: "https://www.codapayments.com/privacy-policy/privacy-notice-canada?_gl=1*1hdy1db*_ga*MTUxNTUxNDQ3MS4xNzA5MDI1MjY3*_ga_CSGEPL99WN*MTcwOTIxNDg4Mi4xOS4xLjE3MDkyMjM0MzguNTEuMC4w",
    },
    {
      title: "Bug Bounty",
      url: "https://www.codapayments.com/legal/coda-payments-vulnerability-disclosure-policy?_gl=1*19lebhx*_ga*MTUxNTUxNDQ3MS4xNzA5MDI1MjY3*_ga_CSGEPL99WN*MTcwOTIxNDg4Mi4xOS4xLjE3MDkyMjM0MzguNTEuMC4w",
    },
  ];

  const socials = [
    {
      icon: "/static/icon/facebook.svg",
      url: "https://www.facebook.com/Codashop.us/",
    },
    {
      icon: "/static/icon/x.svg",
      url: "https://twitter.com/codashop_us",
    },
    {
      icon: "/static/icon/instagram.svg",
      url: "https://instagram.com/codashop_us",
    },
    {
      icon: "/static/icon/tiktok.svg",
      url: "https://www.tiktok.com/@codashop_us",
    },
    {
      icon: "/static/icon/coda.svg",
      url: "https://news.codashop.com/ca/?_gl=1*15tmwfo*_ga*MTUxNTUxNDQ3MS4xNzA5MDI1MjY3*_ga_CSGEPL99WN*MTcwOTIxNDg4Mi4xOS4xLjE3MDkyMjM0MzguNTEuMC4w",
    },
  ];

  return (
    <Box>
      <Box bgcolor="yellowBrand.main" py={6}>
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 10 }}
          >
            <Stack spacing={2}>
              <Image
                src="/static/logo/logo-dark.png"
                alt="logo"
                sx={{ width: { xs: "200px", md: "300px" } }}
              />
              <Typography color="darkPurpleBrand.main">
                The safe & easy way to buy official game credits
              </Typography>
            </Stack>

            <Stack>
              <Typography
                typography="work20"
                color="darkPurpleBrand.main"
                fontWeight={500}
              >
                Need help?
              </Typography>

              <CustomLink href="/support">
                <Typography>Contact us</Typography>
              </CustomLink>
            </Stack>

            <Stack>
              <Typography
                typography="work20"
                color="darkPurpleBrand.main"
                fontWeight={500}
              >
                Links
              </Typography>

              {Children.toArray(
                links.map((link) => (
                  <CustomLink href={link.url}>
                    <Typography>{link.title}</Typography>
                  </CustomLink>
                ))
              )}
            </Stack>

            <Stack spacing={1}>
              <Typography
                typography="work20"
                color="darkPurpleBrand.main"
                fontWeight={500}
              >
                Stay updated with us
              </Typography>

              <Stack direction="row" alignItems="center" spacing={1}>
                {Children.toArray(
                  socials.map((social) => (
                    <CustomLink href={social.url}>
                      <Image
                        src={social.icon}
                        alt="logo"
                        sx={{ width: "30px" }}
                      />
                    </CustomLink>
                  ))
                )}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bgcolor="pinkBrand.main">
        <Container>
          <Typography color="white" textAlign="center" py={2}>
            Copyright Coda Payments
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
