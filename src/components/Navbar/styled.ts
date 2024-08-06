import styled from 'styled-components';

export const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.darkerBrown};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  div {
    display: flex;
    flex-flow: row wrap;
    gap: 10rem;

    p {
      font-family: Rowdies;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.lightBrown};
      }
    }
  }
`;
