import React from 'react';
import {useState, useEffect} from 'react';
import {getMovieQuery} from '../components/servises/movieAPI';
import QueryMovieList from '../components/QueryMovieList/QueryMovieList';
import { StyledForm } from './Movies.styled';
import toast, {Toaster} from 'react-hot-toast';
import ReactPaginate from 'react-paginate';


const Movies = () => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);


  
  const handleChange = (event) => {
    setInput(event.target.value.trim());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.input.value.trim()
    if(query === '') {
      toast.error('The input is empty!');
      return;
    }
    setQuery(event.target.input.value)

  
  }

  useEffect(() => {
    if(query === '') {
      return;
    }
    const fetchMovies = async () => {
      const movies = await getMovieQuery(query, page);
      setMoviesList(movies.results)
      setPageCount(movies.total_pages);
    }
    fetchMovies(query)
  }, [query, page])

  const handlePageClick = (event) => {
    const page = event.selected + 1;
    setPage(page);   
      };

  return (
    <>
    <Toaster />
    <StyledForm>
    <form onSubmit={handleSubmit}>
        <label >
            <input type='text' placeholder="Enter a movie" name='input' value={input} onChange={handleChange}/>
        </label>
        <button type='submit'>Submit</button>
    </form>
    </StyledForm>
    <main>
    {moviesList.length !== 0 ? <QueryMovieList movies={moviesList}/> : <div>No movies found</div>}
    </main>
    {moviesList.length !== 0 ? <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      /> : null}
    </>
  )
}


export default Movies;