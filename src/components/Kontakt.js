import React, { useState } from "react";
import './Kontakt.css';
import emailjs from 'emailjs-com';

const Result = () =>{
    return(
        <p>Your message has been sent succesfully.</p>
    )
}

function Kontakt(props) {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

    // hide result
      setTimeout(() => {
          showResult(false)
      }, 5000)
    return (
        <div className="contact_site_container">
            <form className="contact_form_container" action="" onSubmit={sendEmail}>
            <h2 style={{margin: "20px"}}>Napisz do nas!</h2>
            <div className="form_imput_container">
                <div className="contact_info_form">                 
                    <div className="form_part">
                        <label for="fullName">Imię i nazwisko</label>
                        <input className="personal_info" type="text" id="fullName" name="fullName" required />
                    </div>
                    <div className="form_part">
                        <label for="phone">Numer telefonu</label>
                        <input className="personal_info" type="text" id="phone" name="phone" pattern="[0-9]{9}"/>  
                    </div>
                    <div className="form_part">
                        <label for="email">Adres email</label>
                        <input className="personal_info" type="email" id="email" name="email" required/>  
                    </div>            
                </div>
                <div className="message_form">
                    <div className="form_part">
                        <label for="message">Wiadomość</label>
                        <textarea className="message_input" id="message" name="message" required></textarea>
                    </div>
                </div>
            </div>
            <button>Wyślij</button>
            <div className="row">{result ? <Result/> : null}</div>
            </form>
        </div>
    );
}

export default Kontakt;