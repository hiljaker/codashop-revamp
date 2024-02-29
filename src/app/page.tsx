import HomeView from "@src/views/home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Codashop",
};

const Home = () => {
  return <HomeView />;
};

export default Home;
