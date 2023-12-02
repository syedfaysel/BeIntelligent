import React, { useState } from "react";
import MenuDropdown from "../common_components/MenuDropdown";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../common_components/Footer";

const EditReview = ({}) => {
    let userName, initialRating, initialDescription;
    const navigate_to = useNavigate();
    try {
        const { state } = useLocation();
        userName = state.userName;
        initialRating = state.initialRating;
        initialDescription = state.initialDescription;
    } catch (e) {
        userName = "mememe";
        initialRating = 2;
        initialDescription = "Bujhtesi na ki lekbhbo";
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
                        {/* DaisyUI Editable Star Rating */}
                        <div className="rating rating-lg">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <input
                                    key={index}
                                    type="radio"
                                    name={`rating-${userName}-edit`}
                                    className={`mask mask-star-2 bg-orange-400 cursor-pointer ${
                                        rating >= index ? "checked" : ""
                                    }`}
                                    onChange={() => setRating(index)}
                                />
                            ))}
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
                            onClick={() => navigate_to("/bookreview")}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate_to("/bookreview")}
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

export default EditReview;
