import Title from "../Title";
import * as S from "./style";
import foto from '../../assets/foto.jpg'

export const About = () => {
  return (
    <S.Section>
     <Title text="Sobre"/>
      <S.AboutContainer>
        <div className="about-img" id="About">
          <img src={foto} alt="Diego" />
        </div>
        <div>
          <h2 className="subtitle">Eu sou Diego Chagas</h2>
          <p className="about-description">
          Trabalho pouco mais de um ano como Desenvolvedor Full-Stack,meu trabalho inclui a integração de APIs com o lado do cliente, focando na disponibilidade e confiabilidade. Tenho experiência em tecnologias como Javascript/Typescript , Node.Js, React ,MongoDB. Possuo experiência prática na metodologia Scrum, facilitando a colaboração eficaz e entregas pontuais. Utilização proficientemente do Jira para gerenciamento ágil de projetos, garantindo transparência e eficiência na equipe. Estou aberto a aprender novas linguagens e tecnologias para acompanhar as tendências do mercado. Capacidade de adaptar-se rapidamente a ambientes dinâmicos e enfrentar desafios com uma mentalidade proativa.
          </p>
        </div>
      </S.AboutContainer>
    </S.Section>
  );
};

