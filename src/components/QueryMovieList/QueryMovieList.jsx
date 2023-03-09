import React from 'react'
import { useLocation } from "react-router-dom";
import {List, StyledLink} from '../TrendingMoviesList/TrendingMoviesList.styled';

import PropTypes from 'prop-types';

const QueryMovieList = ({movies}) => {
    

    const location = useLocation();

    return (
        
        <div className='column-container'>
        <List>
        {movies.map((movie) => 
        <StyledLink to={`/movies/${movie.id}`} key={movie.id} state={{ from: location }}>
        <li  className="item-container">
            {movie.original_title}
        </li>
        </StyledLink>
        )}
        </List>
        </div>
      )
}

QueryMovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
}

export default QueryMovieList