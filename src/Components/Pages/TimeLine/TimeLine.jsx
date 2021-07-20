import React from "react";
import styled from "styled-components";
import "./TimeLine.css";
export default function TimeLine() {
  return (
    <div>
      <div className="container">
        <div className="timeLine">
          <ul>
            <li>
              <div className="timeLine-content">
                <h1>heading 1</h1>
                <h2 className="date">24th may,2019</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores odit eveniet tempora, neque facere quod consequuntur
                  sed numquam eos at ipsa dolorum porro maiores deserunt,
                  architecto cupiditate eius reiciendis! Dicta!
                </p>
              </div>
            </li>
            <li>
              <div className="timeLine-content">
                <h1>heading 2</h1>
                <h2 className="date">20th may,2010</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores odit eveniet tempora, neque facere quod consequuntur
                  sed numquam eos at ipsa dolorum porro maiores deserunt,
                  architecto cupiditate eius reiciendis! Dicta!
                </p>
              </div>
            </li>
            <li>
              <div className="timeLine-content">
                <h1>heading 3</h1>
                <h2 className="date">24th march,2020</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores odit eveniet tempora, neque facere quod consequuntur
                  sed numquam eos at ipsa dolorum porro maiores deserunt,
                  architecto cupiditate eius reiciendis! Dicta!
                </p>
              </div>
            </li>
            <li>
              <div className="timeLine-content">
                <h1>heading 4</h1>
                <h2 className="date">24th may,2015</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores odit eveniet tempora, neque facere quod consequuntur
                  sed numquam eos at ipsa dolorum porro maiores deserunt,
                  architecto cupiditate eius reiciendis! Dicta!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
