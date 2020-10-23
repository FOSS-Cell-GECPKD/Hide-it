import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import OperativeLayout from "./OperativeLayout";
import ShortInfo from "./ShortInfo";

function App() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column px-2 pb-2">
        <ShortInfo />
      </div>
      <div className="d-flex flex-column justify-content-center">
        <OperativeLayout />
      </div>
      <Footer />
      </>
  )
}

export default App;
