import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import loupe from '../../images/loupe.svg';
import loupeWhite from '../../images/loupe-white.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';




function SearchForm({ onSearchMovies, onFilter, isShortMovies }) {
  const [isQueryError, setIsQueryError] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      onSearchMovies(query);
    }
  }

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('movieSearch')) {
      const localQuery = localStorage.getItem('movieSearch');
      setQuery(localQuery);
    }
  }, [location]);

    return(

        <section className='search-form'>
            <div className='search-form__container'>
            <form className='search-form__form' onSubmit={handleSubmit} id='form'>
                <img src={loupe} alt='Иконка лупы' className='search-form__loupe'/>
                <input
                placeholder='Фильм'
                className='search-form__input'
                required
                onChange={handleChangeQuery}
                value={query || ''}></input>
                <button className='search-form__button' type='submit'><img src={loupeWhite} alt='Белая иконка лупы'/></button>
            </form>
            <FilterCheckbox onFilter={onFilter} isShortMovies={isShortMovies}/>
            {isQueryError && <span className="search-form__error">Нужно ввести ключевое слово</span>}
            </div>


        </section>
    )
}

export default SearchForm;