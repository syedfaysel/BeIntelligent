import React from "react";

const BookDetailButton = ({ book }) => {
    const { imageUrl, title } = book;
    return (
        <div>
            <div className="bg-black p-4 rounded-xl shadow-xl">
                <div className="flex items-center m-4">
                    <img
                        src={imageUrl}
                        alt="Book Cover"
                        className="w-80 h-80 m-4"
                    />
                    <div>
                        <h3 className="text-4xl font-bold p-3">{title}</h3>
                        <div className="flex gap-10 my-8 mx-3">
                            <button className="btn btn-primary">
                                Give Review
                            </button>
                            <button className="btn btn-secondary">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailButton;
