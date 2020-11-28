import React from 'react';
import Layout from './src/components/Layout';
import styled from 'styled-components';

const GlobalStyles = styled.div`
  html,
  body {
    max-width: 100% !important;
    overflow-x: hidden !important;
  }
`;

export function wrapPageElement({ element, props }) {
  return (
    <Layout className='hide-navigation-item' {...props}>
      {element}
    </Layout>
  );
}
