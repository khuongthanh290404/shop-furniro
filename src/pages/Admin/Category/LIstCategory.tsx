import React from "react";
import { useCategory } from "../../../hook/useCategory";
import { Link } from "react-router-dom";

const LIstCategory = () => {
  const { category, handleDeleteCategory } = useCategory();

  return (
    <div>
      <Link to="/admin/category/add" className="btn btn-primary">
        Add
      </Link>
      <table className=" table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((c) => (
            <tr>
              <td>{c._id}</td>
              <td>{c.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteCategory(c._id)}
                >
                  delete
                </button>
                <Link
                  to={`/admin/category/update/${c._id}`}
                  className="btn btn-warning"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LIstCategory;
