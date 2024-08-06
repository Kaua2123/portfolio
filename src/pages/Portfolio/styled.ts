import styled, { keyframes } from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  background: linear-gradient(#c8835d, #62402e);

  .about-me-paragraph {
    font-family: 'Abril Fatface';
    color: ${({ theme }) => theme.colors.lightOrange};
    font-size: 2.6rem;
  }
`;

export const HeroSection = styled.div`
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
  background-color: #332822;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(0, 0, 0, 0.1);
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
`;

export const Marquee = styled.div`
  display: inline-block;
  width: 100%;
  animation: 10s ${marquee} infinite linear;
  border-radius: 0.5rem;

  img {
    margin: 0 6rem;
    height: 5rem;
  }
`;

export const ProjectsSection = styled.div`
  margin: 5rem 10rem;

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

export const Project = styled.div`
  display: flex;
  gap: 10rem;
  align-items: center;
`;

export const ProjectCard = styled.div`
  width: 55%;
  background-color: ${({ theme }) => theme.colors.white};
  height: 39rem;
  border-radius: 5.4rem;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(0, 0, 0, 0.1);
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
  width: 100%;
  padding: 0 10rem;

  .email {
    background-color: #feddca;
    color: #000;
    font-weight: bold;
    font-family: Rowdies;
    padding: 2rem;
    width: 25rem;
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
