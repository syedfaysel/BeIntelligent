import { useState } from "react";
import "./styles/MenuBar.css";
import MenuDropdown from "../../common_components/MenuDropdown";

export default function ({
    books,
    change_current_page,
    change_books_to_show,
    change_is_sorted_by_rating,
}) {
    const [inputval, change_inputval] = useState("");
    return (
        <div className="navbar bg-base-100 bi-nav">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">BIntellegent</a>
            </div>
            <div className="flex-none gap-2">
                {/* <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search Books"
                        className="input input-bordered w-24 md:w-auto bi-searchbox"
                        value={inputval}
                        onKeyDown={(key) => {
                            if (key.code === "Enter" && inputval) {
                                const filtered_book = books.filter((item) => {
                                    const exist_in =
                                        item.name
                                            .toLowerCase()
                                            .includes(inputval.toLowerCase()) ||
                                        item.author
                                            .toLowerCase()
                                            .includes(inputval.toLowerCase());
                                    return exist_in;
                                });
                                change_is_sorted_by_rating(false);
                                // change_searched_keyword(inputval);
                                change_current_page(1);
                                change_books_to_show(filtered_book);
                                change_inputval("");
                            }
                        }}
                        onChange={(evnt) => {
                            if (evnt.nativeEvent.data == null) {
                                change_inputval(
                                    inputval.slice(0, inputval.length - 2)
                                );
                            } else {
                                change_inputval(
                                    inputval + evnt.nativeEvent.data
                                );
                            }
                        }}
                    />
                </div> */}
                <MenuDropdown />
            </div>
        </div>
    );
}
