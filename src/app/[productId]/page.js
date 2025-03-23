import React from "react";

const DynamicPage = async ({ params, searchParams }) => {
  const productId = await params;
  const search = await searchParams;
  console.log(productId);
  console.log(search);

  return (
    <div>
      <h1>Dynamic Page</h1>
    </div>
  );
};

export default DynamicPage;
