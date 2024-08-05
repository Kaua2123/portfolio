import styled, { keyframes } from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  .about-me-paragraph {
    font-family: 'Abril Fatface';
    color: ${({ theme }) => theme.colors.lightOrange};
    font-size: 2.6rem;
  }
`;

export const HeroSection = styled.div`
  line-height: 1;

  p {
    font-family: 'Abril Fatface';
    color: ${({ theme }) => theme.colors.lightOrange};
    font-size: 3.5rem;
  }
`;

export const AboutMe = styled.div``;

export const StackDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.brown};
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 3rem 0;
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
  align-items: center;
  gap: 13rem;
  border-radius: 0.5rem;

  img {
    margin: 0 6rem;
    height: 5rem;
  }
`;

export const H1 = styled.h1`
  font-size: 10rem;
`;
