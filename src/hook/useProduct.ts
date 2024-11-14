import axios from "axios";
import { Product } from "../interface/Product";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      getAllProducts();
    })();
  }, []);

  const nav = useNavigate();
  const handleAdd = async (product: Product) => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", String(product.price));
    formData.append("description", product.description);
    formData.append("categoryId", product.categoryId);

    // Kiểm tra xem hình ảnh có hiện diện không và nối nó
    if (product.image && product.image[0]) {
      formData.append("file", product.image[0]); // Giả sử sản phẩm.image là một FileList
    }

    try {
      // Tải hình ảnh lên Cloudinary
      const uploadResponse = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const uploadResult = uploadResponse.data;
      if (uploadResult.secure_url) {
        // Bước 2: Gửi dữ liệu sản phẩm kèm theo URL hình ảnh để tạo sản phẩm
        const productData = {
          ...product,
          image: uploadResult.secure_url, // Cloudinary URL hình ảnh
        };

        const productResponse = await axios.post(
          "http://localhost:3000/api/products",
          productData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Product created:", productResponse.data);
        nav("/admin");
      } else {
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };
  const getAllProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/api/products");
    setProducts(data);
  };
  const remove = async (_id: string) => {
    if (confirm("delete")) {
      await axios.delete("http://localhost:3000/api/products/" + _id);
      getAllProducts();
    }
  };

  const { id } = useParams();
  const update = async (product: Product) => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", String(product.price));
    formData.append("description", product.description);

    if (product.image && product.image[0]) {
      formData.append("file", product.image[0]);
    }
    try {
      const uploadResponse = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const uploadResult = uploadResponse.data;
      if (uploadResult.secure_url) {
        const productData = {
          ...product,
          image: uploadResult.secure_url,
        };
        const productResponse = await axios.put(
          "http://localhost:3000/api/products/" + id,
          productData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("product", productResponse.data);
        nav("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleAdd,
    remove,
    products,
    update,
  };
};
