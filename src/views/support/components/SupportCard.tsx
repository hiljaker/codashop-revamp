import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "@src/components/Image";
import React, { FC } from "react";

export interface Support {
  icon: string;
  text: string;
}

interface SupportProps {
  support: Support;
}

const Markdown = styled("div")(({ theme }) => ({
  color: "white",
  a: { color: theme.palette.pinkBrand.main },
  [theme.breakpoints.down("md")]: {
    ...theme.typography.work14,
  },
}));

const Card = styled(Stack)(({ theme }) => ({
  width: "300px",
  backgroundColor: theme.palette.purpleBrand.main,
  padding: "16px 24px",
  borderRadius: "16px",
  border: "3px dashed white",

  [theme.breakpoints.down("md")]: {
    width: "unset",
  },
}));

const SupportCard: FC<SupportProps> = ({ support }) => {
  return (
    <Card
      alignItems="center"
      spacing={2}
      direction={{ xs: "row", md: "column" }}
    >
      <Image
        src={support.icon}
        alt="icon"
        sx={{ width: { xs: "40px", md: "70px" } }}
      />
      <Markdown
        dangerouslySetInnerHTML={{ __html: support.text }}
        sx={{ textAlign: { xs: "left", md: "center" } }}
      />
    </Card>
  );
};

export default SupportCard;
