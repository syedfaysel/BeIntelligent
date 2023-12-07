// UserProfile.jsx
import React from "react";
import ChallengeDetails from "./subcomponents/ChallengeDetails";
import UserDetails from "./subcomponents/UserDetails";

const UserProfile = () => {
    return (
        <div className="m-auto p-4">
            <div className="grid grid-cols-2 items-">
                <div>
                    <UserDetails />
                </div>

                <div>
                    <ChallengeDetails />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
