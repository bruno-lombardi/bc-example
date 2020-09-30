import React from 'react';
import PropTypes from 'prop-types';

import { Container, Main } from './styles';

function Layout({ children }) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

export default Layout;
