import React from "react";
import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";

const MainBody = styled.div`
  height: 10vh;
  width: 100vw;
`;
const StyleIconFacebook = { color: "#1877F2" };
export default function Footer() {
  return (
    <div>
      <MainBody>
        <p style={{ marginTop: "20px" }}> Email: nati@gmail.com</p>
        <a href="https://www.facebook.com/nati.taka">
          <FaFacebookSquare style={StyleIconFacebook} />
        </a>
      </MainBody>
    </div>
  );
}
