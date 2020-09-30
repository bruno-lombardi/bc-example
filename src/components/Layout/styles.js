import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  width: min(60rem, 100%);
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 1.4rem;
  }
`;
