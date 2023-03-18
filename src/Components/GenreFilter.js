// import MovieList from "./MovieList"

const GenreFilter = () =>
{
    const genres = 
    [ 
        "Drama", 
        "Crime", 
        "Action", 
        "Fantasy", 
        "Western", 
        "Science Fiction", 
        "Thriller", 
        "War", 
        "Animation"
    ];

    const displayGenreSelection =(genre) =>
    {
        console.log(`Filtering by ${genre}`);
    }

    return(
        <div>
            <h1> Top 15 Movies of All Time. </h1>
            <div className="genrebox">
                <h2 className="heading"> Filter by Genre: </h2>
                <div>
                    {
                        genres.map(genre =>
                        (
                            // console.log(genre);
                            <button className="genrebtn" onClick={ () => displayGenreSelection(genre)}> {genre} </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GenreFilter;