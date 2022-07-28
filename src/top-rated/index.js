import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Movies from "./components/movies";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [newMovies, setNewMovies] = useState(movies);

  const fetchTopMovies = async () => {
    const data = await axios.get(
      "https://zoo-animal-api.herokuapp.com/animals/rand/10"
    );
    setMovies(data.data);
    newMovies.push(data.data);
  };
  useEffect(() => {
    fetchTopMovies();
  }, []);
  return (
    <InfiniteScroll
      dataLength={movies} //This is important field to render the next data
      next={fetchTopMovies}
      scrollThreshold="200px"
      hasMore={true}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={fetchTopMovies}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
    >
      <Movies movies={newMovies} />
    </InfiniteScroll>
  );
};

export default TopRatedMovies;
