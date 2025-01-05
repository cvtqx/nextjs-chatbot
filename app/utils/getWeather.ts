import getUserLocation from "./getLocation"

export default async function getCurrentWeather() {
  try {
    const city = await getUserLocation()
    if (city === 'Unknown city') {
     return 'Unable to determine the weather'
    }
    
     const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const weatherResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
    const weatherData = await weatherResponse.json();

    if (!weatherData) {
      return `Error fetching weather: ${weatherData.message}`;
    }

     const weatherInfo = {
      temperature: weatherData.current.temp_f,
      condition: weatherData.current.condition.text,
      icon: weatherData.current.condition.icon,
      city: city,
      humidity: weatherData.current.humidity,
    };

    return weatherInfo;
    
  } catch (error) {
     console.error('Error fetching weather:', error)
    return null;
  }
}