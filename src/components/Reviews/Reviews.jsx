import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import {getMovieReviews} from '../servises/movieAPI';
import img from '../../images/no-image-icon.png';
import {ReviewsContainer} from './Reviews.styled'


const Reviews = () => {
    const [reviews, setReviews]= useState([]);
    const { id } = useParams();

    useEffect(()=> {
        const fetchReviews = async (id) => {
            const result = await getMovieReviews(id);
            setReviews(result.results);

        }
        fetchReviews(id);
    }, [id]);


   return (
    <>
    {reviews.length !== 0 ? reviews.map(({author, content, author_details : {avatar_path}}) => 
        <ReviewsContainer key={author}>
        <div className="name">
            <h3>{author}</h3>
            <img src={avatar_path !== null ? (!avatar_path.includes('http') ? `https://image.tmdb.org/t/p/w500/${avatar_path}` : avatar_path.slice(1, avatar_path.length )) : img } alt={author} ></img>
        </div>
           
        <div className="content"><p>{content}</p></div>
        </ReviewsContainer>
    ): <div>There are no reviews available</div>}
    </>)
}



export default Reviews