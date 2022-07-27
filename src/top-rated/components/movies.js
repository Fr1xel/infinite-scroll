import "./movie.css"

const Movies = (props) => {
    const { movies } = props

    return movies?.map(movie => {
        return(
            <div className="movie-div" key={movie.id}>
                <img src={movie.image_link} alt="" />
                <h3>{movie.name}</h3>
            </div>
        )
    })
}

export default Movies