import { useEffect, memo, useState } from "react"
import getCurrentWeather from "../utils/getWeather"
import Image from "next/image"

interface WeatherInfo {
  temperature: number;
  condition: string;
  icon: string;
  city: string;
  humidity: number;
}

interface WeatherInfoProps {
  onWeatherData: (weatherData: WeatherInfo) => void
}

const WeatherInfo = ({ onWeatherData }: WeatherInfoProps) => {
  const [weather, setWeather] = useState<WeatherInfo | null>(null)
  
  const location = 'moscow'
  
  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getCurrentWeather(location)

      if (weatherData === null || typeof weatherData === 'string') {
        console.error("Error fetching weather data.")
      } else {
        const weatherInfo: WeatherInfo = {
          temperature: weatherData.temperature,
          condition: weatherData.condition,
          icon: weatherData.icon,
          city: weatherData.city,
          humidity: weatherData.humidity,
        }
        setWeather(weatherInfo)
        onWeatherData(weatherInfo)

      };

    }
    fetchWeather()
  }, [])

  return (
    <div className="stats  w-24 h-24 text-sm overflow-hidden">
      <div className="stat">
        {weather ? (
          <>
            <div className="text-sm stat-value">{weather.temperature}°F</div>
            <div className="stat-desc">  <Image

              width={70}
              height={70}
              src={`http:${weather.icon}`}
              alt={weather.condition}
            /></div>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  )
}

export default memo(WeatherInfo)