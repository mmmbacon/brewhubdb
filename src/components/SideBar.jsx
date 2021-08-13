import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 10px;
  height: 100%;
`;

const SideBar = () => (
  <StyledDiv className="bg-primary text-light">sidebar</StyledDiv>
);

export default SideBar;
