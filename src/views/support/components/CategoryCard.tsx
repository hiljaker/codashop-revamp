import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

export interface Category {
  icon: JSX.Element;
  text: string;
  to: string;
}

interface CategoryCardProps {
  category: Category;
}

const IssueCard = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.pinkBrand.main,
  borderRadius: "16px",
  padding: "16px 24px",
  color: "white",
  transition: "0.2s",
  boxShadow: `5px 5px 0px 0px rgba(0,0,0,0.5)`,
  border: `3px dashed white`,

  [theme.breakpoints.down("md")]: {
    padding: "8px 14px",
  },
}));

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      href={"https://ca.support.codashop.com/hc/en-us/sections".concat(
        category.to
      )}
    >
      <IssueCard
        alignItems="center"
        spacing={{ xs: 2, md: 1 }}
        direction={{ xs: "row", md: "column" }}
      >
        {category.icon}
        <Typography typography={{ xs: "work14", md: "work18" }}>
          {category.text}
        </Typography>
      </IssueCard>
    </Link>
  );
};

export default CategoryCard;
