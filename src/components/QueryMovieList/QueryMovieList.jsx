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
        <li key={movie.id} className="item-container">
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>{movie.original_title}</StyledLink>
        </li>
        )}
        </List>
        </div>
      )
}

QueryMovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
}

export default QueryMovieList