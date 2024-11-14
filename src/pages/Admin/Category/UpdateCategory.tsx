import React from "react";
import { useCategory } from "../../../hook/useCategory";
import CategoryContext from "../../../context/CategoryContext";

const UpdateCategory = () => {
  const { handleUpdateCategory } = useCategory();
  return (
    <div>
      <CategoryContext onSubmit={handleUpdateCategory} />
    </div>
  );
};

export default UpdateCategory;
