import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
function CardFB(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'>
        <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>  
        <div class="fb-post" 
        data-href={props.fblink}
        data-width="500"></div>
        </Link>
      </li>
    </>
  );
}

export {CardItem, CardFB}; 