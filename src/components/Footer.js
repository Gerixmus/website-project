import React from 'react';
import './Footer.css';
/*import { Button } from './Button';*/
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/*<section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>*/}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          {/*<div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
  </div>*/}
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Gorgo School
              <img className="social_information_icon_2" src="/website-project/icons/book.svg" alt="book"/>
            </Link>
          </div>
          <small class='website-rights'>Gabriel Gordziejonok © 2021</small>
          <div class='social-icons'>
            <a class='social-icon-link website' href="https://www.facebook.com/" target="_blank">
              <img className="social_information_icon_2" src="/website-project/icons/icons8-facebook.svg" alt="facebook"/>
            </a>
            <a class='social-icon-link website' href="https://github.com/Gerixmus/website-project" target="_blank">
              <img className="social_information_icon_2" src="/website-project/icons/icons8-github.svg" alt="github"/>
            </a>
            <a class='social-icon-link website' href="https://www.instagram.com/" target="_blank">
              <img className="social_information_icon_2" src="/website-project/icons/icons8-instagram.svg" alt="instagram"/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;