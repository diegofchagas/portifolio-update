import Title from "../Title";
import * as S from "./style";
import foto from '../../assets/foto.jpg'

export const About = () => {
  return (
    <S.Section>
      <Title text="Sobre" />
      <S.AboutContainer>
        <div className="about-img" id="About">
          <img src={foto} alt="Diego" />
        </div>
        <div>
          <h2 className="subtitle">Eu sou Diego Chagas</h2>
          <p className="about-description">
            Sou Desenvolvedor Full-Stack Jr com experiência prática em projetos
            de integração de APIs e desenvolvimento de interfaces web modernas,
            responsivas e voltadas para a usabilidade. Tenho domínio de
            frameworks como Material UI, Ant Design e Storybook, além de sólida
            experiência com tecnologias como JavaScript/TypeScript, Node.js,
            React e MongoDB. 3 Atuo com metodologias ágeis, especialmente Scrum,
            promovendo a colaboração eficaz entre equipes e garantindo entregas
            consistentes. Utilizo o Jira de forma proficiente para o
            gerenciamento de tarefas e acompanhamento de projetos. Tenho
            facilidade em me adaptar a novos ambientes e desafios, mantendo uma
            postura proativa. Estou sempre aberto a aprender novas linguagens e
            tecnologias, buscando evoluir continuamente e acompanhar as
            tendências do mercado.
          </p>
        </div>
      </S.AboutContainer>
    </S.Section>
  );
};

