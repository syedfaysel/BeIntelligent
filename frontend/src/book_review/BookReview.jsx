import React from "react";
import MenuBar from "../book_search/subcomponents/MenuBar";
import Footer from "../common_components/Footer";
import Review from "./subcomponents/Review";
// import "../book_search/subcomponents/styles/MenuBar.css";

const BookReview = () => {
    return (
        <div>
            <div className="navbar bg-base-100 bi-nav">
                <MenuBar />
            </div>
            {/* <EditReview /> */}
            <Review />
            <Footer />
        </div>
    );
};

export default BookReview;
