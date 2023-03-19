import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import accoutButton from '../../images/account.svg'

function Navigation() {
  return (
    <div className='navigation'>
    <div className="navigation__overlay"></div>
    <div className='navigation__container'>
      <button className='navigation__close-button'></button>
      <nav className="navigation__nav">
    <Link to="/"  className="navigation__link">
      Главная
    </Link>
    <Link to="/movies"  className="navigation__link">
      Фильмы
    </Link>
    <Link to="/saved-movies"  className="navigation__link">
      Сохранённые фильмы
    </Link>
  </nav>
  <Link to='/profile' className='header__account-button'>
              <img src={accoutButton} alt='Кнопка аккаунта'/>
            </Link>
      </div>

     </div>
  );
}

export default Navigation;

