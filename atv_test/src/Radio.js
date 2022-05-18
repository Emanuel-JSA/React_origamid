import React from 'react'

const Radio = ({ pergunta, options, value, onChange, id, active}) => {

  if (active === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map(option => ( 
        <label key={option}>
          <input 
          type="radio"
          id={id}
          value={option}
          checked={value === option}
          onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  )
}

export default Radio