import React, { useState } from "react";

const EditReview = ({}) => {
    const userName = "mememe";
    const initialRating = 2;
    const initialDescription = "Bujhtesi na ki lekbhbo";
    const [rating, setRating] = useState(initialRating);
    const [description, setDescription] = useState(initialDescription);

    // userName, initialRating, initialDescription
    return (
        <div className="container mx-auto mt-8">
            <div className="flex flex-col items-center">
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
                        className="w-full h-40 p-2 bg-gray-100 border border-gray-300 rounded-md resize-none"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="flex items-start space-x-4">
                    <button className="btn btn-secondary">Cancel</button>
                    <button className="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditReview;
