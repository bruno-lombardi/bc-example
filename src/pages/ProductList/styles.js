import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;

  svg {
    color: var(--green);
    margin-bottom: 1rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1.4rem;
  }
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  column-gap: 20px;
  row-gap: 12px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`;
