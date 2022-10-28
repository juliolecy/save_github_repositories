import { useState } from 'react';
import './App.css';
import Routes from './routes';
import GlobalStyles from './styles/global.styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
