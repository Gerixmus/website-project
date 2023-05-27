import React from "react";
import "./Teachers.css";

function Teachers() {
  return (
    <div className="teachers-container">
      <div className="teachers-description">
        <p className="teachers-header">Our teachers</p>
        <h1>Team of Experts</h1>
        <p className="motto">
          We are highly qualified and dedicated professionals who are passionate
          about teaching and helping students achieve their language learning
          objectives
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
  );
}
export default Teachers;
