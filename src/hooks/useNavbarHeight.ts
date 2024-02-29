import { type Theme, useMediaQuery } from "@mui/material";

export const useNavbarHeight = () => {
  const mobile = useMediaQuery(({ breakpoints }: Theme) =>
    breakpoints.down("md")
  );

  return mobile ? "72px" : "64px";
};
