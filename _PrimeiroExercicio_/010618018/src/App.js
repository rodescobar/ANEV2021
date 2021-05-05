import React, { useState } from 'react'

import Input from './components/Input'
import StateBox from './components/StateBox'

import './app.css'
import Student from "./components/Student";

function App() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <div className="app">
      <div className="inputs_container">
        <Input
          label="Digite o nome:"
          value={name}
          onChange={setName}
        />
        <Input
          phone
          label="Digite o telefone:"
          value={phone}
          onChange={setPhone}
        />
      </div>
      <StateBox
        name={name}
        phone={phone}
      />
      <Student />
    </div>
  );
}

export default App;
