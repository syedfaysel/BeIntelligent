import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import SelectGenre from "./SelectGenre";
import BookInfo from "./book_info/BookInfo";
import BookReview from "./book_review/BookReview";
import EditReview from "./book_review/EditReview";
import BookSearch from "./book_search/BookSearch";
import BookLibrary from "./book_library/BookLibrary";
import login_info from "./login_info";
import { useEffect } from "react";
import UserProfile from "./user_profile/UserProfile";
import Challenges from "./challenges/Challenges";
export default function () {
    const navigate_to = useNavigate();
    // navigate_to("/login");
    // useEffect(() => {
    //     if (!login_info.user_name && login_info.strict) {
    //         navigate_to("/login");
    //         login_info.strict = false;
    //     }
    // });

    return (
        <Routes>
            <Route path="/booksearch" element={<BookSearch />} />
            <Route path="/bookinfo" element={<BookInfo />} />
            <Route path="/bookreview" element={<BookReview />} />
            <Route path="/editreview" element={<EditReview />} />
            <Route path="/userprofile" element={<UserProfile />} />

            <Route path="login" element={<Login />}></Route>
            <Route path="/challenges" element={<Challenges />} />
            <Route path="register" element={<Register />}></Route>
            <Route path="selectgenre" element={<SelectGenre />}></Route>
            <Route path="booklibrary" element={<BookLibrary />} />
        </Routes>
    );
}
