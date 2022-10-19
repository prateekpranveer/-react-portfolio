import React from "react";
import styled from "styled-components";
import html from "../assets/techstack/html.png";
import { SwipeLeft } from "./animation";
import css from "../assets/techstack/css.png";
import javascript from "../assets/techstack/javascript.png";
import react from "../assets/techstack/react.png";
import redux from "../assets/techstack/redux.png";
import figma from "../assets/techstack/figma.png";
import tailwind from "../assets/techstack/tailwind.png";

const ProjectDetails = [
  {
    id: 1,
    title: "Musicana",
    des: "Musicana is an online music streaming application build on React, Redux and Styled-Components. The application uses Spotify Web API for data request and SpotifyWebPlaybackSDK for music listening.",
    tech: [html, css, react, redux, figma],
  },
  {
    id: 1,
    title: "Todo Multi-Theme",
    des: "To-do Multi-Theme is a todo application build on React and Styled-Components. The application includes all the basic features such as adding, editing and deleting To-do.",
    tech: [html, tailwind, react],
  },
  {
    id: 1,
    title: "The September Shop",
    des: "This application is more like a clone of Myntra. All there is frontend only again build on React and Styled-Components.",
    tech: [html, css, javascript, react, tailwind],
  },
  {
    id: 1,
    title: "Captain America Form Validation",
    des: "Captain America Form Validation is a contribution to Annoying Button by FineAnmol. The Multi-theme feature of this application is another contribution merged.",
    tech: [html, css, react],
  },
];

const Projects = () => {
  return (
    <>
      <ProjectMain>
        <Title>Projects</Title>
        {ProjectDetails.map((t) => (
          <>
            <h3>{t.title}</h3>
            <p>{t.des}</p>
            <Tech>
              {t.tech.map((s) => (
                <img width={"20px"} src={s} alt="" />
              ))}
            </Tech>
          </>
        ))}
      </ProjectMain>
    </>
  );
};

const Title = styled.h1``;
const ProjectMain = styled.div`
  animation: ${SwipeLeft} 0.3s linear;
  h3 {
    color: #383838;
    margin-top: 14px;
    font-size: 18px;
    font-weight: 400;
    font-family: roboto mono;
  }
  p {
    font-family: jost;
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #424242;
    font-weight: 400;
  }
`;
const Tech = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
  margin-bottom: 20px;
`;

export default Projects;
