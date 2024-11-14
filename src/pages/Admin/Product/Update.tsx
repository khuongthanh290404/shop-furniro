import React from "react";
import { useProduct } from "../../../hook/useProduct";
import ProductContext from "../../../context/ProductContext";

const Update = () => {
  const { update } = useProduct();
  return (
    <div>
      <ProductContext onSubmit={update} />
    </div>
  );
};

export default Update;
