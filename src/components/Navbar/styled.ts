import styled from 'styled-components';

export const Div = styled.div<{ $isMenuOpen?: boolean }>`
  background-color: ${({ theme }) => theme.colors.darkerBrown};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: relative;

  h5 {
    font-family: Rowdies;
    font-weight: 100;
  }

  div {
    display: flex;
    flex-flow: row wrap;
    gap: 10rem;

    p {
      font-family: Rowdies;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      transition: 0.1s;

      &:hover {
        color: ${({ theme }) => theme.colors.lightBrown};
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;

    .hamburguer {
      position: absolute;
      top: 0;
      left: 5px;
      margin-bottom: ${(props) => props.$isMenuOpen && '2rem'};
    }

    div:not(.hamburguer) {
      display: ${(props) => (props.$isMenuOpen ? 'flex' : 'none')};
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      gap: 3rem;
    }
  }
`;
