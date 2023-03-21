import React from 'react';
import '../Movies/Movies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';


function SavedMovies() {

    return(
        <>
        <Header />

        <section className='movies'>
        <SearchForm />
        <MoviesCardList />
        </section>
        <Footer />
        </>
    )
}

export default SavedMovies;