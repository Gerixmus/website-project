import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/*<img src="/images/img-dogs.jpg" alt="lul"/>*/}
            <img className='hero_section' src="/website-project/images/img-school.jpg" alt="hero_section"/>
            {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
            <h1>GORGO SCHOOL</h1>  
            <p>Szkoła języka angielskiego</p> 
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>NAPISZ DO NAS</Button>
                {/*<Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' /></Button>*/}
            </div>
        </div>
    )
}

export default HeroSection