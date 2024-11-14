import React from "react";
import ProductContext from "../../../context/ProductContext";
import { useProduct } from "../../../hook/useProduct";

const Add = () => {
  const { handleAdd } = useProduct();
  return (
    <div>
      <ProductContext onSubmit={handleAdd} />
    </div>
  );
};

export default Add;
