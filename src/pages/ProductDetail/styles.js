import styled, { css } from 'styled-components';

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: initial;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 16px;

  max-width: 35rem;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-left: 1rem;

  h1 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  h4 {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  p {
    margin-bottom: 1.6rem;
    color: var(--dark);
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const buttonCss = css`
  cursor: pointer;
  border: 1px solid var(--light-green);
  color: var(--black);
  height: 50px;
  line-height: 50px;
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 400;

  background-image: linear-gradient(
    90deg,
    var(--light) 0%,
    var(--light) 50%,
    var(--light-green) 50%
  );
  background-size: 230%;

  transition: 0.2s background-position, 0.2s color, 0.2s transform;

  &:hover {
    background-position: 100%;
    color: var(--light);
    transform: translateX(0.5rem);
  }
`;

export const ProductPricing = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--green);
  }

  button {
    ${buttonCss}
  }
`;

export const BackButton = styled.button`
  max-width: 18rem;
  align-self: flex-start;
  margin-bottom: 2rem;

  ${buttonCss}

  svg {
    margin-right: 1rem;
  }
`;
