import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return (
    <Layout className='hide-navigation-item' {...props}>
      {element}
    </Layout>
  );
}
