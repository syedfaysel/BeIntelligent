import React, { useEffect, useState } from "react";
import BookDetailButton from "./BookDetailButton";
import UserReview from "./UserReview";
import { useLocation, useNavigate } from "react-router";
import { _getReviewsByBookId } from "../../utils/axios_controllers";
import login_info from "../../login_info";

export default () => {
    const navigate_to = useNavigate();
    const [page_changed, trigger_page_changed] = useState(0);
    let name, image_url, b_id;

    try {
        const { state } = useLocation();
        image_url = state.image_url;
        name = state.name;
        b_id = state.b_id;
        // console.log(image_url, name, b_id);
    } catch (e) {
        b_id = "foo";
        image_url = "./src/assets/the_foundation_2.jpg";
        name = "The Foundation 3";
    }

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
                userName: "John Doe a",
                initialRating: 4,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 200,
            },
            {
                id: 2,
                userName: "John Doe b",
                initialRating: 2,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 2020,
            },
            {
                id: 3,
                userName: "John Doe c",
                initialRating: 3,
                initialDescription: "A great book! Highly recommendedxxx.",
                initialLikesCount: 3200,
            },
            {
                id: 4,
                userName: "John Doe d",
                initialRating: 4,
                initialDescription: "A great book! Highly recommended.",
                initialLikesCount: 4200,
            },
        ],
    };
    // Add more book-review pairs as needed
    const [book_reviews, change_book_reviews] = useState(
        placeholder_data.review
    );
    const [show_add, change_show_add] = useState(true);

    useEffect(() => {
        if (login_info.user_name) {
            _getReviewsByBookId(login_info.token, b_id).then((data) => {
                const tmp_reviews = data.reviews.map((item) => {
                    return {
                        id: item.book,
                        userName: item.username,
                        initialRating: item.rating,
                        initialDescription: item.reviewText,
                        initialLikesCount: item.likes.length,
                    };
                });
                change_book_reviews(tmp_reviews);
                // console.log(tmp_reviews);
            });
        } else {
            console.log("Not logged in");
        }
    }, [page_changed]);

    return (
        <div>
            <div className="container mx-auto mt-8 grid grid-cols-1 gap-8">
                <BookDetailButton
                    book={{
                        id: b_id,
                        title: name,
                        imageUrl: image_url,
                        show_add: show_add,
                    }}
                />
                {book_reviews.map((item) => (
                    <div className="grid grid-cols-1 gap-8">
                        <UserReview
                            userName={item.userName}
                            initialRating={item.initialRating}
                            initialDescription={item.initialDescription}
                            initialLikesCount={item.initialLikesCount}
                            show_add={show_add}
                            change_show_add={change_show_add}
                            b_id={b_id}
                            trigger_page_changed={trigger_page_changed}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

// export default Review;
