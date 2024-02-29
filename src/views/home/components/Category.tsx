import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  type Theme,
} from "@mui/material";
import React, { Children, FC, useState } from "react";
import product from "@src/data/product.json";
import ProductCard from "./ProductCard";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

interface CategoryProps {
  category: { id: number; name: string };
}

const Category: FC<CategoryProps> = ({ category }) => {
  const mobile = useMediaQuery(({ breakpoints }: Theme) =>
    breakpoints.down("md")
  );

  const limit = mobile ? 6 : 12;

  const [viewMore, setViewMore] = useState(false);

  const products = product.products.filter((product) =>
    product.categories.includes(category.id)
  );

  const limitProducts = viewMore ? products : products.slice(0, limit);

  return (
    <Box>
      <Typography
        color="white"
        typography={{ xs: "kode32", md: "kode48" }}
        mb={2}
      >
        {category.name}
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }} mb={4}>
        {Children.toArray(
          limitProducts.map((filtered) => (
            <Grid item xs={6} md={2}>
              <ProductCard product={filtered} />
            </Grid>
          ))
        )}
      </Grid>

      {products.length > 12 && (
        <Box width={{ md: "fit-content" }} mx="auto">
          <Button
            onClick={() => setViewMore(!viewMore)}
            variant="contained"
            fullWidth={mobile}
            sx={{
              textTransform: "capitalize",
              borderRadius: "24px",
              bgcolor: "pinkBrand.main",
              "&:hover": { bgcolor: "purpleBrand.main" },
            }}
          >
            View {viewMore ? "Less" : "More"}{" "}
            {viewMore ? (
              <ArrowUpward sx={{ ml: 0.5, fontSize: "18px" }} />
            ) : (
              <ArrowDownward sx={{ ml: 0.5, fontSize: "18px" }} />
            )}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Category;
