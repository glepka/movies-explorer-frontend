import React from 'react';
import './AboutMe.css';
import '../Main/Main.css';
import avatar from '../../images/IMG_6253.JPG'


function AboutMe() {
  return (
    <section className='about-me' name='student'>
      <h2 className='main__title'>Студент</h2>
      <div className='about-me__profile'>
        <div className='about-me__info'>
          <h3 className='about-me__title'>Глеб</h3>
          <h4 className='about-me__subtitle'>Фронтенд-разработчик, 27 лет</h4>
          <p className='about-me__text'>Я родился и живу в Петрозаводске. Так получилось, что у меня два высших образования. Я бакалавр истории и магистр физики. Занимаюсь футболом и горными лыжами. Просто обожаю путешествовать, хочу совершить велотрип с палаткой. Воспитываю мейн-куна. Раньше работал руководителем отдела по работе с партнерами. Часто общался с разработчиками. Меня это настолько зацепило, что я сам решил переквалифицироваться в разработчики. И вот я тут, ищу свою работу в качестве разработчика.</p>

          <a href='https://github.com/glepka' className='about-me__link' target='blank'>Github</a>
        </div>
        <img src={avatar} className='about-me__photo' alt='Аватарка' />
      </div>
    </section>
  )
}

export default AboutMe;