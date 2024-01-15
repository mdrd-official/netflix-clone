import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const getRandomMovie = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    
    const movies = response.data.results;
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  } catch (error) {
    console.error('Error fetching random movie:', error);
    return null;
  }
};
const getMovie = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching random movie:', error);
    return null;
  }
}


export { getRandomMovie, getMovie };