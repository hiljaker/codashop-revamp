"use client";

import React, { ComponentProps, FC, PropsWithChildren } from "react";
import NavbarSupport from "./NavbarSupport";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import NavbarMain from "./NavbarMain";

interface PageProps extends PropsWithChildren, ComponentProps<typeof Box> {}

const Page: FC<PageProps> = ({ children, ...props }) => {
  const path = usePathname();

  const isSupportPage = path.includes("/support");

  return (
    <>
      {isSupportPage ? <NavbarSupport /> : <NavbarMain />}
      <Box {...props}>{children}</Box>
    </>
  );
};

export default Page;
