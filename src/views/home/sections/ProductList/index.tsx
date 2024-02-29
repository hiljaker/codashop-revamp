import React, { Children } from "react";
import product from "@src/data/product.json";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "@src/components/Image";
import Category from "../../components/Category";

const ProductList = () => {
  return (
    <Box>
      <Box bgcolor="darkPurpleBrand.main">
        <Container>
          <Stack spacing={5} sx={{ py: 5 }}>
            {Children.toArray(
              product.categories.map((category) => (
                <Category category={category} />
              ))
            )}
          </Stack>
        </Container>
      </Box>

      <Image
        src="/static/wave/dark-purple.svg"
        alt="wave"
        sx={{ bgcolor: "lightPurpleBrand.main" }}
      />
    </Box>
  );
};

export default ProductList;
