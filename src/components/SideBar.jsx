import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Button, Collapse } from 'react-bootstrap';
import { IoMdArrowDropleft, IoMdArrowDropdown } from 'react-icons/io';

const StyledDiv = styled.div`
  padding: 10px;
  height: 100%;
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #782c28;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: #782c28;
  }
`;

const StyledLi = styled.li`
  padding-bottom: 5px;
`;

const SocialButton = styled(Button)`
  width: 100%;
  text-align: left;
`;

const SocialText = styled.div`
  display: inline;
  padding-left: 6px;
  line-height: 1em;
  color: white;
`;

const SideBar = () => {
  const [linkOpen, setLinkOpen] = useState();

  const expandLink = () => {
    setLinkOpen(!linkOpen);
  };

  return (
    <StyledDiv className="bg-primary text-light">
      <StyledList>
        <StyledLi>
          <StyledLink to="/">Welcome</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledAnchor
            href="#"
            onClick={expandLink}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            API Documentation
            { linkOpen ? (
              <IoMdArrowDropdown style={{ fontSize: '1.5em' }} />
            ) : (
              <IoMdArrowDropleft style={{ fontSize: '1.5em' }} />
            ) }
            {' '}

          </StyledAnchor>
          <Collapse in={linkOpen}>
            <StyledList>
              <StyledLi style={{ marginTop: 5 }}>
                <StyledLink to="/documentation">Breweries</StyledLink>
              </StyledLi>
              <StyledLi>
                <StyledLink to="/documentation#options">Options</StyledLink>
              </StyledLi>
            </StyledList>
          </Collapse>
        </StyledLi>
      </StyledList>
      <Link to="https://github.com/mmmbacon" target="empty">
        <SocialButton variant="primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <SocialText>
            mmmbacon
          </SocialText>
        </SocialButton>
      </Link>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <a href="https://www.buymeacoffee.com/mmmbacon">
          <img width="200px" src="https://img.buymeacoffee.com/button-api/?text=Buy me a Beer&emoji=🍺&slug=mmmbacon&button_colour=a49a7a&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" alt="beer" />
        </a>
      </div>
    </StyledDiv>
  );
};

export default SideBar;
