import { useEffect, useState } from "react";
import { Users } from "../interface/User";
import axios from "axios";

export const useAuth = () => {
  const [user, setUser] = useState<Users[]>([]);
  useEffect(() => {
    (async () => {
      getAllUser();
    })();
  }, []);
  const getAllUser = async () => {
    const { data } = await axios.get("http://localhost:3000/api/user");
    setUser(data);
  };
  const deleteUser = async (_id: string) => {
    if (confirm("delete")) {
      await axios.delete("http://localhost:3000/api/user/" + _id);
      getAllUser();
    }
  };
  return {
    user,
    deleteUser,
  };
};
