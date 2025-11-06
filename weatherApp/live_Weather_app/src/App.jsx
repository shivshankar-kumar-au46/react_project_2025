import { useState } from "react"
import SearchBar from "./components/SearchBar"

function App() {
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

const fetchWeather = async () => {
  
}
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <div className="bg-black/90 text-white rounded-lg shadow-lg p-8 max-w-md">
<h1 className="text-3xl font-bold text-center mb-6 ">Weather App</h1>
<SearchBar/>
      </div>
    </div>
  )
}

export default App
