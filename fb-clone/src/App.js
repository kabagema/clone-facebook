import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
function App() {
  //Bem naming convention
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
        {/* Sidebar Feed */}
        {/* Widgets */}

    </div>
  );
}

export default App;
