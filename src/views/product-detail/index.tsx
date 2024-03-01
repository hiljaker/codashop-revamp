"use client";

import { Container, Stack, Typography } from "@mui/material";
import Page from "@src/components/Page";
import { useNavbarHeight } from "@src/hooks/useNavbarHeight";
import React, { FC, useState } from "react";
import StickyInfo from "./sections/StickyInfo";
import { Product } from "@src/types/product";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import Pricing from "./sections/Pricing";
import Buy from "./sections/Buy";
import AdditionalInfo from "./sections/AdditionalInfo";

interface ProductDetailViewProps {
  product: Product;
}

const ProductDetailView: FC<ProductDetailViewProps> = ({ product }) => {
  const navbarHeight = useNavbarHeight();

  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  return (
    <Page bgcolor="darkPurpleBrand.main" pt={navbarHeight}>
      <Container>
        <Stack
          py={4}
          position="relative"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="start"
        >
          <Stack
            position={{ xs: "static", md: "sticky" }}
            top="80px"
            spacing={2}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Stack
                direction="row"
                alignItems="center"
                color="white"
                spacing={1}
              >
                <ArrowBack />{" "}
                <Typography typography="work20">Back to Home</Typography>
              </Stack>
            </Link>

            <StickyInfo product={product} />
          </Stack>

          <Stack flexGrow={1} spacing={2}>
            <Pricing
              product={product}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />

            <Buy
              selectedPrice={selectedPrice}
              prices={product.pricing?.prices || []}
            />
          </Stack>
        </Stack>
      </Container>

      <AdditionalInfo product={product} />
    </Page>
  );
};

export default ProductDetailView;
