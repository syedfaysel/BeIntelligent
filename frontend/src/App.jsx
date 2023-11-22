import { Routes, Route } from "react-router-dom";
import BookInfo from "./book_info/BookInfo";
import BookSearch from "./book_search/BookSearch";
export default function () {
    return (
        <Routes>
            <Route path="/booksearch" element={<BookSearch />} />
            <Route path="/bookinfo" element={<BookInfo />} />
        </Routes>
    );
}
