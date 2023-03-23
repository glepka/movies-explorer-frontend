import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg'



function Portfolio() {
    return(
        <section className='portfolio'>
           <h2 className='portfolio__title'>Портфолио</h2>
           <ul >
            <li className='portfolio__list'>
                <a className='portfolio__link' href='https://glepka.github.io/dev.crew/' target='blank'>
                    <h3 className='portfolio__link-text'>Статичный сайт</h3>
                    <img src={arrow} alt='Иконка стрелочки'/>
                </a>
            </li>
            <li className='portfolio__list'>
                <a className='portfolio__link' href='https://glepka.github.io/russian-travel/' target='blank'>
                    <h3 className='portfolio__link-text'>Адаптивный сайт</h3>
                    <img src={arrow} alt='Иконка стрелочки'/>
                </a>
            </li>
            <li className='portfolio__list'>
                <a className='portfolio__link' href='https://glepka.github.io/react-mesto-auth' target='blank'>
                    <h3 className='portfolio__link-text'>Одностраничное приложение</h3>
                    <img src={arrow} alt='Иконка стрелочки'/>
                </a>
            </li>
           </ul>
        </section>
)
}

export default Portfolio;