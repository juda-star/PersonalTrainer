import React from "react";
import styled from "styled-components";
import ButtonPay from "../../buttonPay/ButtonPay";
const MainBody = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
  width: 35%;
  background-color: black;
  padding: 28px;
  margin: 42px;
  border-radius: 10px 10px;
  direction: rtl;
  h2 {
    color: white;
  }
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
          <h2>3 חבילות + תוכנית אימונים  </h2>
          <ButtonPay/>
        </MainBody>
        <MainBody>
          <h2> 5 חבילות + תוכנית אימונים</h2>
          <ButtonPay/>
        </MainBody>
        <MainBody>
          <h2>10 חבילות + תוכנית אימונים</h2>
          <ButtonPay/>
        </MainBody>
      </MainId>
    </MainHtml>
  );
}
