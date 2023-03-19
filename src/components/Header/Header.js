import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';
import accoutButton from '../../images/account.svg'


function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(true);


    return(
        <>
         {!isLoggedIn ? (
            <header className='header'>
            <Link to='/' className='header__logo'>
                <img src={logo} alt='логотип' />
            </Link>
            <div className='header__button-container'>
            <Link to='/signup' className='header__button'>
              Регистрация
            </Link>
            <Link to='/signin' className='header__button header__login-button'>
              Войти
            </Link>

             </div>
            </header>
               ) : (
                <header className='header'>
        <Link to='/' className='header__logo'>
                <img src={logo} alt='логотип' />
            </Link>
        <nav className='header__nav'>
        <div className='header__movies-container'>
            <p className='header__link'>Фильмы</p>
            <p className='header__link'>Сохранённые фильмы</p>
        </div>
        <Link to='/profile' className='header__account-button'>
              <img src={accoutButton} alt='Кнопка аккаунта'/>
            </Link>
        </nav>



        <button className='header__burger-button'></button>
        <Navigation />
        </header>
                )}



        </>
    )
}

export default Header;