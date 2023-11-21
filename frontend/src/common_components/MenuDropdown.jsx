export default function () {
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
                <li key="profile">
                    <a className="justify-between">
                        Profile
                        <span className="badge">Active</span>
                    </a>
                </li>
                <li key="library">
                    <a>Library</a>
                </li>
                <li key="book-list">
                    <a>Book List</a>
                </li>
                <li key="challenges">
                    <a>Challenges</a>
                </li>
                <li key="logout">
                    <a>Logout</a>
                </li>
            </ul>
        </div>
    );
}
