import React from 'react'

export const Checkbox = ({ options, value, setValue }) => {



  return (
    <div>
      {options.map(option => ( 
        <label key={option}>
          <input 
          type="radio"
          value={option}
          checked={value === option}
          onChange={({ target }) => setValue(target.value)}
          />
          {option}
        </label>
      ))}
  </div>
  )
}

export default Checkbox