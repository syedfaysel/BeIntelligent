import React, { useState } from "react";

const UserReview = ({
    userName,
    initialRating,
    initialDescription,
    initialLikesCount,
}) => {
    const [rating, setRating] = useState(initialRating);
    const [description, setDescription] = useState(initialDescription);
    const [likesCount, setLikesCount] = useState(initialLikesCount);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (liked) {
            setLikesCount(likesCount - 1);
        } else {
            setLikesCount(likesCount + 1);
        }
        setLiked(!liked);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-xl">
            <div className="flex flex-col items-center m-4">
                <h3 className="text-2xl font-bold mb-4">{userName}</h3>
                <div className="mb-4">
                    {/* DaisyUI Star Rating */}
                    <div className="rating rating-lg">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <input
                                key={index}
                                type="radio"
                                name={`rating-${userName}`}
                                className={`mask mask-star-2 bg-orange-400 cursor-pointer ${
                                    rating >= index ? "checked" : ""
                                }`}
                                onChange={() => setRating(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    {/* Dummy Book Description (non-editable) */}
                    <textarea
                        className="w-full h-20 p-2 bg-gray-100 border border-gray-300 rounded-md resize-none"
                        value={description}
                        readOnly
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="btn btn-primary" onClick={handleLike}>
                        {liked ? "Unlike" : "Like"}
                    </button>
                    <span className="text-sm">{likesCount} Likes</span>
                    <button className="btn btn-secondary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default UserReview;
