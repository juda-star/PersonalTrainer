import React from "react";
import styled from "styled-components";

const MainBody = styled.div`
  background-image: url("https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.6435-9/157471144_10215107678765978_76986604726949639_n.jpg?_nc_cat=105&_nc_rgb565=1&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=iGAX1BFJ3C0AX9-gnbX&_nc_ht=scontent.fsdv1-2.fna&oh=1acc7ae822121c301a04bb0b9bd612f3&oe=60F8B4D5");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
    color: white;
  }
  span {
    font-weight: 400;
    opacity: 0.5;
    color: white;
  }
  h5 {
    color: white;
  }
`;
const Darken = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: black;
  opacity: 0.7;
  color: white;
`;
const style = { color: "white" };
export default function Home() {
  return (
    <div>
      <MainBody>
        <Darken></Darken>
        <h1>
          <span>IAM</span>personal trainer NATI TAKA
        </h1>
        <h5>Petah-Tikva | 0503833357 | natitaka@gmail.com</h5>
      </MainBody>
    </div>
  );
}
