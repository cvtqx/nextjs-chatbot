import React, { useState } from 'react'

const LocationInput = ({ onLocationChange }) => {
  const [location, setLocation] = useState('');

  const handleButtonClick = () => {
    onLocationChange(location)
    setLocation('')
  }

  return (
    <form className='flex flex-col'>
      <label htmlFor='location'>
        <input
          type='text'
          name='location'
          value={location}
          placeholder='where are you located?'
          className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button type='button' className="btn bg-primary text-accent rounded-lg hover:bg-secondary hover:text-white" onClick={handleButtonClick}>Get weather</button>
    </form>
  )
}

export default LocationInput