import { useEffect, useState } from "react";
import login_info from "../../login_info";
import { _deleteChallenge, _getChallenge } from "../../utils/axios_controllers";
import { useNavigate } from "react-router";

export default function () {
    const navigate_to = useNavigate();
    const [page_edited, trigger_page_edited] = useState(0);
    const [completedBooks, change_completedBooks] = useState(0),
        [progress, change_progress] = useState(0),
        [targetBooks, change_targetBooks] = useState(0),
        [username, change_username] = useState("Ahsan"),
        [year, change_year] = useState(2023);
    try {
        useEffect(() => {
            if (login_info.user_name) {
                _getChallenge(login_info.token)
                    .then((data) => {
                        // console.log(data);
                        const tmp = data.challengeDetails;

                        change_completedBooks(tmp.completedBooks);
                        change_progress(tmp.progress);
                        change_targetBooks(tmp.targetBooks);
                        change_username(tmp.username);
                        change_year(tmp.year);
                    })
                    .catch((err) => console.log(err));
            } else {
                console.log("Not looged in");
            }
        }, [page_edited]);
    } catch (e) {
        console.log("Error: ", e);
    }

    const showval = (label, value) => {
        return [
            <div>
                <h1 className="text-xl font-bold">{label} :</h1>
            </div>,
            <div>
                <h1 className="text-xl font-bold">{value}</h1>
            </div>,
        ];
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-12">
            <h1 className="text-4xl font-bold ">
                Book challenge for{" "}
                {login_info.user_name ? login_info.first_name : "Ahsan"} in year{" "}
                {year}
            </h1>
            <div className="grid grid-cols-[repeat(2,auto)] gap-x-12 w-max">
                {showval("Target Number of Books", targetBooks)}
                {showval("Completed Books", completedBooks)}
                {showval("Progress", progress + "%")}
            </div>

            <div className="flex gap-6">
                <button
                    className="btn btn-wide btn-outline btn-primary"
                    onClick={() => {
                        navigate_to("/editchallenge");
                    }}
                >
                    Edit Challenge
                </button>
                <button
                    className="btn btn-wide btn-outline btn-error"
                    onClick={() => {
                        _deleteChallenge(login_info.token).then((data) => {
                            trigger_page_edited(page_edited + 1);
                        });
                    }}
                >
                    Delete Challenge
                </button>
            </div>
        </div>
    );
}
