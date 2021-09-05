import React from 'react';
import './Cards.css';
import {CardItem, CardFB} from './CardItem';

function Cards() {
  return (
      <div className='cards'>
        <h1>Zobacz nasze ostatnie zdjęcia!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-ren.jpg'
                text='Rennesaince'
                label='Ren'
                path='/cennik'
              />
              <CardItem
                src='images/kylo-ren.jpg'
                text='Kylo-ren'
                label='Ren'
                path='/cennik'
              />
              {/*
              <CardFB
                fblink='https://www.facebook.com/permalink.php?story_fbid=1038286173595865&id=210529449704879'
              />
              <CardFB
                fblink='https://www.facebook.com/permalink.php?story_fbid=1038280106929805&id=210529449704879'
              />*/}
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/renesmee.jpg'
                text='Renesmee'
                label='Ren'
                path='/cennik'
              />
              <CardItem
                src='images/drawing.jpg'
                text='Lana with puppies'
                label='Drawing'
                path='/cennik'
              />
              <CardItem
                src='images/ezhik.jpg'
                text='Atapaski Ezhik Snow'
                label='Our dogs'
                path='/cennik'
              />
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Cards;