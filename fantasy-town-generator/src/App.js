import React, { useState } from "react";
import './App.css';
import Header from './Header'
import Main from './MainWithClass'
import ThemeContext from './Context/ThemeContext';

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
