import { useLocation } from "react-router-dom";
import Footer from "../common_components/Footer";
import MenuDropdown from "../common_components/MenuDropdown";
import "./BookInfo.css";

export default function () {
    let name, author, rating, genre, image_url;

    try {
        const { state } = useLocation();
        image_url = state.image_url;
        name = state.name;
        author = state.author;
        rating = state.rating;
        genre = state.genre;
        console.log(state);
    } catch (e) {
        image_url = "./src/assets/the_foundation_2.jpg";
        name = "The Foundation 3";
        author = "Isaac Asimov";
        rating = 4.8;
        genre = [
            "fantasy",
            "science-fiction",
            "non-fiction",
            "children",
            "history",
            "mystery",
            "covers",
            "horror",
            "historical-fiction",
            "best",
            "gay",
            "titles",
            "paranormal",
            "middle-grade",
            "love",
            "contemporary",
            "historical-romance",
            "lgbt",
            "queer",
        ];
    }

    return (
        <div
            className="flex flex-col bg-cover"
            // subject to change based on relative image link
            style={{ backgroundImage: "url('." + image_url + "')" }}
        >
            <div className="backdrop-blur-sm bg-black/50">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">BIntellegent</a>
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
                        <div className="flex flex-wrap gap-2">
                            {genre.map((item) => (
                                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
