import './App.css';
import React, {useState} from 'react';
import Drum from './components/Drum';

function App() {
  const [state,setState] = useState
  ({
    data: [{id:'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', key: 'Q', keyCode: 81, name: 'Heater 1'},
      {id:'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', key: 'W', keyCode: 87, name: 'Heater 2'},
      {id:'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', key: 'E', keyCode: 69, name: 'Heater 3'},
      {id:'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', key: 'A', keyCode: 65, name: 'Heater 4'},
      {id:'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', key: 'S', keyCode: 83, name: 'Clap'},
      {id:'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', key: 'D', keyCode: 68, name: 'Open HH'},
      {id:'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', key: 'Z', keyCode: 90, name: "Kick n' Hat"},
      {id:'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', key: 'X', keyCode: 88, name: 'Kick'},
      {id:'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', key: 'C', keyCode: 67, name: 'Closed HH'}], 
    display: ''
  });

  
  const setDisplay = (name) => {
    setState (state => ({...state, display: name}));
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div className='drumKeys'>
        {state.data.map((item) => {
            return (
              <Drum drumData={{...item}} key={item.id} setDisplay={setDisplay} ></Drum>
            )
        })}
        </div>
        <div id="display">
          {state.display}
        </div>
      </div>
    </div>
  );
}

export default App;
