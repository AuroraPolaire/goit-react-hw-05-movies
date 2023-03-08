import { useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {getMovieCredits} from '../servises/movieAPI';
import { ActorContainer } from "./Cast.styled";
import img from '../../images/no-image-placeholder.png';


const Cast = () => {
    const [cast, setCast]= useState([]);
    const { id } = useParams();


    useEffect(()=> {
        const fetchCast = async (id) => {
            const result = await getMovieCredits(id);
            setCast(result);

        }
        fetchCast(id);
    }, [id])


    
  return (
    <ActorContainer>
    {cast.length !== 0 ? cast.map(({name, character, profile_path, cast_id}) => 
        <li className="li" key={cast_id}>
            <div>
                <img src={profile_path !== null ? `https://image.tmdb.org/t/p/w200/${profile_path}` : img} alt={name}></img>

            </div>
            <div className="credentials">
            <div >
                    <div className="credentials-item"><b>{name}</b></div>
                    <div>Character: {character}</div>
                </div>
            </div>
        </li>

    ) : <div>There is no info about actors available</div> }
    </ActorContainer>
  )
}


export default Cast