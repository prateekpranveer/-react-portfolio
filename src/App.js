import { useState, useEffect } from "react";
import styled from "styled-components";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import javascript from "./assets/techstack/javascript.png";
import node from "./assets/techstack/node.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import mui from "./assets/techstack/mui.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import figma from "./assets/techstack/figma.png";
import github from "./assets/link/github.png";
import instagram from "./assets/link/instagram.svg";
import linkedin from "./assets/link/linkedin.png";
import profile from "../src/assets/profile.png";
import { Typewriter } from "react-simple-typewriter";

const stacks = [
  html,
  css,
  javascript,
  node,
  react,
  redux,
  figma,
  mui,
  bootstrap,
];

const colors = [
  {
    themeButton: "FE7A7A",
    hard: "2D1515",
    soft: "FFE8D7",
  },

  {
    themeButton: "5A64BE",
    hard: "271D3C",
    soft: "E1D7FF",
  },

  {
    themeButton: "64D748",
    hard: "15291A",
    soft: "DFFFD7",
  },
  {
    themeButton: "838282",
    hard: "000000",
    soft: "EDEDED",
  },
];
const App = () => {
  const [Width, setWidth] = useState(window.innerWidth);
  const [Theme, setTheme] = useState(colors[0]);

  const handleClick = (id) => {
    setTheme((Theme) => (Theme = colors[id]));
    console.log(Theme);
  };

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
  }, [Width]);

  return (
    <>
      <MainDiv>
        <Division2 theme={Theme} props={Width}>
          <Details props={Width}>
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
                  words={["React Developer", "Programmer", "Web Developer"]}
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
          </Details>
        </Division2>

        <Navlinks props={Width} theme={Theme}>
          <ul>
            <li>Home</li>
            <li>Coding</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </Navlinks>
        <Division theme={Theme} props={Width}>
          <Content>
            <h1>Tech Stack</h1>
            <Stacks props={Width}>
              {stacks.map((t) => (
                <img props={Width} src={t} alt={t}></img>
              ))}
            </Stacks>
          </Content>
        </Division>
        <ThemeButton>
          {colors.map((t, id) => (
            <ThemeTap
              key={id}
              onClick={() => handleClick(id)}
              theme={t.themeButton}
            ></ThemeTap>
          ))}
        </ThemeButton>
      </MainDiv>
    </>
  );
};

const MainDiv = styled.div`
  position: relative;
  height: 100vh;
`;

const Division = styled.div`
  overflow: hidden;
  transition: 1s ease;
  margin: auto;
  background-color: #${(props) => props.theme.hard};
  width: ${(props) => (props.props > 800 ? `${props.props / 2.2}px` : "100%")};
  height: 800px;
  left: 0;
  bottom: 0;
  position: ${(props) => (props.props < 800 ? "" : "absolute")};
  gap: ${(props) => props.props / 20}px;
  flex-direction: ${(props) => (props.props < 800 ? "column" : "")};

  h1 {
    font-size: ${(props) => props.props / 20}px;
    font-family: jost;
    font-weight: 300;
    text-align: center;
    color: white;
    padding-top: 100px;
  }
`;
const Content = styled.div`
  width: ${(props) => props.props / 2.2}px;
`;
const Stacks = styled.div`
  transition: 0.3s ease;
  opacity: 1;
  display: flex;
  margin: 40px auto;
  width: ${(props) =>
    props.props > 800 ? props.props / 4 : props.props / 1.5}px;
  flex-wrap: wrap;
  gap: 1rem;
  img {
    margin: auto;
    width: ${(props) =>
      props.props > 800 ? props.props / 22 : props.props / 5}px;
    height: ${(props) =>
      props.props > 800 ? props.props / 22 : props.props / 5}px;
  }
`;

const Division2 = styled.div`
  transition: 0.5s ease;
  width: ${(props) => (props.props > 800 ? `${props.props / 2.2}px` : "100%")};
  margin: auto;
  height: 800px;
  background-color: #${(props) => props.theme.soft};
  position: ${(props) => (props.props < 800 ? "" : "absolute")};
  right: 0px;
  gap: ${(props) => props.props / 20}px;
  flex-direction: ${(props) => (props.props < 800 ? "column" : "")};
`;

const ThemeButton = styled.div`
  width: 130px;
  height: 30px;
  top: 40px;
  left: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThemeTap = styled.div`
  width: 20px;
  height: 20px;
  background-color: #${(props) => props.theme};
  border-radius: 50%;
  cursor: pointer;
`;

const Navlinks = styled.div`
  width: 100%;
  height: 100vh;
  transition: 1s ease;
  background-color: #${(props) => props.theme.hard};
  display: ${(props) => (props.props > 800 ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 3;
  left: 37%;
  ul {
    transform: rotate(-90deg);
    display: flex;
    gap: 50px;
    font-family: jost;
    font-size: 25px;
    font-weight: 200;
    letter-spacing: 1px;
    justify-content: center;

    li {
      text-decoration: none;
      color: white;
      cursor: pointer;
      list-style: none;
    }
  }
`;
const Details = styled.div`
  width: ${(props) => (props.props > 800 ? props.props / 4 : {})}px;
  margin: auto;
  padding-top: 140px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: jost;
    font-size: 30px;
    font-weight: 300;
    span {
      font-weight: 300;
      color: #5a5a5a;
    }
  }

  h2 {
    font-family: roboto mono;
    font-weight: 400;
    font-size: ${(props) =>
      props.props > 800 ? props.props / 53 : props.props / 25}px;
    span {
      color: #373737;
    }
  }

  button {
    background-color: black;
    color: white;
    border-radius: 2px;
    font-family: roboto mono;
    padding: 6px 22px;
  }
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

export default App;
