import React from "react";
import login_info from "../../login_info";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate_to = useNavigate();
    const user = {
        name: login_info.user_name,
        email: login_info.email,
        profilePicture: "https://placekitten.com/200/200",
    };

    return (
        <div className="p-4 text-center">
            {/* User Picture */}
            <div className="overflow-hidden  flex justify-center">
                <img
                    src={user.profilePicture}
                    alt="User Profile"
                    className="rounded-full m-4"
                />
            </div>

            {/* User Details */}
            <div className="">
                <h2 className="text-3xl font-bold m-4">{`${login_info.first_name} ${login_info.last_name}[@${user.name}]`}</h2>
                <p className="text-gray-600 text-2xl m-4">{user.email}</p>
            </div>

            {/* Edit Profile Button */}
            <button
                className="btn btn-primary m-4"
                onClick={() => {
                    navigate_to("/editprofile");
                }}
            >
                Edit Profile
            </button>
        </div>
    );
};

export default UserDetails;
