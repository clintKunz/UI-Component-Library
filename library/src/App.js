import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { Button } from './components/Button';

function App() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <Button backgroundColor={"black"} color={"white"} width={130} height={45} fontSize={20} load={load} onClick={() => setLoad(!load)}><i className='fa fa-spinner fa-spin hide'></i><span className="show">Send</span></Button>
    </>
  );
}

export default hot(module)(App);
