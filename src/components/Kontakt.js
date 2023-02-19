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
        <div className="form">
            <form action="" onSubmit={sendEmail}>
                <div className="formWord">
                    <h2>Napisz do nas!</h2>
                    <span>Imię i nazwisko</span>
                    <br />
                    <input className="input100" type="text" name="fullName" required />
                    <br />
                    <span>Numer telefonu</span>
                    <br />
                    <input className="input100" type="text" name="phone" pattern="[0-9]{9}"  />
                    <br />
                    
                </div>
                <div className="formWord">
                    <span>Adres email</span>
                    <br />
                    <input className="input100" type="email" name="email" required/>
                    <br />
                    <span>Wiadomość</span>
                    <br />
                    <textarea name="message" required></textarea>
                    <br />
                    <button>Wyślij</button>

                    <div className="row">{result ? <Result/> : null}</div>
                </div>
            </form>
        </div>
    );
}

export default Kontakt;