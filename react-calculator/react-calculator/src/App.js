import React from 'react';
import './App.css';
import Title from './components/Title';
import InputOutput from './components/io';
import Keypad from './components/Keypad';

class App extends React.Component {
  render() {
    return (
      <>
        <Title />
        <InputOutput />
        <Keypad />
      </>
    );
  }
}

export default App;
