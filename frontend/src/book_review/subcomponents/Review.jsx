import React from "react";
import BookDetailButton from "./BookDetailButton";
import UserReview from "./UserReview";

const Review = () => {
    const placeholder_data = {
        book: {
            id: 1,
            title: "Book 1",
            imageUrl:
                "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        review: [
            {
                id: 1,
                userName: "John Doe",
                initialRating: 4,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 200,
            },
            {
                id: 2,
                userName: "John Doe",
                initialRating: 2,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 2020,
            },
            {
                id: 3,
                userName: "John Doe",
                initialRating: 3,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 3200,
            },
            {
                id: 4,
                userName: "John Doe",
                initialRating: 4,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 4200,
            },
        ],
    };
    // Add more book-review pairs as needed

    return (
        <div>
            <div className="container mx-auto mt-8 grid grid-cols-1 gap-8">
                <BookDetailButton book={placeholder_data.book} />
                {placeholder_data.review.map((item) => (
                    <div className="grid grid-cols-1 gap-8">
                        <UserReview
                            userName={item.userName}
                            initialRating={item.initialRating}
                            initialDescription={item.initialDescription}
                            initialLikesCount={item.initialLikesCount}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
