import styled from 'styled-components';

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

export const H1 = styled.h1`
  font-size: 10rem;
`;
