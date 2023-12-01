import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    // console.log(rating);
    const navigate_to = useNavigate();

    const handleLike = () => {
        if (liked) {
            setLikesCount(likesCount - 1);
        } else {
            setLikesCount(likesCount + 1);
        }
        setLiked(!liked);
    };

    return (
        <div className="bg-black p-4 rounded-xl shadow-xl">
            <div className="flex flex-col items-center m-4">
                <h3 className="text-2xl font-bold mb-4">{userName}</h3>
                <div className="mb-4">
                    {/* DaisyUI Star Rating */}
                    <div className="rating rating-md">
                        {[1, 2, 3, 4, 5].map((index) => {
                            // console.log(index, Math.floor(rating));
                            return (
                                <input
                                    key={index}
                                    type="radio"
                                    name={`rating-${userName}`}
                                    className={`mask mask-star-2 bg-orange-400 ${
                                        Math.floor(rating) == index
                                            ? "checked"
                                            : ""
                                    }`}
                                    // onChange={() => setRating(index)}
                                    // disabled
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="mb-4">
                    {/* Dummy Book Description (non-editable) */}
                    <textarea
                        className="w-96 h-auto p-2 bg-black-100  rounded-md resize-none"
                        value={description}
                        readOnly
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="btn btn-primary" onClick={handleLike}>
                        {liked ? "Unlike" : "Like"}
                    </button>
                    <span className="text-sm">{likesCount} Likes</span>
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            navigate_to("/editreview", {
                                state: {
                                    userName: userName,
                                    initialRating: initialRating,
                                    initialDescription: initialDescription,
                                },
                            });
                        }}
                    >
                        Edit
                    </button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default UserReview;
