import React, { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Product } from "@src/types/product";
import Image from "@src/components/Image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const Card = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.lightPurpleBrand.main,
  padding: "10px",
  borderRadius: "18px",

  [theme.breakpoints.down("md")]: {
    padding: "6px",
    borderRadius: "6px",
  },
}));

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={product.url || { pathname: product.slug }}
      style={{ textDecoration: "none" }}
    >
      <Box position="relative">
        {product.isNew && (
          <Stack
            position="absolute"
            bgcolor="yellowBrand.main"
            width={{ xs: "30px", md: "50px" }}
            height={{ xs: "30px", md: "50px" }}
            alignItems="center"
            justifyContent="center"
            borderRadius="100%"
            right={{ xs: "-10px", md: "-15px" }}
            top={{ xs: "-10px", md: "-15px" }}
            border="3px dashed"
            borderColor="pinkBrand.main"
          >
            <Typography
              fontFamily="Kode Mono, monospace"
              fontSize={{ xs: "12px", md: "16px" }}
              fontWeight={700}
              color="pinkBrand.main"
            >
              NEW!
            </Typography>
          </Stack>
        )}

        <Card spacing={1}>
          <Image
            src={product.image}
            alt={product.name}
            sx={{ width: "100%", borderRadius: { xs: "2px", md: "8px" } }}
          />
          <Typography
            textAlign="center"
            color="white"
            fontWeight={500}
            typography={{ xs: "kode14", md: "kode16" }}
          >
            {product.name}
          </Typography>
        </Card>
      </Box>
    </Link>
  );
};

export default ProductCard;
