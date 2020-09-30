import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray);
  border-radius: 16px;
  text-decoration: none;
  color: var(--black);
  transition: border 0.2s ease, transform 0.3s ease-out;

  img {
    width: 100%;
    height: 18rem;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  &:hover {
    border-color: var(--dark);
    transform: translateY(-2px);

    div span {
      color: var(--green);
    }
  }
`;

export const ProductInfo = styled.div`
  padding: 1rem;

  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--dark);
    margin-bottom: 0.5rem;
  }

  span {
    color: var(--black);
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
