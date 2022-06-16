import React from 'react';
import Buttons from '../Buttons/Buttons';
import Screen from '../Screen/Screen';
import './styles.scss'

const Container = () => {
  return (
    <div className="container">
      <Screen />
      <Buttons />
    </div>
  );
}

export default Container;