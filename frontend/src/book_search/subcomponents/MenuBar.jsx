import './styles/MenuBar.css';

export default function() {
    return (
        <div className="navbar bg-base-100 bi-nav">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">BIntellegent</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search Books" className="input input-bordered w-24 md:w-auto bi-searchbox" />
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="./src/assets/user_icon.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Library</a></li>
                    <li><a>Challenges</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}