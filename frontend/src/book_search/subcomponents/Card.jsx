export default function({name, author, rating, genre}) {
    if(name.length > 20) name = name.slice(0, 16) + " ...";
    if(author.length > 30) author = author.slice(0, 26) + " ...";
    if(genre.length > 2) {
        genre = [genre[0], genre[1], "..."];
    }
    return (
        <div className="card w-72 bg-base-50 shadow-xl">
            {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <figure><img src="./src/assets/the_foundation.jpg" alt="Shoes" className="object-cover h-48 w-96"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">{rating}</div>
                </h2>
                <p>{author}</p>
                <div className="card-actions justify-end">
                    {genre.map((item) => <div className="badge badge-outline">{item}</div>)}
                </div>
            </div>
        </div>
    )
}