import MenuBar from './subcomponents/MenuBar';
import MiddleSection from './subcomponents/MiddleSection';
import Footer from './subcomponents/Footer';
import './BookSearch.css';
import { useState } from 'react';

export default function() {
    const user_name = "Ahsan Habib";
    const recommended_genre = ["romance", "mystery"];
    const [searched_keyword, change_searched_keyword] = useState('');
    const [current_genre, change_current_genre] = useState('');
    const [current_page, change_current_page] = useState(1);
    const genres = ["all" ,"romance", "fiction", "young-adult", "fantasy", "science-fiction", "non-fiction", "children", "history", "mystery", "covers", "horror", "historical-fiction", "best", "gay", "titles", "paranormal", "middle-grade", "love", "contemporary", "historical-romance", "lgbt", "queer", "nonfiction", "thriller", "biography", "women", "series", "lgbtq", "classics", "title-challenge"];
    const books = [
        {
            name : "The Foundation 1 HAHAHAHAHAHHAHAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["romance", "fiction"],
        },
        {
            name : "The Foundation 2",
            author : "Isaac Asimov hahahhahfshesfsjlfosefesofjesofehsofefhsofeo",
            rating : 4.8,
            genre : ["young-adult", "fantasy", "science-fiction"],
        },
        {
            name : "The Foundation 3",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["young-adult", "fantasy", "science-fiction"],
        },
        {
            name : "The Foundation 4",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["science-fiction", "non-fiction", "children", "history", "mystery", "covers", "horror"],
        },
        {
            name : "The Foundation 5",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["fantasy", "science-fiction", "non-fiction", "children", "history", "mystery", "covers", "horror", "historical-fiction", "best", "gay", "titles", "paranormal", "middle-grade", "love", "contemporary", "historical-romance", "lgbt", "queer"],
        },
        {
            name : "The Foundation 6",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["lgbt", "queer", "nonfiction", "thriller", "biography", "women", "series", "lgbtq", "classics", "title-challenge"],
        },
        {
            name : "The Foundation 7",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["romance", "fiction", "young-adult", "fantasy", "science-fiction"],
        },
        {
            name : "The Foundation 8",
            author : "Isaac Asimov",
            rating : 4.8,
            genre : ["romance", "fiction", "young-adult", "fantasy", "science-fiction", "non-fiction", "children", "history", "mystery", "covers", "horror", "historical-fiction", "best", "gay", "titles", "paranormal", "middle-grade", "love", "contemporary", "historical-romance", "lgbt", "queer", "nonfiction", "thriller", "biography", "women", "series", "lgbtq", "classics", "title-challenge"],
        },
        {
            name : "The Fool",
            author : "Mark Toyen",
            rating : 4.9,
            genre : ["romance"],
        }
    ]

    const recommended_book_list = books.filter((item)=>{
        let choose = false;
        for(let i=0; i<recommended_genre.length; i++) {
            choose = item.genre.includes(recommended_genre[i]) | choose;
        }
        return choose;
    });

    const [books_to_show, change_books_to_show] = useState([...recommended_book_list]);
    let bookpage_heading_text = searched_keyword ? "Showing Search Result for Keyword \""+searched_keyword+"\"": current_genre ? (current_genre === 'all') ? "Showing All Books" : "Showing Books Related to \""+current_genre+"\"" : "Showing Recommended Books for "+user_name;
    
    return (<div className='flex flex-col'>
    <MenuBar change_searched_keyword={change_searched_keyword} change_current_genre={change_current_genre}/>
    <div className='flex flex-row bi-bookpage-heading'>
    <h2 className='text-2xl font-bold dark:text-white'>{bookpage_heading_text}</h2>
    { (searched_keyword || current_genre) ? <button className="btn btn-sm btn-square btn-outline" onClick={() =>{
        change_books_to_show([...recommended_book_list]);
        change_current_page(1);
        if (current_genre){
            change_current_genre('');
        } 
        if (searched_keyword) {
            change_searched_keyword('');
        }
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button> : ''} 
    </div>
    <MiddleSection genres={genres} books={books} change_current_genre={change_current_genre} change_searched_keyword={change_searched_keyword} books_to_show={books_to_show} change_books_to_show={change_books_to_show} current_page={current_page} change_current_page={change_current_page}/>
    <Footer />
    </div>
    )
}