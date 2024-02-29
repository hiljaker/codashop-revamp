import SupportView from "@src/views/support";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Codashop | Support",
};

const Support = () => {
  return <SupportView />;
};

export default Support;
