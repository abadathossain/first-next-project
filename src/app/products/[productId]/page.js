import React from "react";

const SinglePage = async ({ params, searchParams }) => {
  const { productId } = await params;
  console.log(await searchParams);
  console.log(productId);
  return <div>SinglePage {productId}</div>;
};

export default SinglePage;
