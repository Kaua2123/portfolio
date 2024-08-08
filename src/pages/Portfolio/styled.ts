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

  &:hover {
    background-color: ${({ theme }) => theme.colors.brown};
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.1);
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
`;

export const HeroSection = styled.div`
  animation: ${mainDivAnimation} 1s;

  p {
    font-family: 'Abril Fatface';
    color: ${({ theme }) => theme.colors.lightOrange};
    font-size: 3.5rem;
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
`;

export const StackDiv = styled.div`
  background-color: inherit;
  overflow: hidden;
  padding: 2.3rem 0;
  white-space: nowrap;
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

export const Marquee = styled.div`
  display: inline-block;
  width: 100%;
  animation: 25s ${marquee} infinite linear;

  img {
    margin: 0 6rem;
    height: 6rem;
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
  }
`;

export const ProjectsSection = styled.div`
  margin: 5rem 10rem;
  overflow: hidden;

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
`;

export const Project = styled.div<{
  isAnimated?: boolean;
}>`
  animation: ${(props) => props.isAnimated && projectsAnimation} 1.2s;

  display: flex;
  gap: 10rem;
  align-items: center;
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
`;

export const ProjectInfo = styled.div``;

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
`;

export const H1 = styled.h1`
  font-size: 10rem;
`;

export const AboutMeSection = styled.div`
  margin: 15rem 10rem;

  .text {
    margin-top: 6rem;
    padding: 6rem;
    background-color: ${({ theme }) => theme.colors.brown};
    border-radius: 1.5rem;
  }

  .my-services {
    margin-top: 6rem;

    ul {
      padding-left: 6rem;
      margin-top: 4rem;

      li {
        color: white;
        font-size: 2rem;
      }
    }
  }

  p {
    color: white;
    font-family: Rowdies;
    font-style: normal;
    font-weight: 100;
    font-size: 1.8rem;
  }
`;

export const gridAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(5%);
  }

  to {
    transform: translateY(0);
  }
`;

export const GridMyServices = styled.div<{ isGridsAnimated?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;

  div {
    animation: ${(props) => props.isGridsAnimated && gridAnimation} 1s;

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
`;
