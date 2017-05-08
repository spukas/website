import React from 'react';
import styled from 'styled-components';

const HeroText = styled.section`
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    white-space: nowrap;
    font-weight: 900;
`;

export default () => (
  <HeroText>
    <h1>Moka Haiku:<br />web app agency</h1>
  </HeroText>
);
