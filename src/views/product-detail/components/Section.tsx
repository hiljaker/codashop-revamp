import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { FC, PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  number: number;
  name: string;
}

const Badge = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.pinkBrand.main,
  width: "36px",
  height: "36px",
  borderRadius: "100%",

  [theme.breakpoints.down("md")]: {
    width: "30px",
    height: "30px",
  },
}));

const Section: FC<SectionProps> = ({ number, name, children }) => {
  return (
    <Stack
      bgcolor="lightPurpleBrand.main"
      px={{ xs: 2, md: 4 }}
      py={{ xs: 2, md: 3 }}
      borderRadius="8px"
      spacing={2}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Badge alignItems="center" justifyContent="center">
          <Typography
            fontFamily="Kode Mono, monospace"
            fontSize={{ xs: "16px", md: "24px" }}
            color="white"
          >
            {number}
          </Typography>
        </Badge>

        <Typography
          fontFamily="Kode Mono, monospace"
          fontSize={{ xs: "16px", md: "24px" }}
          color="white"
        >
          {name}
        </Typography>
      </Stack>

      <Box>{children}</Box>
    </Stack>
  );
};

export default Section;
