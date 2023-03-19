import React from 'react';
import { Link } from 'react-scroll';
import './NavTab.css';



function NavTab() {
    return(
        <section className='navtab'>
            <Link to='about' smooth={true} duration={500} className='navtab__button'>О проекте</Link>
            <Link to='techs' smooth={true} duration={500} className='navtab__button'>Технологии</Link>
            <Link to='student' smooth={true} duration={500} className='navtab__button'>Студент</Link>
        </section>
)
}

export default NavTab;