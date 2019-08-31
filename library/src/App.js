import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { ExplodingButton } from './components/ExplodingButton';

function App() {
  const [load, setLoad] = useState(false);

  return (
    <ExplodingButton color="red" load={load} onClick={() => setLoad(!load)} >Send</ExplodingButton>
  );
}

export default hot(module)(App);
