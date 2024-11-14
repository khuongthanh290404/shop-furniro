import React from "react";
import CategoryContext from "../../../context/CategoryContext";
import { useCategory } from "../../../hook/useCategory";

const AddCategory = () => {
  const { handleAddCategory } = useCategory();
  return (
    <div>
      <CategoryContext onSubmit={handleAddCategory} />
    </div>
  );
};

export default AddCategory;
