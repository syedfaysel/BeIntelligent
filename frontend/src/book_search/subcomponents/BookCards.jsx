import { useState } from "react";
import Card from "./Card";

export default function() {
    const books = [
        {
            name : "The Foundation 1 HAHAHAHAHAHHAHAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["Sci-Fi", "Thriller"],
        },
        {
            name : "The Foundation 2",
            author : "Isaac Asimov hahahhahfshesfsjlfosefesofjesofehsofefhsofeo",
            rating : 4.8,
            genre : ["Sci-Fi", "Thriller"],
        },
        {
            name : "The Foundation 3",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["Supernatural", "Romance", "Fantacy", "Sci-Fi", "Thriller"],
        },
        {
            name : "The Foundation 4",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["Sci-Fi", "Thriller"],
        },
        {
            name : "The Foundation 5",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["Sci-Fi", "Thriller"],
        },
        {
            name : "The Foundation 6",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["Sci-Fi", "Thriller"],
        },
        {
            name : "The Foundation 7",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["Sci-Fi", "Thriller"],
        },
        {
            name : "The Foundation 8",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["Sci-Fi", "Thriller"],
        },
        // {
        //     name : "The Foundation 9",
        //     author : "Isaac Asimov",
        //     rating : 4.8,
        //     genre : ["Sci-Fi", "Thriller"],
        // },
        // {
        //     name : "The Foundation 10",
        //     author : "Isaac Asimov",
        //     rating : 4.8,
        //     genre : ["Sci-Fi", "Thriller"],
        // },
    ]

    const number_of_page = Math.ceil(books.length/6);
    const [current_page, change_current_page] = useState(1);
    const [current_books, change_current_books] = useState(books.slice(current_page*6-6, current_page*6));

    return (
    <div className="grid gap-4">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {current_books.map((item)=> <Card name={item.name} author={item.author} rating={item.rating} genre={item.genre}/>) || "No Item Found"}
        </div>
        <div className="join place-self-center">
            <button className="join-item btn" onClick={() => {
                if(current_page > 1) {
                    change_current_page(current_page - 1);
                    change_current_books(books.slice(current_page*6-12, current_page*6-6));
                }
            }}>«</button>
            <button className="join-item btn">Page {current_page}</button>
            <button className="join-item btn" onClick={() => {
                if(current_page < number_of_page) {
                    change_current_page(current_page + 1);
                    change_current_books(books.slice(current_page*6, current_page*6+6));
                }
            }}>»</button>
        </div>
    </div>
    )
}