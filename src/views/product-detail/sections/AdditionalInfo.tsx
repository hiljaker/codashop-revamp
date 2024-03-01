import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Product } from "@src/types/product";
import React, { FC } from "react";

interface AdditionalInfoProps {
  product: Product;
}

const Markdown = styled("div")(({ theme }) => ({
  color: theme.palette.neutral200.main,

  p: {
    "&:not(:first-child)": { marginTop: "16px" },
    fontWeight: "light",
    ...theme.typography.work14,
    lineHeight: "20px",
  },

  a: { color: theme.palette.pinkBrand.main },
}));

const AdditionalInfo: FC<AdditionalInfoProps> = ({ product }) => {
  return (
    <Box bgcolor="white">
      <Container>
        <Box py={4}>
          <Markdown dangerouslySetInnerHTML={{ __html: product.info || "" }} />
        </Box>
      </Container>
    </Box>
  );
};

export default AdditionalInfo;
