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
  align-items: flex-end;
  flex-direction: column;
  
`;
const MainHtml = styled.div`
  background-image: url("https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.6435-9/151567051_10215012356902991_9132554758840294334_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-3&_nc_sid=730e14&_nc_ohc=iyYZahAdWj0AX-AL9Do&_nc_ht=scontent.fsdv1-2.fna&oh=f1cd5f8692145f39d63b3eb25bed93a1&oe=612412F9");
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
