import React from 'react';
import './MoviesCard.css';
import cardImage from '../../images/card-image.jpg';





function MoviesCard() {


    return(

        <li className='card'>
            <img className='card__image' src={cardImage} alt='Изображение карточки'/>
            <div className='card__description'>
                <h2 className='card__name'>33 слова о дизайне</h2>
                <button className='card__like card__like_active'>
                    <></>
                </button>
            </div>
            <span className='card__duration'>1ч 42м</span>
        </li>
    )
}

export default MoviesCard;
