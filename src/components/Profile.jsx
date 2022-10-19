import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import instagram from "../assets/link/instagram.svg";
import linkedin from "../assets/link/linkedin.png";
import github from "../assets/link/github.png";
import { Typewriter } from "react-simple-typewriter";
import { fadeIn } from "./animation";
import { fadeOut } from "./animation";

const Profile = ({ Width, Theme }) => {
  return (
    <>
      <ProfileMain>
        <MainImg>
          <Inside>
            <img src={profile} alt="profile"></img>
          </Inside>
        </MainImg>
        <h1>
          Hi, I am <span>Prateek</span>
        </h1>
        <h2 props={Width}>
          I am a{" "}
          <span props={Theme}>
            <Typewriter
              words={["React Developer", "Programmer", "Web Designer"]}
              loop={5}
            >
              React Developer
            </Typewriter>
          </span>
        </h2>
        <button>Download Resume</button>
        <Links>
          <span>
            <img src={linkedin} alt="linkedin"></img>
          </span>
          <span>
            <img src={github} alt="github"></img>
          </span>
          <span>
            <img src={instagram} alt="instagram"></img>
          </span>
        </Links>
      </ProfileMain>
    </>
  );
};

const ProfileMain = styled.div`
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 0.5s linear;
  transition: 1s ease;
  padding-top: 100px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Links = styled.div`
  margin: auto;
  display: flex;
  gap: 12px;
  img {
    width: 50px;
    height: 50px;
  }
`;

const MainImg = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
`;

const Inside = styled.div`
  transition: 1s ease;
  width: 100px;
  height: 100px;
  display: flex;
  border: 2px solid gray;
  background-color: #f3f3f3;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;

export default Profile;
