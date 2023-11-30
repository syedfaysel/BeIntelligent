import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import SelectGenre from "./SelectGenre";
import BookInfo from "./book_info/BookInfo";
import BookReview from "./book_review/BookReview";
import EditReview from "./book_review/EditReview";
import BookSearch from "./book_search/BookSearch";
export default function () {
    return (
        <Routes>
            <Route path="/booksearch" element={<BookSearch />} />
            <Route path="/bookinfo" element={<BookInfo />} />
            <Route path="/bookreview" element={<BookReview />} />
            <Route path="/editreview" element={<EditReview />} />

            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="selectgenre" element={<SelectGenre />}></Route>
        </Routes>
    );
}
