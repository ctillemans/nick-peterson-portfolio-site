import React from 'react';
import styled from 'styled-components';
import { RiScissors2Line } from 'react-icons/ri';
import { Link } from 'gatsby';

const LogoContainer = styled.div`
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoIcon = styled.div`
  display: flex;
  border: 1px solid white;
  margin-right: 1em;
  svg {
    height: 3em;
    width: 3em;
    color: white;
  }
`;

const Logotext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  h2 {
    padding: 0;
    margin: 0;
  }
`;

export default function Logo({ className }) {
  return (
    <Link to='/about'>
      <LogoContainer className={className}>
        <LogoIcon>
          <RiScissors2Line />
        </LogoIcon>
        <Logotext>
          <h2>Nick</h2>
          <h2>Petersen</h2>
        </Logotext>
      </LogoContainer>
    </Link>
  );
}
