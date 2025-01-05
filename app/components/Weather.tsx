import { useEffect, useState } from "react"
import getCurrentWeather from "../utils/getWeather"
import Image from "next/image"

interface WeatherInfo {
  temperature: number;   
  condition: string;     
  icon: string;         
  city: string;          
  humidity: number;     
}

const WeatherInfo = () => {
  const [weather, setWeather] = useState<WeatherInfo | null>(null)
  
  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getCurrentWeather()

      const weatherInfo: WeatherInfo = {
        temperature: weatherData.temperature,  
        condition: weatherData.condition,
        icon: weatherData.icon,
        city: weatherData.city,
        humidity: weatherData.humidity,
      };
      setWeather(weatherInfo);
    }
    fetchWeather()
  }, [])
  
  return (
    <div className="stats shadow w-48 text-sm"> 
      <div className="stat">
        {weather ? (
          <>
      <div className="stat-title">{weather.city}</div>
    <div className="stat-value">{weather.temperature}°F</div>
            <div className="stat-desc">  <Image
              
            width={50}
            height={50}
            src={`http:${weather.icon}`}
            alt={weather.condition}
          /></div>
          </>
      ): ( 
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
   )
}

export default WeatherInfo