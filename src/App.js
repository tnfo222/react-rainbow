import React, { useState } from 'react';
import ColorBlock from './ColorBlocks';
import ColorForm from './ColorForm';
import './App.css';

function App() {
  let [colors, setColors] = useState(['purple', 'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key= {i} color = {color}/>
    )
  });

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  };

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

//export function
export default App;
