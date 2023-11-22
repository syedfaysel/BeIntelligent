import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
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
}

export default App;
