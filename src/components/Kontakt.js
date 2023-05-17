import React, { useState } from "react";
import "./Kontakt.css";
import emailjs from "emailjs-com";
import MyComponent from "./Map";

// const Result = () => {
//   return <p>Twoja Wiadomość została wysłana!</p>;
// };

function Kontakt(props) {
  const initialText = "Wyślij";
  const [buttonText, setButtonText] = useState(initialText);

  //   const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    // showResult(true);

    setButtonText("Twoja Wiadomość została wysłana!");
  };

  // hide result
  setTimeout(() => {
    setButtonText(initialText);
    // showResult(false);
  }, 5000);

  return (
    <div className="contact_site_container">
      <form className="form_container" action="" onSubmit={sendEmail}>
        <div className="form1">
          <h2 className="form_header">Napisz do nas!</h2>
          <label for="fullName">Imię i nazwisko</label>
          <input
            className="personal_info"
            type="text"
            id="fullName"
            name="fullName"
            required
          />
          <label for="phone">Numer telefonu</label>
          <input
            className="personal_info"
            type="text"
            id="phone"
            name="phone"
            pattern="[+]?[0-9]{2}[0-9]{9}|[0-9]{9}"
          />
          <label for="email">Adres email</label>
          <input
            className="personal_info"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form2">
          <label for="message" id="message-box">
            Wiadomość
          </label>
          <textarea
            className="message_input"
            id="message"
            name="message"
            required
          ></textarea>
          <button>{buttonText}</button>
          {/* <button>Wyślij</button> */}
        </div>
        <div className="info">
          <h2 className="comment_header">Dane kontaktowe</h2>
          <div className="info-bar">
            <img
              className="social_information_icon"
              src="/website-project/icons/pin.svg"
              alt="pin"
            />
            <p>Towarowa 3, 00-811 Warszawa, Polska</p>
          </div>
          <div className="info-bar">
            <img
              className="social_information_icon"
              src="/website-project/icons/phone.svg"
              alt="pin"
            />
            <p>+48 123 456 789</p>
          </div>
          <div className="info-bar">
            <img
              className="social_information_icon"
              src="/website-project/icons/email.svg"
              alt="pin"
            />
            <p>jan.kowalski@mail.com</p>
          </div>
          <div className="icons">
            <a
              class="social-icon-link website"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <img
                className="social_information_icon_2"
                src="/website-project/icons/icons8-facebook.svg"
                alt="facebook"
              />
            </a>
            <a
              class="social-icon-link website"
              href="https://github.com/Gerixmus/website-project"
              target="_blank"
            >
              <img
                className="social_information_icon_2"
                src="/website-project/icons/icons8-github.svg"
                alt="github"
              />
            </a>
            <a
              class="social-icon-link website"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <img
                className="social_information_icon_2"
                src="/website-project/icons/icons8-instagram.svg"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </form>
      {/* <div className="row">{result ? <Result /> : null}</div> */}
      <div className="map-container">
        <MyComponent></MyComponent>
      </div>
    </div>
  );
}

export default Kontakt;
