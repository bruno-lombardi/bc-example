/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { Container, ProductInfo } from './styles';

function ProductCard({ id, name, price, category, photo_url }) {
  return (
    <Container to={`/produto/${id}`}>
      <img src={photo_url} alt={name} />
      <ProductInfo>
        <h4>{name}</h4>
        <p>{category}</p>
        <span>{price}</span>
      </ProductInfo>
    </Container>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  photo_url: PropTypes.string.isRequired,
};

export default React.memo(ProductCard);
