import ProductDetailView from "@src/views/product-detail";
import { Metadata } from "next";
import React from "react";
import product from "@src/data/product.json";
import { Product } from "@src/types/product";

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productName = product.products.find(
    (product) => product.slug === params.slug
  )?.name;

  return { title: `${productName} | Codashop` };
}

const ProductDetail = ({ params }: Props) => {
  const selectedProduct =
    product.products.find((product) => product.slug === params.slug) ||
    ({} as Product);

  return <ProductDetailView product={selectedProduct} />;
};

export default ProductDetail;
