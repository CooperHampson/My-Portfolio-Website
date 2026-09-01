import { useState } from 'react';
import './ColourSelector.css'

export function ColourSelector() {
  const [currentColour, setCurrentColour] = useState('#fded5d');

  const changeColour = () => {
    const newColour = currentColour === '#fded5d' ? '#ffc0cb' : '#fded5d';

    setCurrentColour(newColour);

    document.documentElement.style.setProperty('--site-colour', newColour);
  };

  const buttonColour = currentColour === '#fded5d' ? '#ffc0cb' : '#fded5d';

  return (
    <div className="colour-picker-container">
      <button className="colour-picker-button" onClick={changeColour} style={{ backgroundColor: buttonColour }}></button>
    </div>
  );
}