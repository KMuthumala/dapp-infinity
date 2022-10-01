import React from 'react';
import './App.css';
import NavBarComponent from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <React.Fragment>
          <div>
              <NavBarComponent />
          </div>
      </React.Fragment>
  );
}

export default App;
