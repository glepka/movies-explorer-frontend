import React from 'react';
import './AboutMe.css';
import '../Main/Main.css';
import avatar from '../../images/IMG_6253.JPG'


function AboutMe() {
    return(
        <section className='about-me' name='student'>
            <h2 className='main__title'>Студент</h2>    
            <div className='about-me__profile'>
                <div className='about-me__info'>
                    <h3 className='about-me__title'>Глеб</h3>
                    <h4 className='about-me__subtitle'>Фронтенд-разработчик, 27 лет</h4>
                    <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    
                    <a href='https://github.com/glepka' className='about-me__link' target='blank'>Github</a>
                </div>
                <img src={avatar}className='about-me__photo' alt='Аватарка'/>
            </div>      
        </section>
)
}

export default AboutMe;