import React from 'react';
// import '../styles/MovieCard.css';

const MovieCard = (props) => {
    return <div className=''>
        <img onError={(e) => {
            console.log('Image not found ',e.target.src)
            e.target.src = '/assets/images/posterNotFound.jpg'}} loading="lazy" width="200" src={`/assets/images/${props.posterImageName}`} alt='movie'/>
        <p className="text-white">{props.name}</p>
    </div>
}

export default MovieCard;