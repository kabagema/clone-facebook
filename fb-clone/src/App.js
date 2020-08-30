import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
function App() {
  //Bem naming convention
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
      </div>
      {/* Header */}
      {/* App Body*/}
        {/* Sidebar Feed */}
        {/* Widgets */}

    </div>
  );
}

export default App;
