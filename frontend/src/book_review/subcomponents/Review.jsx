import React from "react";
import BookDetailButton from "./BookDetailButton";
import UserReview from "./UserReview";

const Review = () => {
    const data = [
        {
            book: {
                id: 1,
                title: "Book 1",
                imageUrl:
                    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            review: {
                id: 1,
                userName: "John Doe",
                initialRating: 4,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 200,
            },
        },
        {
            book: {
                id: 2,
                title: "Book 2",
                imageUrl:
                    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            review: {
                id: 2,
                userName: "John Doe",
                initialRating: 2,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 2020,
            },
        },
        {
            book: {
                id: 3,
                title: "Book 3",
                imageUrl:
                    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            review: {
                id: 3,
                userName: "John Doe",
                initialRating: 3,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 3200,
            },
        },
        {
            book: {
                id: 4,
                title: "Book 4",
                imageUrl:
                    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            review: {
                id: 4,
                userName: "John Doe",
                initialRating: 4,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 4200,
            },
        },
        // Add more book-review pairs as needed
    ];

    return (
        <div>
            <div className="container mx-auto mt-8 grid grid-cols-1 gap-8">
                {data.map(({ book, review }) => (
                    <div key={book.id} className="grid grid-cols-1 gap-8">
                        <BookDetailButton book={book} />
                        <UserReview
                            userName={review.userName}
                            initialRating={review.initialRating}
                            initialDescription={review.initialDescription}
                            initialLikesCount={review.initialLikesCount}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
