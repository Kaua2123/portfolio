import styled, { keyframes } from 'styled-components';

export const ButtonReturnToTop = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 5rem;
  border: none;
  border-radius: 3rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: 0.1s;
  z-index: 2;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brown};
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem;
  }
`;

export const mainDivAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2vw);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MainDiv = styled.div`
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  .about-me-paragraph {
    animation: ${mainDivAnimation} 1s ease-in-out;
    font-family: 'Abril Fatface';
    color: ${({ theme }) => theme.colors.lightOrange};
    font-size: 2.6rem;
  }

  @media (max-width: 768px) {
    flex-flow: column wrap;
    width: 100%;
  }
`;

export const HeroSection = styled.div`
  p {
    animation: ${mainDivAnimation} 1s;
    font-family: 'Abril Fatface';
    color: ${({ theme }) => theme.colors.lightOrange};
    font-size: 3.5rem;
  }

  h1 {
    animation: ${mainDivAnimation} 1s;
  }

  @media (max-width: 768px) {
    text-align: center;

    h1 {
      font-size: 5.5rem;
    }

    .hi-paragraph {
      font-size: 2.5rem;
    }

    .about-me-paragraph {
      font-size: 2rem;
    }
  }
`;

export const AboutMe = styled.div`
  margin-top: 6rem;
`;

export const SocialDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 3rem;
  animation: ${mainDivAnimation} 1s;

  @media (max-width: 768px) {
    flex-flow: row wrap;
  }
`;

export const ButtonIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.5rem);
    color: ${({ theme }) => theme.colors.brown};
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 6px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const marquee = keyframes`
  0% {transform: translateX(0)};
  100% {transform: translateX(-100%)}
`;

export const Div = styled.div`
  background: linear-gradient(#c8835d, #62402e);

  .gradient {
    background: linear-gradient(#c8835d, #62402e);
  }
`;

export const StackDiv = styled.div`
  background-color: inherit;
  overflow: hidden;
  padding: 2.3rem 0;
  white-space: nowrap;

  @media (max-width: 768px) {
  }
`;

export const Marquee = styled.div`
  display: inline-block;
  width: 100%;
  animation: 25s ${marquee} infinite linear;

  img {
    margin: 0 6rem;
    height: 6rem;
  }

  @media (max-width: 768px) {
    animation: 5s ${marquee} infinite linear;
    width: 100%;
    display: inline-block;

    img {
      height: 2.5rem;
      margin: 0 1rem;
    }
  }
`;

export const projectsAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10vw);
  }

  to {
    opacity: 1;
    transform: translateX(0);
    visibility: visible;
  }
`;

export const ProjectsSection = styled.div<{ $isAnimated?: boolean }>`
  margin: 5rem 10rem;
  overflow: hidden;

  .project-1,
  .project-2 {
    visibility: hidden;
  }

  .project-1 {
    animation: ${(props) => props.$isAnimated && projectsAnimation} forwards
      1.2s;
  }

  .project-2 {
    animation: ${(props) => props.$isAnimated && projectsAnimation} forwards
      1.2s;
  }

  h1 {
    text-align: end;
    margin-bottom: 10rem;
    text-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 6px 20px rgba(0, 0, 0, 0.1);
  }

  h2,
  h6 {
    text-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 6px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin: 0;

    h1 {
      text-align: center;
      font-size: 6rem;
      margin-top: 4rem;
    }

    h2,
    h6 {
      text-align: center;
    }

    h2 {
      font-size: 3rem;
    }

    h6 {
      font-size: 1.8rem;
    }
  }
`;

export const ProjectsDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20rem;

  @media (max-width: 768px) {
    gap: 10rem;
  }
`;

export const Project = styled.div<{
  $isAnimated?: boolean;
}>`
  display: flex;
  gap: 10rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
`;

export const ProjectCard = styled.div`
  width: 55%;
  height: 39rem;
  border-radius: 1rem;

  img {
    width: 100%;
    height: inherit;
    border-radius: inherit;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    img {
      -webkit-box-shadow: 10px 10px 44px 4px rgba(0, 0, 0, 0.24);
      -moz-box-shadow: 10px 10px 44px 4px rgba(0, 0, 0, 0.24);
      box-shadow: 10px 10px 44px 4px rgba(0, 0, 0, 0.24);
    }
  }
`;

export const ProjectInfo = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    button {
      font-size: 1.4rem;
      width: 15rem;
    }
  }
`;

export const ContactMeSection = styled.div`
  margin-top: 20rem;
  min-height: 30vh;
  background-color: ${({ theme }) => theme.colors.darkBrown};
`;

export const DivContactMe = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 15rem;

  .button-copy {
    border-radius: 0;
    box-shadow: none;

    &:hover {
      transform: translateY(0);
    }
  }

  .email {
    background-color: #feddca;
    color: #000;
    font-weight: bold;
    font-family: Rowdies;
    padding: 2rem;
    width: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .copy-email-div {
    display: flex;
    flex-flow: column wrap;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 6px 20px rgba(0, 0, 0, 0.1);
  }

  .text-div {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 0rem;
    gap: 2.5rem;

    .text-div {
      text-align: center;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 10rem;
`;

export const divAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
    visibility: visible;
  }
`;

export const AboutMeSection = styled.div<{ $isDivAnimated?: boolean }>`
  margin: 15rem 10rem;
  visibility: hidden;

  .text {
    animation: ${(props) => props.$isDivAnimated && divAnimation} forwards 1s;
    margin-top: 6rem;
    padding: 6rem;
    background-color: ${({ theme }) => theme.colors.brown};
    border-radius: 1.5rem;
  }

  .my-services {
    margin-top: 6rem;
  }

  h1,
  h2 {
    animation: ${(props) => props.$isDivAnimated && divAnimation} forwards 1s;
  }

  p {
    color: white;
    font-family: Rowdies;
    font-style: normal;
    font-weight: 100;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-top: 10rem;

    h1 {
      text-align: center;
      font-size: 6rem;
    }

    .text {
      padding: 2rem;
      width: 27rem;
      text-align: center;
    }

    .my-services {
      h2 {
        font-size: 4rem;
        text-align: center;
      }
    }
  }
`;

export const gridAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    visibility: visible;
    opacity: 1;
  }
`;

export const GridMyServices = styled.div<{ $isGridsAnimated?: boolean }>`
  visibility: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;

  div {
    animation: ${(props) => props.$isGridsAnimated && gridAnimation} forwards
      1.5s;
    background-color: ${({ theme }) => theme.colors.brown};
    border-radius: 2rem;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin-top: 5rem;
    padding: 5rem;
    gap: 5rem;

    .service-name {
      font-size: 2.2rem;
      font-family: Rowdies;
    }

    .service-description {
      font-family: Rowdies, sans-serif;
      font-weight: 300;
      font-style: normal;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;

    div {
      text-align: center;
      padding: 3.5rem;
      width: 27rem;
    }
  }
`;
