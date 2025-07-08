import React from 'react';
import './App.css';
import Chat from './components/Chat';
import MapView from './components/MapView';

function App() {
  return (
    <div className="app-container">
      <div className="chat-section">
        <Chat />
      </div>
      <div className="map-section">
        <MapView />
      </div>
    </div>
  );
}

export default App;
