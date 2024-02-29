import { Box, Container, Stack, Typography } from "@mui/material";
import { useNavbarHeight } from "@src/hooks/useNavbarHeight";
import Carousel from "nuka-carousel";
import React, { Children } from "react";
import carousels from "@src/data/carousels.json";
import Image from "@src/components/Image";
import Link from "next/link";

const Jumbotron = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <Box>
      <Box pt={navbarHeight} bgcolor="lightPurpleBrand.main">
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 4 }}
            sx={{ pb: 4, pt: { md: 4 } }}
          >
            <Stack minWidth={{ xs: "100%", md: "480px" }}>
              <Typography
                typography={{ xs: "kode32", md: "kode64" }}
                color="white"
              >
                Codashop
              </Typography>
              <Typography
                typography={{ xs: "work14", md: "work20" }}
                color="white"
              >
                The safe & easy way to buy official game credits
              </Typography>
            </Stack>

            <Box
              bgcolor="darkPurpleBrand.main"
              flexGrow={1}
              borderRadius="16px"
              overflow="hidden"
              padding={1}
            >
              <Box borderRadius="8px" overflow="hidden">
                <Carousel withoutControls autoplay wrapAround>
                  {Children.toArray(
                    carousels.map((carousel) => (
                      <Link href={carousel.url}>
                        <Image
                          src={carousel.image}
                          alt="carousel"
                          sx={{ width: "100%" }}
                        />
                      </Link>
                    ))
                  )}
                </Carousel>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Image
        src="/static/wave/purple.svg"
        alt="wave"
        sx={{ width: "100%", bgcolor: "darkPurpleBrand.main" }}
      />
    </Box>
  );
};

export default Jumbotron;
