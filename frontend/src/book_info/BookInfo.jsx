import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../common_components/Footer";
import MenuDropdown from "../common_components/MenuDropdown";
import { useState, useEffect } from "react";
import "./BookInfo.css";

export default function () {
    const navigate_to = useNavigate();
    let name, author, rating, genre, image_url, description, b_id;
    const [bg_image, set_bg_image] = useState(
        `url('./src/assets/the_foundation_2.jpg')`
    );

    const library_list = ["Want to Read", "Completed", "Reading"];

    try {
        const { state } = useLocation();
        image_url = state.image_url;
        name = state.name;
        author = state.author;
        rating = state.rating;
        genre = state.genre;
        description = state.description;
        b_id = state.b_id;
        console.log(state.b_id);
    } catch (e) {
        b_id = "foo";
        image_url = "./src/assets/the_foundation_2.jpg";
        name = "The Foundation 3";
        author = "Isaac Asimov";
        rating = 4.8;
        genre = ["fantasy"];
    }

    useEffect(() => {
        set_bg_image(`url('${image_url}')`);
    }, []);

    return (
        <div
            className="flex flex-col bg-cover"
            // subject to change based on relative image link
            style={{ backgroundImage: bg_image }}
        >
            <div className="shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
                <div className="backdrop-blur-sm bg-black/70">
                    <div className="navbar bg-base-100">
                        <div className="flex-1">
                            <a className="btn btn-ghost text-xl">
                                BIntellegent
                            </a>
                        </div>
                        <div className="flex-none gap-2">
                            <MenuDropdown />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 content-center bi-info-page-mid">
                        <div className="justify-self-center self-center bi-book-cover">
                            <img
                                src={image_url}
                                alt="Cover"
                                className="object-cover max-h-screen"
                            />
                        </div>
                        <div className="flex flex-col justify-self-center self-center gap-2">
                            {/* place inoframtions here */}
                            <div>
                                <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white break-all">
                                    {name}
                                </h1>
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className="rating">
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        checked
                                    />
                                </div>
                                <h5 className="text-xl font-bold dark:text-white">
                                    {rating}
                                </h5>
                            </div>
                            <div className="bi-author-name-display">
                                <h3 className="text-3xl font-bold dark:text-white break-all">
                                    {author}
                                </h3>
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold dark:text-white break-all">
                                    Description:
                                </h3>
                            </div>
                            <div>
                                <p className="text-lg text-gray-900 dark:text-white">
                                    {description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {genre.map((item) => (
                                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <div className="dropdown dropdown-end dropdown-top">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                    >
                                        Add to Library
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        {library_list.map((item) => (
                                            <li>
                                                <a>{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-end dropdown-top">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                    >
                                        Delete from Library
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        {library_list.map((item) => (
                                            <li>
                                                <a>{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                        onClick={() => {
                                            navigate_to("/bookreview");
                                        }}
                                    >
                                        Reviews
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
