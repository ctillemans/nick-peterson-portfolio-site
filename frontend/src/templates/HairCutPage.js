import React from 'react';

import styled from 'styled-components';

export default function singlePizzaPage({ pageContext }) {
  console.log(pageContext);
  const { haircut } = pageContext;
  return (
    <>
      <h1>{haircut.haircutTitle}</h1>
      <p>{haircut.description}</p>
    </>
  );
}
