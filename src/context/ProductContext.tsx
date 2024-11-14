import { useForm } from "react-hook-form";
import { Product } from "../interface/Product";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCategory } from "../hook/useCategory";

type Props = {
  onSubmit: (data: Product) => void;
};

const ProductContext = ({ onSubmit }: Props) => {
  const { category } = useCategory();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm<Product>();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/products/` + id
      );
      reset(data);
    })();
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" {...register("name")} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            {...register("price")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" className="form-control" {...register("image")} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            {...register("description")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category </label>
          <select className="form-control" {...register("categoryId")}>
            {category.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProductContext;
