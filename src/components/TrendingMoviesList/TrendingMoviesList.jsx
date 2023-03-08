import React from 'react'
import { useLocation } from "react-router-dom";
import {List, StyledLink} from './TrendingMoviesList.styled';
import PropTypes from 'prop-types';


const TrendingMoviesList = ({movies}) => {
 
    const location = useLocation();
  return (
    <List>
    {movies.map((movie) => 
    <li key={movie.id}>
        <StyledLink to={`/trending_movies/${movie.id}`} state={{ from: location }}>{movie.original_title}</StyledLink>
    </li>
  )}
    </List>
  )
}

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
}

export default TrendingMoviesList;