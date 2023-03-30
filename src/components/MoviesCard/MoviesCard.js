import React from 'react';
import './MoviesCard.css';
import { durationConverter } from '../../utils/utils';





function MoviesCard({ card, isSavedFilms, handleLikeClick, onCardDelete, saved, savedMovies }) {



  function onCardClick() {
    console.log(saved)
    if (saved) {
      onCardDelete(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeClick(card);
    }
  }

  function onDelete() {
    onCardDelete(card);
  }

  const cardSaveButtonClassName = `${saved ? 'card__button card__button_type_active' : 'card__button'
    }`;


  return (

    <li className='card'>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="card__image"
          alt={card.nameRU}
          src={isSavedFilms ? card.image : `https://api.nomoreparties.co/${card.image.url}`}
        />
      </a>
      <div className='card__description'>
        <h2 className='card__name'>{card.nameRU}</h2>
        {isSavedFilms ? (
          <button type="button" className="card__button card__button_type_delete" onClick={onDelete}></button>
        ) : (
          <button type="button" className={cardSaveButtonClassName} onClick={onCardClick}></button>
        )}
      </div>
      <span className='card__duration'>{durationConverter(card.duration)}</span>
    </li>
  )
}

export default MoviesCard;
