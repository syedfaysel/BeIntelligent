import { useNavigate } from "react-router-dom";

export default function () {
    const navigate_to = useNavigate();
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="./src/assets/user_icon.jpg"
                    />
                </div>
            </label>
            <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
                <li
                    key="profile"
                    onClick={() => {
                        navigate_to("/userprofile");
                    }}
                >
                    <a className="justify-between">
                        Profile
                        <span className="badge">Active</span>
                    </a>
                </li>
                <li
                    key="library"
                    onClick={() => {
                        navigate_to("/booklibrary");
                    }}
                >
                    <a>Library</a>
                </li>
                <li
                    key="book-list"
                    onClick={() => {
                        navigate_to("/booksearch");
                    }}
                >
                    <a>Book List</a>
                </li>
                <li
                    key="challenges"
                    onClick={() => {
                        navigate_to("/challenges");
                    }}
                >
                    <a>Challenges</a>
                </li>
                <li
                    key="logout"
                    onClick={() => {
                        navigate_to("/login");
                    }}
                >
                    <a>Logout</a>
                </li>
            </ul>
        </div>
    );
}
