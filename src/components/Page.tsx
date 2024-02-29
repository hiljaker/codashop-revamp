"use client";

import React, { ComponentProps, FC, PropsWithChildren } from "react";
import NavbarSupport from "./NavbarSupport";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import NavbarMain from "./NavbarMain";
import Footer from "./Footer";

interface PageProps extends PropsWithChildren, ComponentProps<typeof Box> {
  hideFooter?: boolean;
}

const Page: FC<PageProps> = ({ hideFooter, children, ...props }) => {
  const path = usePathname();

  const isSupportPage = path.includes("/support");

  return (
    <>
      {isSupportPage ? <NavbarSupport /> : <NavbarMain />}
      <Box {...props}>{children}</Box>
      {!hideFooter && <Footer />}
    </>
  );
};

export default Page;
