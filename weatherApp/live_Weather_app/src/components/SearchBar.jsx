import React, { useState } from 'react'

const SearchBar = ({ fetchWeather }) => {
    const [city, setCity] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      if(city.trim()){
        fetchWeather(city);
        setCity("");
      }

    }
  return (
    <form className='flex' onSubmit={handleSubmit}>
        <input 
        value={city}
         onChange={(e) => setCity(e.target.value)} 
         className='flex-1 p-2 rounded-l-lg border border-gray-300 outline-none border-r-0' 
         type='text'
          placeholder='Enter city name' 
          />
        <button className='bg-blue-500 cursor-pointer border p-2 hover:bg-blue-600 border-l-0 rounded-r-lg' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar