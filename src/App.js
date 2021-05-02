import './App.css';
import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import {FullName} from './Component/Profile/FullName.js';
import {Address} from './Component/Profile/Address.js';
function App() {
  return (
    <div className="App">
      <p id="tada">Try to touch me !!</p>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
