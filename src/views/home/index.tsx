"use client";

import React from "react";
import { useNavbarHeight } from "@src/hooks/useNavbarHeight";
import Page from "@src/components/Page";
import Jumbotron from "./components/Jumbotron";
import ProductList from "./sections/ProductList";
import Reason from "./sections/Reason";

const HomeView = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <Page>
      <Jumbotron />
      <ProductList />
      <Reason />
    </Page>
  );
};

export default HomeView;
