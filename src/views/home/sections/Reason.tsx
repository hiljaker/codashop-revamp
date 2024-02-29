import {
  DiamondOutlined,
  PercentOutlined,
  Redeem,
  SupportAgentOutlined,
  TimerOutlined,
} from "@mui/icons-material";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import React, { Children } from "react";

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.yellowBrand.main,
  textDecoration: "none",

  "&:hover": {
    textDecoration: `underline ${theme.palette.yellowBrand.main}`,
  },
}));

const Reason = () => {
  const reasons = [
    {
      icon: <TimerOutlined sx={{ fontSize: "48px" }} />,
      title: "Easy and Fast",
      desc: "It only takes a few seconds to complete a purchase on Codashop.",
    },
    {
      icon: <DiamondOutlined sx={{ fontSize: "48px" }} />,
      title: "Instant Delivery",
      desc: "When you top-up on Codashop, your purchase is delivered directly to your game account as soon as your payment is complete.",
    },
    {
      icon: <Redeem sx={{ fontSize: "48px" }} />,
      title: "Quick and Easy Gifting",
      desc: "Send in-game currencies to friends, family, or your favorite streamer as easily as topping up your own account.",
    },
    {
      icon: <SupportAgentOutlined sx={{ fontSize: "48px" }} />,
      title: "Speedy & Localized Customer Support",
      desc: "Our friendly customer support team is always available to assist you.",
      path: "/support",
      pathShownAs: "Contact us!",
    },
    {
      icon: <PercentOutlined sx={{ fontSize: "48px" }} />,
      title: "Exciting Promotions",
      desc: "Keep a lookout for the best deals for your favourite games with Codashop promotions.",
    },
  ];

  return (
    <Box bgcolor="lightPurpleBrand.main">
      <Container>
        <Box sx={{ pt: 2, pb: 8 }}>
          <Typography
            textAlign="center"
            typography={{ xs: "kode32", md: "kode48" }}
            color="white"
            mb={{ xs: 2, md: 4 }}
          >
            CODASHOP CANADA
          </Typography>

          <Stack spacing={1} mb={{ xs: 3, md: 4 }}>
            <Typography
              typography={{ xs: "work16", md: "work18" }}
              color="white"
              fontWeight={500}
            >
              Why top up games on Codashop
            </Typography>
            <Typography typography="work14" color="white" fontWeight="light">
              Millions of gamers trust Codashop for easy game credit and voucher
              purchases. No need to sign up or log in—your buys are instantly
              added to your game account. Top up your favorite game credits
              effortlessly!
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {Children.toArray(
              reasons.map((reason) => (
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={1}>
                    <Box color="pinkBrand.main">{reason.icon}</Box>

                    <Stack color="white">
                      <Typography fontWeight={500}>{reason.title}</Typography>
                      <Typography fontWeight="light" typography="work14">
                        {reason.desc}
                        {reason.path && reason.pathShownAs && (
                          <>
                            &nbsp;
                            <CustomLink href={{ pathname: reason.path }}>
                              {reason.pathShownAs}
                            </CustomLink>
                          </>
                        )}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Reason;
