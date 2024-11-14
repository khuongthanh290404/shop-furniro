import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./pages/Admin/Product/List";
import Update from "./pages/Admin/Product/Update";
import Add from "./pages/Admin/Product/Add";
import Home from "./pages/client/Home";
import Register from "./pages/client/Register";
import Login from "./pages/client/Login";
import LayoutClient from "./components/LayoutClient";
import LayoutAdmin from "./components/LayoutAdmin";
import Detail from "./pages/client/Detail";
import LIstCategory from "./pages/Admin/Category/LIstCategory";
import AddCategory from "./pages/Admin/Category/AddCategory";
import UpdateCategory from "./pages/Admin/Category/UpdateCategory";
import Shop from "./pages/client/Shop";
import ListUser from "./pages/Admin/User/ListUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="" element={<List />} />
          <Route path="/admin/add" element={<Add />} />
          <Route path="/admin/update/:id" element={<Update />} />
          <Route path="category" element={<LIstCategory />} />
          <Route path="/admin/category/add" element={<AddCategory />} />
          <Route
            path="/admin/category/update/:id"
            element={<UpdateCategory />}
          />
          <Route path="/admin/user" element={<ListUser />} />
        </Route>

        <Route path="/" element={<LayoutClient />}>
          <Route path="" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
