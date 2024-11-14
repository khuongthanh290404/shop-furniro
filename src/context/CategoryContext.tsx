import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Category } from "../interface/Category";
import { useParams } from "react-router-dom";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryValidation } from "../validation/categorySchema";
type Props = {
  onSubmit: (data: Category) => void;
};
const CategoryContext = ({ onSubmit }: Props) => {
  const { categorySchema } = categoryValidation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Category>({
    resolver: zodResolver(categorySchema),
  });
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "http://localhost:3000/api/category/" + id
      );
      reset(data);
    })();
  }, []);
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CategoryContext;
