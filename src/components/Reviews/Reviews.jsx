import { useParams } from "react-router-dom";
import {useState, useEffect, useRef} from 'react';
import {getMovieReviews} from '../servises/movieAPI';
import img from '../../images/no-image-icon.png';
import {ReviewsContainer} from './Reviews.styled';
import { ThreeDots } from 'react-loader-spinner';


const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews]= useState([]);
    const [loading, setLoading] = useState(false);
    const [isReadMore, setIsReadMore] = useState(true);
    const refDiv = useRef('');

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };

    useEffect(()=> {
        setLoading(true);
        try {
            const fetchReviews = async (id) => {
                const result = await getMovieReviews(id);
                setReviews(result.results);

                if (result.results.length === 0) {
                    refDiv.current.textContent = 'There are no reviews available';
                    return;
                }
            }  
            fetchReviews(id);
        } catch (error) {
            console.log(error);
        } finally {setLoading(false)}
        
        
    }, [id]);


   return (
    <>
    
    {loading === false ? reviews.map(({author, content, author_details : {avatar_path}}) => 
    
        <ReviewsContainer key={author}>
        <div className="name">
            <h3>{author}</h3>
            <img src={avatar_path !== null ? (!avatar_path.includes('http') ? `https://image.tmdb.org/t/p/w500/${avatar_path}` : avatar_path.slice(1, avatar_path.length )) : img } alt={author} ></img>
        </div>
        <div>
        {isReadMore ? content.slice(0, 400)  : content}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? ".....read more" : "Show less"}
      </span>
      </div>
     </ReviewsContainer>
   
    ): <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="blue"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass="loader"
    visible={true}
  /> }
  {reviews.length === 0 ? <div ref={refDiv}></div> : null}
    </>)
}



export default Reviews