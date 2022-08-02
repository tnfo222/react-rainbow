import React, { useState } from 'react';
import './App.css';

function App() {
  let colors = ['violet', 'indigo', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'redorange', 'red']
  let colorMap = colors.map((color, i) => {
    return (
      <Colorblock color = {color}/>
    )
  });

  return (
    <div className="App">
      {colorMap}
    </div>
  );
}

//export function
export default App;
