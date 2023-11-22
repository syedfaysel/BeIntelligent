import { Routes, Route } from "react-router-dom";
import BookInfo from "./book_info/BookInfo";
import BookSearch from "./book_search/BookSearch";
import Login from "./Login";
import Register from "./Register";
import SelectGenre from "./SelectGenre";
import Test from "./utils/Test";
export default function () {
    return (
        <Routes>
            <Route path="/booksearch" element={<BookSearch />} />
            <Route path="/bookinfo" element={<BookInfo />} />

            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="selectgenre" element={<SelectGenre />}></Route>
            <Route path="/test-api" element={<Test/>}></Route>
        </Routes>
    );
}
