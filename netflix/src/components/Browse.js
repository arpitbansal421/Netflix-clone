import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieContainer from './Moviecontainer' ;
import MainContainer from './Maincontainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import usePopularMovies from './hooks/usePopularmovies';
import useTopRatedMovies from './hooks/useTopratedmovie';
import useUpcomingMovies from './hooks/useupcomingMovie';
import SearchMovie from './SearchMovie';
import Header from './Header1';

function Browse() {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);

  // Custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className='App'> 

      <Header />
      {console.log("Hi I am below header inside browse component")}
      <div>
        {toggle ? <SearchMovie /> : <>
          <MainContainer />
          <MovieContainer />
        </>}
      </div>
    </div>
  );
}

export default Browse;
                                                         