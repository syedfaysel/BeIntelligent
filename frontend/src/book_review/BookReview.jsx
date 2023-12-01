import React from "react";
import MenuDropdown from "../common_components/MenuDropdown";
import Footer from "../common_components/Footer";
import Review from "./subcomponents/Review";
// import "../book_search/subcomponents/styles/MenuBar.css";

const BookReview = () => {
    return (
        <div>
            <div className="navbar bg-base-100 bi-nav">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">BIntellegent</a>
                    </div>
                    <div className="flex-none gap-2">
                        <MenuDropdown />
                    </div>
                </div>
            </div>
            {/* <EditReview /> */}
            <Review />
            <Footer />
        </div>
    );
};

export default BookReview;
