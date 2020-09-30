import React from 'react';

import { Container } from './styles';
import { ReactComponent as Puff } from '../../assets/loading.svg';

function Loading() {
  return (
    <Container>
      <Puff height={60} width={60} />
    </Container>
  );
}

export default Loading;
