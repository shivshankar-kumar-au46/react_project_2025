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
    <p className='text-center text-gray-400 mb-[21px] mt-[-13px]'>{weather.weather[0].description}</p>

    <div className='w-full'>
        <div className='flex justify-between'>
            <div className='text-center'>
            <p className='text-gray-400 text-sm'>Humidity</p>
            <p>{weather.main.humidity} %</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-400 text-sm'>Wind Speed</p>
            <p>{weather.wind.speed} m/s</p>
        </div>
        </div>
        <div className='flex justify-between mt-4'>
<div className='text-center'>
            <p className='text-gray-400 text-sm'>Pressure</p>
            <p>{weather.main.pressure} hpa</p>
        </div>
         <div className='text-center'>
            <p className='text-gray-400 text-sm'>Feels Like</p>
            <p>{weather.main.feels_like} °C</p>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default WeatherCard