import React from "react";
import { useProduct } from "../../../hook/useProduct";
import { Link } from "react-router-dom";

const List = () => {
  const { products, remove } = useProduct();
  return (
    <div>
      <Link to="/admin/add" className="btn btn-primary">
        Add
      </Link>
      <table className=" table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">image</th>
            <th scope="col">category</th>
            <th scope="col">description</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr>
              <td>{p._id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <img src={p.image} alt="" width={100} />
              </td>
              <td>{p.categoryId}</td>
              <td>{p.description}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => remove(p._id)}
                >
                  delete
                </button>
                <Link to={`/admin/update/${p._id}`} className="btn btn-warning">
                  update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
