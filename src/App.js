import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />

      {/*App Body */}
      <div className="app__body">
        <Sidebar />
        {/**SIde bar
         * Feed
         * Widgets
         */}
      </div>
    </div>
  );
}

export default App;
