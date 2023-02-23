import React from 'react';
import './Cennik.css';
import { useState } from 'react';

function Cennik() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
      <div className='cennik-container'>
        {/* <table className='content-table'>
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
        </table> */}
        <table className='content-table'>
          <thead>
            <tr>
              <th>Opis</th>
              <th>Cena</th>
              <th>Pakiet</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item, i) => (
            <>
              <tr className='normal-row' key={i} onClick={() => toggle(i)}>
                <td>{item.opis}</td>
                <td>{item.cena}</td>
                <td>{item.pakiet}</td>
              </tr>
              <tr className={selected === i ? 'content show' : 'content'}>
                <td className='content-show' colSpan={3}>{item.info}</td>
              </tr>
            </>
          ))}
          </tbody>
        </table>
      </div>
  );
}
const data = [
  {
    opis: "Pakiet 10 zajęć po 45 min",
    cena: "1000  PLN",
    pakiet: "podstawowy",
    info: "Idealny dla osoby początkującej, kinestetyka, osoby, która szybko się nudzi bądź do bieżącego przygotowywania się do zajęć lekcyjnych."
  },
  {
    opis: "Pakiet 10 zajęć po 60 min",
    cena: "1250  PLN",
    pakiet: "rozszerzony",
    info: "Polecam dla osób, które pracują wolniej, są dokładne, potrzebują więcej czasu na wykonanie zadania, bądź dla ucznia, który ma zaległości i potrzebuje je nadrobić."
  },
  {
    opis: "Pakiet 5 zajęć po 90 min",
    cena: "900  PLN",
    pakiet: "egzaminacyjny",
    info: "Niezbędny, gdy pozostało mało czasu do przećwiczenia zadań typu egzaminacyjnego i strategii egzaminacyjnych."
  },
  {
    opis: "Lekcja indywidualna 60 min",
    cena: "150  PLN",
    pakiet: "",
    info: "Jednorazowa forma pomocy w wykonaniu zadania domowego, przygotowania się do zajęć bądź też forma konsultacji, omówienia dalszych możliwości rozwoju kompetencji językowych. Nie zobowiązuje do dalszej współpracy. "
  },
  {
    opis: "Lekcja  indywidualna 60 min z pisemnym opisem",
    cena: "200  PLN",
    pakiet: "",
    info: "Forma diagnozy umiejętności językowych z uwzględnieniem czterech obszarów kompetencji językowych: słuchania, czytania, pisania i mówienia wraz z opisem."
  }
]

export default Cennik;