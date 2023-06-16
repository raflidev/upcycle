import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddPost from "./pages/AddPost";
import EditProfile from "./pages/EditProfile";
import Logout from "./pages/Logout";
import EditPost from "./pages/EditPost";
import ListTransaksi from "./pages/ListTransaksi";
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:status" element={<ListTransaksi />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;