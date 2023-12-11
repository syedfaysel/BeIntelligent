import React, { useState, useEffect } from "react";
import login_info from "../../login_info";
import {
    _getReviewsByUsername,
    _getShelves,
} from "../../utils/axios_controllers";
import { useNavigate } from "react-router";

const ChallengeDetails = () => {
    const navigate_to = useNavigate();
    const challengeData = {
        booksRead: 0,
        pagesRead: 0,
        shelvesInLibrary: 3,
        bookList: [
            "Book 1",
            "Book 2",
            "Book 3",
            "Book 4",
            "Book 5",
            "Book 6",
            "Book 7",
            "Book 8",
            "Book 9",
            "Book 10",
            "Book 11",
            "Book 12",
        ],
        shelfList: [
            "Shelf 1",
            "Shelf 2",
            "Shelf 3",
            "Shelf 4",
            "Shelf 5",
            "Shelf 6",
            "Shelf 7",
            "Shelf 8",
            "Shelf 9",
            "Shelf 10",
            "Shelf 11",
            "Shelf 12",
        ],
    };

    const [libraryFolder, change_libraryFolder] = useState([]);
    useEffect(() => {
        if (login_info.user_name) {
            // _getReviewsByUsername(login_info.token).then((data) =>
            //     console.log(data)
            // );

            _getShelves(login_info.user_name).then((data) => {
                const tmp_data = data.shelves.map((item) => {
                    // console.log(item.books);
                    return item.label;
                });
                change_libraryFolder(tmp_data);
                // console.log(tmp_data);
            });
        } else {
            console.log("Not logged in");
        }
    }, []);

    const [showAllBooks, setShowAllBooks] = useState(false);

    const [showAllShelves, setShowAllShelves] = useState(false);

    return (
        <div className="p-4">
            <div className="text-lg font-bold mb-4 border rounded-lg p-2">
                <h2>Number of Books Read : {challengeData.booksRead}</h2>
            </div>

            <div className="text-lg font-bold mb-4 border rounded-lg p-2">
                <h2>Total Pages Read : {challengeData.pagesRead}</h2>
            </div>

            <div className="text-lg font-bold mb-4 border rounded-lg p-2">
                <h2>Number of Shelves in Library : {libraryFolder.length}</h2>
            </div>

            <div className="mb-4">
                <h2 className="text-center m-3 text-4xl font-bold">
                    Your Challenges
                </h2>
                <h2 className="text-center m-2 text-xl font-bold">
                    1 Challenge Activated this year
                </h2>
                {/* <ul className="text-lg m-2">
                    {challengeData.bookList
                        .slice(0, showAllBooks ? undefined : 6)
                        .map((book, index) => (
                            <li key={index}>{book}</li>
                        ))}
                </ul> */}
                <button
                    className="btn btn-secondary mt-2"
                    onClick={() => {
                        navigate_to("/challenges");
                    }}
                >
                    View Challenge
                </button>
            </div>

            <div>
                <h2 className="text-center m-3 text-4xl font-bold">
                    Your Library
                </h2>

                <ul className="text-lg m-2">
                    {libraryFolder
                        .slice(0, showAllShelves ? undefined : 6)
                        .map((shelf, index) => (
                            <li key={index}>{shelf}</li>
                        ))}
                </ul>

                <button
                    className="btn btn-secondary mt-2"
                    onClick={() => {
                        navigate_to("/booklibrary");
                    }}
                >
                    View All
                </button>
            </div>
        </div>
    );
};

export default ChallengeDetails;
