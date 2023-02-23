import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img className='hero_section' src="/website-project/images/img-school.jpg" alt="hero_section"/>
            <h1>GORGO SCHOOL</h1>  
            <p>Szkoła języka angielskiego</p> 
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>NAPISZ DO NAS</Button>
            </div>
        </div>
    )
}

export default HeroSection