import { useState } from 'react';
import './App.css';

const inputLabels = [
  'Digite o nome',
  'Digite o telefone',
];


function App() {
  var [ value, setValue ] = useState([]);

  var renderDiv = () => {
    setValue(value = [document.getElementById("inputName").value, document.getElementById("inputPhone").value]);
  }

  return (
    <div className="App">
      <label for="name">{ inputLabels[0] } :</label>
      <input type="text" id="inputName" defaultValue=''name="name" onChange={ () => renderDiv() }/>
      <br/>

      <label for="phone">{ inputLabels[1] } :</label>
      <input type="tel" id="inputPhone" defaultValue='' name="phone" onChange={ () => renderDiv() }/>
      <br/>

      <div className="main-box">
        <div className="box-content">
          <h3 className="name">{value[0]}</h3>
          <h3 className="phone">{value[1]}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
