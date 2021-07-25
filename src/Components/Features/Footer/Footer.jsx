import React from "react";
import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";

const MainBody = styled.div`
display: flex;
align-items: center;
background-color: black;
  height: 10vh;
  justify-content: center;
`;
const StyleIconFacebook = { color: "#1877F2" };
const StyleIconMail = { color: "#fff" };
export default function Footer() {
  return (
    <div>
      <MainBody>
        <p style={StyleIconMail}> Email: nati@gmail.com</p>
        <a href="https://www.facebook.com/nati.taka">
          <FaFacebookSquare style={StyleIconFacebook} />
        </a>
      </MainBody>
    </div>
  );
}
