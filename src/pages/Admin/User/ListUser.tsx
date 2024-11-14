import React from "react";
import { useAuth } from "../../../hook/userAuth";

const ListUser = () => {
  const { user, deleteUser } = useAuth();
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">username</th>
            <th scope="col">phone</th>
            <th scope="col">email</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((u) => (
            <tr>
              <td>{u._id}</td>
              <td>{u.username}</td>
              <td>{u.phone}</td>
              <td>{u.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(u._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
