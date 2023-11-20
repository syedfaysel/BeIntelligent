import BookCards from "./BookCards";

export default function() {

    const genres = ["Horror", "Supernatural", "Romance", "Fantacy", "Politics", "Thriller", "Sci-Fi", "Supernatural", "Romance", "Fantacy", "Politics", "Thriller", "Sci-Fi", "Supernatural", "Romance", "Fantacy", "Politics", "Thriller", "Sci-Fi"];

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                    <BookCards />

                    <label htmlFor="my-drawer-2" className="btn btn-neutral drawer-button lg:hidden">Select Genre</label>

                </div> 
                <div className="drawer-side bi-sidebar">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {genres.map((genre)=> <li><a>{genre}</a></li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}