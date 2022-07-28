import "./movie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Movies = (props) => {
  const { movies } = props;

  return movies?.map((movieBundle) => {
    return movieBundle?.map((movie) => {
      return (
        <div
          className="movie-div col-8 text-center p-3 my-3
            "
          key={movie.id}
        >
          <img src={movie.image_link} className="img-fluid" alt="" />
          <h3>{movie.name}</h3>
        </div>
      );
    });
  });
};

export default Movies;
