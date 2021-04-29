import React from "react";

import './styles.css'

const StateBox = ({name, phone}) => {
  return (
    <div className="state_container">
      <div className="state_box">
        <span className="states">
          {(name === '' && phone === '') ? (
            "Digite seu nome ou telefone para continuar."
          ) : (
            <>
              <p>{name}</p>
              <p>{phone}</p>
            </>
          )}
        </span>
      </div>
    </div>
  )
}

export default StateBox