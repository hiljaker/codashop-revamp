import React, { ComponentProps, FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

interface PageProps extends PropsWithChildren, ComponentProps<typeof Box> {}

const Page: FC<PageProps> = ({ children, ...props }) => {
  return (
    <>
      <Navbar />
      <Box {...props}>{children}</Box>
    </>
  );
};

export default Page;
