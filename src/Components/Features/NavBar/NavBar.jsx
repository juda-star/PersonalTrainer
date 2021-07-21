import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  IconName,
  FaHome,
  FaLandmark,
  FaEnvelope,
  FaCalendar,
} from "react-icons/fa";
const StyledNavBar = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;

  li {
    margin: 0 32px;
  }
`;

const StyledNavBarContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  position: absolute;
  z-index: 999;
  top: 100px;
  left: -40px;
`;
export default function NavBar() {
  return (
    <div>
      <span>
      <StyledNavBarContainer>
        <StyledNavBar>
          <li>
            <Link to="/">
              <FaHome fontSize="x-large" style={{ color: "black" }} />
            </Link>
          </li>
          <li>
            <Link to="/TimeLine">
              {<FaCalendar fontSize="x-large" style={{ color: "black" }} />}
            </Link>
          </li>
          <li>
            <Link to="/AboutMe">
              <FaLandmark fontSize="x-large" style={{ color: "black" }} />
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <FaEnvelope fontSize="x-large" style={{ color: "black" }} />
            </Link>
          </li>
        </StyledNavBar>
      </StyledNavBarContainer>
     
      </span>
    </div>
    
  );
}
