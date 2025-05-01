import styled from "styled-components";

export const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
`;

export const Projects = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-inline: 1rem;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 2rem;
  }

  @media (min-width: 1024px) {
    margin-inline: auto;
  }
`;