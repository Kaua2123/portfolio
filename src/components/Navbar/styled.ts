import styled from 'styled-components';

export const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.darkerBrown};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

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
`;
