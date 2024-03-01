import { Product } from "@src/types/product";
import React, { Children, Dispatch, FC, SetStateAction } from "react";
import Section from "../components/Section";
import productData from "@src/data/product.json";
import { Box, Grid, Stack, Typography } from "@mui/material";

interface PricingProps {
  product: Product;
  selectedPrice: number | null;
  setSelectedPrice: Dispatch<SetStateAction<number | null>>;
}

const Pricing: FC<PricingProps> = ({
  product,
  selectedPrice,
  setSelectedPrice,
}) => {
  const productType = productData.types.find(
    (type) => type.id === product.typeId
  );

  return (
    <Section number={1} name={`Select ${productType?.name}`}>
      <Grid container spacing={2}>
        {Children.toArray(
          product.pricing?.prices?.map((price) => {
            const selected = price.id === selectedPrice;

            return (
              <Grid item xs={12} md={3}>
                <Box position="relative">
                  {price.isPopular && (
                    <Box
                      position="absolute"
                      bgcolor="purpleBrand.main"
                      borderRadius="4px"
                      padding="2px 8px"
                      right="8px"
                      top="-8px"
                    >
                      <Typography fontSize="12px" color="white">
                        POPULAR!
                      </Typography>
                    </Box>
                  )}

                  <Box
                    borderRadius="8px"
                    sx={{
                      cursor: "pointer",
                      outline: selected ? "2px solid" : "none",
                      outlineColor: "purpleBrand.main",
                    }}
                    overflow="hidden"
                    onClick={() => {
                      if (price.id) {
                        const targetId =
                          selectedPrice !== price.id ? price.id : null;

                        setSelectedPrice(targetId);
                      }
                    }}
                  >
                    <Box
                      textAlign="center"
                      color="neutral100.main"
                      minHeight={{ md: "42px" }}
                      bgcolor="white"
                      p={2}
                    >
                      <Typography fontWeight={600}>{price.title}</Typography>
                      {price.subtitle && (
                        <Typography fontSize="12px">
                          {price.subtitle}
                        </Typography>
                      )}
                    </Box>

                    <Box bgcolor="pinkBrand.main" p={2} color="white">
                      <Box minHeight={{ md: "57px" }} textAlign="right">
                        <Typography fontSize="10px">From</Typography>

                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.5}
                          width="fit-content"
                          ml="auto"
                        >
                          {price.discount && (
                            <Box
                              bgcolor="purpleBrand.main"
                              p="2px 4px"
                              borderRadius="4px"
                            >
                              <Typography fontSize="10px">
                                {price.discount}%
                              </Typography>
                            </Box>
                          )}

                          {price.price && (
                            <Typography>
                              C$
                              {price.discount
                                ? (
                                    price.price -
                                    (price.discount / 100) * price.price
                                  ).toFixed(2)
                                : price.price}
                            </Typography>
                          )}
                        </Stack>

                        {price.discount && (
                          <Typography fontSize="12px">
                            Usual{" "}
                            <Typography
                              component="span"
                              fontSize="12px"
                              sx={{ textDecoration: "line-through" }}
                            >
                              C${price.price}
                            </Typography>
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })
        )}
      </Grid>
    </Section>
  );
};

export default Pricing;
