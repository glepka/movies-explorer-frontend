import React from 'react';
import './SearchForm.css';
import loupe from '../../images/loupe.svg';
import loupeWhite from '../../images/loupe-white.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';




function SearchForm() {


    return(

        <section className='search-form'>
            <div className='search-form__container'>
            <form className='search-form__form'>
                <img src={loupe} alt='Иконка лупы' className='search-form__loupe'/>
                <input placeholder='Фильм' className='search-form__input' required></input>
                <button className='search-form__button' type='submit'><img src={loupeWhite} alt='Белая иконка лупы'/></button>
            </form>
            <FilterCheckbox />
            </div>


        </section>
    )
}

export default SearchForm;