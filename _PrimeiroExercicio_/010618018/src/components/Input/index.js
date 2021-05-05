import React from 'react'
import InputMask from 'react-input-mask'

import './styles.css'

const Input = ({label, value, onChange, phone = false}) => {
  return (
    <label className="input_container">
      <span className="input_label">
        {label}
      </span>
      {(phone) ? (
          <InputMask
            mask="(99) 99999-9999"
            value={value}
            onChange={e => onChange(e.target.value)}
          />
      ) : (
          <input
            value={value}
            onChange={e => onChange(e.target.value)}
          />
      )}
    </label>
  )
}

export default Input