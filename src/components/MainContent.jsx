import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 10px
`;

const MainContent = () => (
  <StyledDiv>
    <section>
      <h3>About</h3>
    </section>
    <section>
      <h3>API</h3>
    </section>
  </StyledDiv>
);

export default MainContent;
