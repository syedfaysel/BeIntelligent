import { useState } from 'react';
import './styles/MenuBar.css';

export default function({change_searched_keyword, change_current_genre}) {
    const [inputval, change_inputval] = useState('');
    return (
        <div className="navbar bg-base-100 bi-nav">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">BIntellegent</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search Books" className="input input-bordered w-24 md:w-auto bi-searchbox" value={inputval} onKeyDown={(key)=>{
                    if(key.code === "Enter") {
                        change_searched_keyword(inputval);
                        change_current_genre('');
                        change_inputval('');
                    }
                }} onChange={(evnt)=>change_inputval(inputval + evnt.nativeEvent.data)}/>
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="./src/assets/user_icon.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li key="profile">
                    <a className="justify-between">
                        Profile
                        <span className="badge">Active</span>
                    </a>
                    </li>
                    <li key="library"><a>Library</a></li>
                    <li key="book-list"><a>Book List</a></li>
                    <li key="challenges"><a>Challenges</a></li>
                    <li key="logout"><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}