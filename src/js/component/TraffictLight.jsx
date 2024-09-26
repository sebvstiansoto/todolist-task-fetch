import React, {useState} from 'react'
import './trafficlights.css'

const TrafficLight = () => {
  const [color, setColor] = useState('red');
  const [extra, setExtra] = useState(false);

  const cycleColor = () => {
      if (color === 'red') setColor('green');
      else if (color === 'green') setColor('yellow');
      else setColor('red');
  };

  const addPurple = () => {
    if (color === "purple") setColor("red");
    else setColor("purple");
  };

  const addOrange = () => {
    if (color === "orange") setColor("red");
    else setColor("orange");
  };


  return (
    <div>
      <div className="traffic-light">
        <div
          className={`light red ${color === "red" ? "selected" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "selected" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "selected" : ""}`}
          onClick={() => setColor("green")}
        ></div>
        {color === "purple" && (
          <div className={`light purple selected`}></div>
        )}
      </div>
      
      <button onClick={cycleColor}>Cambiar color</button>
      <button onClick={addPurple}>Agregar púrpura</button>
    </div>
  );
};

export default TrafficLight