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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<AddPost />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;