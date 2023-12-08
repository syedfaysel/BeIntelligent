import React, { useState } from "react";
import MenuDropdown from "../common_components/MenuDropdown";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../common_components/Footer";
import login_info from "../login_info";
import { _addReview, _editReview } from "../utils/axios_controllers";

export default ({}) => {
    let userName, initialRating, initialDescription, b_id, edit;

    try {
        const { state } = useLocation();
        b_id = state.b_id;
        edit = state.edit;
        if (login_info.user_name) userName = login_info.user_name;
        else userName = "Ahsan Habib";
        initialRating = 5;
        initialDescription = "";
        // console.log(b_id);
    } catch (e) {
        b_id = "foo";
        if (login_info.user_name) userName = login_info.user_name;
        else userName = "Ahsan Habib";
        initialRating = 5;
        initialDescription = "";
    }
    const navigate_to = useNavigate();
    try {
        const { state } = useLocation();
        userName = state.userName;
        initialRating = state.initialRating;
        initialDescription = state.initialDescription;
        if (!userName) throw new Error("UserName empty");
    } catch (e) {
        if (login_info.user_name) userName = login_info.user_name;
        else userName = "Ahsan Habib";
        initialRating = 5;
        initialDescription = "";
    }
    const [rating, setRating] = useState(initialRating);
    const [description, setDescription] = useState(initialDescription);

    // userName, initialRating, initialDescription
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">BIntellegent</a>
                </div>
                <div className="flex-none gap-2">
                    <MenuDropdown />
                </div>
            </div>
            <div className="container mx-auto mt-8 ">
                <div className="flex flex-col items-center h-screen">
                    <h3 className="text-2xl font-bold mb-4">{userName}</h3>
                    <div className="mb-4">
                        <div className="rating rating-md ">
                            {[1, 2, 3, 4, 5].map((index) => {
                                if (Math.floor(rating) == index) {
                                    return (
                                        <input
                                            key={index}
                                            type="radio"
                                            name={`rating-1`}
                                            className="mask mask-star-2 bg-orange-400"
                                            checked
                                            onChange={() => setRating(index)}
                                        />
                                    );
                                } else
                                    return (
                                        <input
                                            key={index}
                                            type="radio"
                                            name={`rating-1`}
                                            className="mask mask-star-2 bg-orange-400"
                                            onChange={() => setRating(index)}
                                        />
                                    );
                            })}
                        </div>
                    </div>
                    <div className="mb-4">
                        {/* Editable Description Box */}
                        <textarea
                            className="w-96 h-40 p-2 bg-gray-100 border border-gray-300 rounded-md resize-none"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex items-start space-x-4">
                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate_to(-1)}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                // console.log(rating, description);
                                if (login_info.user_name) {
                                    // console.log(edit);
                                    if (!edit) {
                                        const reviewData = {
                                            bookId: b_id,
                                            rating: rating,
                                            reviewText: description,
                                        };
                                        _addReview(
                                            login_info.token,
                                            reviewData
                                        ).then((data) => {
                                            // console.log(data);
                                            navigate_to(-1);
                                        });
                                    } else {
                                        const reviewData = {
                                            bookId: b_id,
                                            rating: rating,
                                            reviewText: description,
                                        };
                                        // console.log(reviewData);
                                        _editReview(
                                            login_info.token,
                                            reviewData
                                        ).then((data) => {
                                            // console.log(data);
                                            navigate_to(-1);
                                        });
                                    }
                                }
                                // navigate_to(-1)
                            }}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

// export default EditReview;
