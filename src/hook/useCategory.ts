import { useEffect, useState } from "react";
import { Category } from "../interface/Category";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const useCategory = () => {
  const nav = useNavigate();
  const [category, setCategory] = useState<Category[]>([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      getCategory();
    })();
  }, []);
  const getCategory = async () => {
    const { data } = await axios.get("http://localhost:3000/api/category", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCategory(data);
  };
  const handleAddCategory = async (category: Category) => {
    await axios.post("http://localhost:3000/api/category", category, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    nav("/admin/category");
  };
  const handleDeleteCategory = async (_id: string) => {
    if (confirm("delete")) {
      await axios.delete("http://localhost:3000/api/category/" + _id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getCategory();
    }
  };
  const { id } = useParams();
  const handleUpdateCategory = async (category: Category) => {
    await axios.put("http://localhost:3000/api/category/" + id, category, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    nav("/admin/category");
  };

  return {
    category,
    handleAddCategory,
    handleDeleteCategory,
    handleUpdateCategory,
  };
};
