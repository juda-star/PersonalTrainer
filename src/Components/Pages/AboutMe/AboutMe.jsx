import React from "react";
import styled from "styled-components";

const MainBody = styled.div`
  height: 134vh;
  width: 95vw;
  img {
    border-radius: 20px 20px;
  }
  h3 {
    color: black;
  }
  h1{
    color: black;
  }
`;

const PicMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;
const Text = styled.div`
  margin: 100px;
  color: black;
`;

export default function AboutMe() {
  return (
    <div>
      <MainBody>
        <h1>ABOUT ME</h1>
        <PicMain>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            voluptatum recusandae quidem culpa soluta sapiente neque nemo ipsa
            excepturi labore aliquam porro minima nulla perferendis fuga
            pariatur incidunt dolorum? Sit, accusantium rerum.
          </Text>
          <h3> על עצמי נתי טקה</h3>

          <img
            src="https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.6435-9/157471144_10215107678765978_76986604726949639_n.jpg?_nc_cat=105&_nc_rgb565=1&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=iGAX1BFJ3C0AX9-gnbX&_nc_ht=scontent.fsdv1-2.fna&oh=1acc7ae822121c301a04bb0b9bd612f3&oe=60F8B4D5"
            alt="natiPic1"
            style={{ width: "200px", height: "200px" }}
          />
        </PicMain>
        <PicMain>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            voluptatum recusandae quidem culpa soluta sapiente neque nemo ipsa
            excepturi labore aliquam porro minima nulla perferendis fuga
            pariatur incidunt dolorum? Sit, accusantium rerum.
          </Text>
          <h3>התהליך עם ירוס</h3>
          <img
            src="https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.6435-9/157951069_10215107681846055_3510614446988060296_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=QKDyxgwON9UAX8-6tW0&_nc_ht=scontent.fsdv1-2.fna&oh=255b7788ff716e2e36b384ce88948def&oe=60F8AF72"
            alt="natipic2"
            style={{ width: "200px", height: "200px" }}
          />
        </PicMain>
        <PicMain>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            voluptatum recusandae quidem culpa soluta sapiente neque nemo ipsa
            excepturi labore aliquam porro minima nulla perferendis fuga
            pariatur incidunt dolorum? Sit, accusantium rerum.
          </Text>
          <h3> התהליך עם תימי</h3>

          <img
            src="https://scontent.fhfa4-1.fna.fbcdn.net/v/t1.6435-9/157589095_10215107683646100_5672670932461469359_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=6sRdz_EUWVIAX8nQ52Z&_nc_ht=scontent.fhfa4-1.fna&oh=238c152472a416dfec6a55e84f4bc7e2&oe=60FBC6FA"
            alt="natiPic1"
            style={{ width: "200px", height: "200px" }}
          />
        </PicMain>
      </MainBody>
    </div>
  );
}
