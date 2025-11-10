import React from 'react'

const WeatherCard = ({ weather }) => {
  return (
    <div className='flex justify-center flex-col items-center'>

        <h2 className='font-bold text-xl mt-2'>{weather.name}, {weather.sys.country}</h2>
        <div className='flex justify-center items-center'>
 <img 
    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    alt={weather.weather[0].description}
    className='w-16 h-16'
    />
    <p className='text-3xl font-bold'>{`${Math.round(weather.main.temp)} °C`}</p>
        </div>
   
    
    <p className='text-center text-gray-400'>{weather.weather[0].description}</p>
    </div>
  )
}

export default WeatherCard