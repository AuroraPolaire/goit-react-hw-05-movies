import React from 'react'
import { useLocation } from "react-router-dom";
import {List, StyledLink} from './TrendingMoviesList.styled';
import PropTypes from 'prop-types';


const TrendingMoviesList = ({movies}) => {
 
    const location = useLocation();
  return (
    <div className='column-container'>
    <List>
    {movies.map((movie) => 
    <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
    <li key={movie.id} className="item-container">
        {movie.original_title}
    </li>
    </StyledLink>
  )}
    </List>
    </div>
  )
}

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
}

export default TrendingMoviesList;