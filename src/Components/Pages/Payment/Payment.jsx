import React from "react";
import styled from "styled-components";

const MainBody = styled.div`
  height: 20%;
  width: 35%;
  background-color: black;
  padding: 46px;
  margin: 38px;
`;
const MainId = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const MainHtml = styled.div`
  background-image: url("https://img3.goodfon.com/wallpaper/nbig/2/7f/fitness-tattoo-personal.jpg");  
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function Payment() {
  return (
    <MainHtml>
      <MainId>
        <MainBody>
          <h1>ח3חבילות + תוכנית אימונים</h1>
        </MainBody>
        <MainBody>
          <h1>ח5חבילות + תוכנית אימונים</h1>
        </MainBody>
        <MainBody>
          <h1>ח10חבילות + תוכנית אימונים</h1>
        </MainBody>
      </MainId>
    </MainHtml>
  );
}
