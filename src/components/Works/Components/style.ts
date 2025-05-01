import styled, { keyframes } from "styled-components";

export const CardProjects = styled.div`
  box-shadow: 0 4px 25px rgba(14, 36, 49, 0.15);
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    width: 320px;
    height: 220px;
    transition: 1s;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

export const Pulse = keyframes`
 0% {
      transform: scale(1);
    }
 100% {
      transform: scale(1.05);
    }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  .link {
    display: flex;
    align-items: center;
    gap: 2px;
    margin: 12px 0px;
    font-family: "Inter", sans-serif;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 0.65rem 2.1rem;
    border-radius: 0.5rem;
    color: #fff;
    transition: all 1s;
  }

  .link:hover {
    animation: ${Pulse} 0.7s ease-in-out infinite alternate;
    font-weight: 500;
    background-color: hsl(
      205.87677725118482,
      84.0637450199203%,
      50.78431372549019%
    );
  }
`;