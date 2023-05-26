import React from "react";
import "./Cards.css";
import { CardItem, CardFB } from "./CardItem";
import { FacebookEmbed } from "react-social-media-embed";

function Cards() {
  return (
    <div className="cards">
      <h1>Check our latest photos!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/website-project/images/img-ren.jpg"
              text="Rennesaince"
              label="Ren"
              // path="/cennik"
            />
            <CardItem
              src="/website-project/images/kylo-ren.jpg"
              text="Kylo-ren"
              label="Ren"
              // path="/cennik"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/website-project/images/renesmee.jpg"
              text="Renesmee"
              label="Ren"
              // path="/cennik"
            />
            <CardItem
              src="/website-project/images/drawing.jpg"
              text="Lana with puppies"
              label="Drawing"
              // path="/cennik"
            />
            <CardItem
              src="/website-project/images/ezhik.jpg"
              text="Atapaski Ezhik Snow"
              label="Our dogs"
              // path="/cennik"
            />
          </ul>
          <h1>Check our facebook posts!</h1>
          <div className="facebook">
            <FacebookEmbed
              className="facebook-post"
              url="https://www.facebook.com/20531316728/posts/10154009990506729/"
            />
          </div>
          <div className="teachers-description">
            <h1>Our teachers</h1>
            <p>
              The team of proffesional teachers will help you with your study
              progress
            </p>
          </div>
          <div className="our-teachers">
            <div className="teachers">
              <img
                className="teacher"
                src="/website-project/images/mark.png"
                alt="teacher"
              ></img>
              <div className="name-plate">
                <h3 className="full-name">Matthew Clayton</h3>
                <p className="description">Primary school teacher</p>
                <div className="teacher-social">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-solid fa-envelope"></i>
                </div>
              </div>
            </div>
            <div className="teachers">
              <img
                className="teacher"
                src="/website-project/images/jason.png"
                alt="teacher"
              ></img>
              <div className="name-plate">
                <h3 className="full-name">Robert Reid</h3>
                <p className="description">University teacher</p>
                <div className="teacher-social">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-solid fa-envelope"></i>
                </div>
              </div>
            </div>
            <div className="teachers">
              <img
                className="teacher"
                src="/website-project/images/jake.png"
                alt="teacher"
              ></img>
              <div className="name-plate">
                <h3 className="full-name">Aidan Barton</h3>
                <p className="description">Primary school teacher</p>
                <div className="teacher-social">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-solid fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
