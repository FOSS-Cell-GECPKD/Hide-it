
import React from 'react';
import Header from './Header';
import OperativeLayout from './OperativeLayout'

function App() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className="d-flex flex-column justify-content-center">
      <OperativeLayout/>
    </div>
    </>
  );
}

export default App;