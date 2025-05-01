import Title from "../Common";
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import styled from "../../assets/styled-components.svg"
import typescript from "../../assets/typescript.svg"
import javascript from "../../assets/javascript.svg"
import git from "../../assets/git.svg"
import mongo from "../../assets/mongodb.svg"
import material from "../../assets/material-ui.svg"
import node from "../../assets/nodejs.svg"
import reactImg from "../../assets/react.svg"
import * as S from "./style";

export const Skills = () => {
  return (
    <S.Section id="Skills">
      <Title text="Habilidades" />
      <S.SkillsContainer>
        <div>
          <h2 className="subtitle">Tecnologias</h2>
          <p className="skills-text">
            Estas são as tecnologias que tenho contato no momento. Estou sempre
            disposto a aprender novas tecnologias.
          </p>
            <S.Flex>
            <S.CardsTech>
              <div className="skills-name">
              <img src={html} alt="" />
              <span>HTML5</span>
              </div>
            </S.CardsTech>
            <S.CardsTech>
              <div className="skills-name">
              <img src={css} alt="" />
              <span>CSS</span>
              </div>
            </S.CardsTech>
            <S.CardsTech>
              <div className="skills-name">
              <img src={javascript} alt="" />
              <span>JAVASCRIPT</span>
              </div>
            </S.CardsTech>
            <S.CardsTech>
              <div className="skills-name">
              <img src={node} alt="" />
              <span>NODE</span>
              </div>
            </S.CardsTech>
            <S.CardsTech>
              <div className="skills-name">
              <img src={reactImg} alt="" />
              <span>REACT</span>
              </div>
            </S.CardsTech>
            <S.CardsTech>
              <div className="skills-name">
              <img src={typescript} alt="" />
              <span>TYPESCRIPT</span>
              </div>
            </S.CardsTech>
            <S.CardsTech>
              <div className="skills-name">
              <img src={material} alt="" />
              <span>MATERIAL UI</span>
              </div>
            </S.CardsTech>
            <S.CardsTech>
              <div className="skills-name">
              <img src={styled} alt="" />
              <span>STYLED COMPONENTS</span>
              </div>
            </S.CardsTech>
            <S.CardsTech>
              <div className="skills-name">
              <img src={git} alt="" />
              <span>GIT</span>
              </div>
            </S.CardsTech>
            <S.CardsTech>
              <div className="skills-name">
              <img src={mongo} alt="" />
              <span>MONGO DB</span>
              </div>
            </S.CardsTech>
            </S.Flex>
        </div>
      </S.SkillsContainer>
    </S.Section>
  );
};

