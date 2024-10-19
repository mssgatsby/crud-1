import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import EditPage from "./pages/edit";
import { Link } from "react-router-dom";
import UpdatePage from "./pages/update";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/edit"}>Edit</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/update" element={<UpdatePage />} />
      </Routes>
    </>
  );
}

export default App;
