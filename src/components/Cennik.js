import React from 'react';
import './Cennik.css';

function Cennik() {
  return (
      <div className='cennik-container'>
        {/* <section className='cennik-text'>
          <div className='cennik-title'>
            <h1>Cennik 2021/2022</h1>
          </div>
          <div className='cennik-ceny'>
            Godzina lekcyjna 45 min w pakiecie 10 zajęć <br/>100  PLN (pakiet podstawowy)<br/>
            Godzina zegarowa 60 min w pakiecie 10 zajęć <br/>125 PLN (pakiet rozszerzony)<br/>
            Exam revision 2x45 min w pakiecie 5 zajęć <br/>180 PLN (pakiet egzaminacyjny)<br/>
            Konsultacja indywidualna 60 min <br/>150 PLN<br/>
            Konsultacja indywidualna 60 min z pisemnym opisem <br/>200 PLN<br/>         
          </div>         
        </section>      */}
        <table className='content-table'>
          <thead>
            <tr>
              <th>Opis</th>
              <th>Cena</th>
              <th>Pakiet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pakiet 10 zajęć po 45 min</td>
              <td>1000  PLN</td>
              <td>podstawowy</td>
            </tr>
            <tr>
              <td>Pakiet 10 zajęć po 60 min</td>
              <td>1250  PLN</td>
              <td>rozszerzony</td>
            </tr>
            <tr>
              <td>Pakiet 5 zajęć po 90 min</td>
              <td>900  PLN</td>
              <td>egzaminacyjny</td>
            </tr>
            <tr>
              <td>Lekcja indywidualna 60 min</td>
              <td>150  PLN</td>
              <td></td>
            </tr>
            <tr>
              <td>Lekcja  indywidualna 60 min z pisemnym opisem</td>
              <td>200  PLN</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default Cennik;