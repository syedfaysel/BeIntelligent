import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
<<<<<<< HEAD
import SelectGenre from "./SelectGenre";

function App() {
    return (
        <div
            className="text-white h-[100vh] flex justify-center items-center bg-cover"
            style={{ backgroundImage: "url('../src/assets/bookstore-bg.jpg')" }}
        >
            <Routes>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="selectgenre" element={<SelectGenre />}></Route>
            </Routes>
        </div>
    );
=======

function App() {
  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover"
      style={{ backgroundImage: "url('../src/assets/bookstore-bg.jpg')" }}
    >
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </div>
  );
>>>>>>> 8e9e2eaced6566fe7886a1108c6c846fe807cee3
}

export default App;
