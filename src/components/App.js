import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import OperativeLayout from "./OperativeLayout";
import ShortInfo from "./ShortInfo";

function App() {
  return (
    <div className="d-flex flex-column" style={{height:'100vh'}}>
      <Header/>
      <main style={{flex:'1 1 auto'}}>
        <ShortInfo />
        <OperativeLayout />
      </main>
      <Footer />
    </div>
  )
}

export default App;
