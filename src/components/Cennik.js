import React from "react";
import "./Cennik.css";
import { useState } from "react";

function Cennik() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="cennik-container">
      <table className="content-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <>
              <tr className="normal-row" key={i} onClick={() => toggle(i)}>
                <td>{item.opis}</td>
                <td>{item.cena}</td>
                <td>{item.pakiet}</td>
              </tr>
              <tr className={selected === i ? "content show" : "content"}>
                <td className="content-show" colSpan={3}>
                  {item.info}
                </td>
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
    opis: "10 - 45 minutes lessons",
    cena: "200  €",
    pakiet: "standard",
    info: "Perfect for a beginner, kinesthetic person, someone who gets bored quickly, or for current preparation for lessons.",
  },
  {
    opis: "10 - 60 minutes lessons",
    cena: "250  €",
    pakiet: "extended",
    info: "I recommend it for individuals who work slower, are precise, need more time to complete a task, or for a student who is falling behind and needs to catch up.",
  },
  {
    opis: "10 - 90 minutes lessons",
    cena: "180  €",
    pakiet: "exam",
    info: "Essential when there is little time left to practice exam-type tasks and exam strategies.",
  },
  {
    opis: "Individual 60 minutes lesson",
    cena: "30  €",
    pakiet: "",
    info: "One-time form of assistance in completing homework, preparing for classes, or a form of consultation to discuss further possibilities for developing language skills. It does not require further commitment to collaboration.",
  },
  {
    opis: "Individual 60 minutes lesson with written description",
    cena: "40  €",
    pakiet: "",
    info: "A form of language skills diagnosis that takes into account four areas of language proficiency: listening, reading, writing, and speaking.",
  },
];

export default Cennik;
