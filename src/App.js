import './App.css';
import Multiselect from './components/multiselect'
import { useState } from 'react';

const items=['cat', 'dog', 'rat', 'lion', 'tiger']
function App() {
  return (
    <div className="App">
      <Multiselect items={items}/>
    </div>
  );
}

export default App;
