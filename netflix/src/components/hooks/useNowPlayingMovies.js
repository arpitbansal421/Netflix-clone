import { useEffect } from 'react';
import axios from 'axios';
import { Now_PLAYING_MOVIES, options } from '../../util/constant';
import { getNowPlayingMovies } from '../../redux/movieSlice';
import { useDispatch } from 'react-redux';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(Now_PLAYING_MOVIES, options);
                dispatch(getNowPlayingMovies(res.data.results));
                console.log(res.data.results); // Logging fetched data
            } catch (error) {
                console.error('Error fetching now playing movies:', error);
            }
        };
        fetchData();
    }, [dispatch]);
};

export default useNowPlayingMovies;
