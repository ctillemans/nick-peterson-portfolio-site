import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const LogoContainer = styled.div`
  height: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logotext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${(props) => (props.color ? props.color : 'white;')};
  h1 {
    font-weight: 300;
    padding: 0;
    margin: 0;
  }
`;

export default function Logo({ className, color }) {
  return (
    <LogoContainer className={className}>
      <Link to='/'>
        <Logotext color={color}>
          <h1>NP</h1>
        </Logotext>
      </Link>
    </LogoContainer>
  );
}
