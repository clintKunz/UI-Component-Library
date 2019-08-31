import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { ExplodingButton } from './components/ExplodingButton';

function App() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <ExplodingButton backgroundColor={"black"} color={"white"} width={130} height={45} fontSize={20} load={load} onClick={() => setLoad(!load)}><i className='fa fa-spinner fa-spin hide'></i><span className="show">Send</span></ExplodingButton>
    </>
  );
}

export default hot(module)(App);
