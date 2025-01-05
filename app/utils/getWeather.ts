import getUserLocation from "./getLocation"

interface WeatherInfo {
  temperature: number;
  condition: string;
  icon: string;
  city: string;
  humidity: number;
}

export default async function getCurrentWeather(): Promise<WeatherInfo | string | null> {
  try {
    const response = await getUserLocation();

    if (typeof response === 'string') {
    return "Unable to determine the weather";
  }

    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    const weatherResponse = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${response.latitude}+${response.longitude}&aqi=no`
    );
    const weatherData = await weatherResponse.json();

    if (!weatherData || !weatherData.current) {
      return `Error fetching weather: ${
        weatherData.message || "Unknown error"
      }`;
    }
    //console.log(weatherData)
    const weatherInfo: WeatherInfo = {
      temperature: weatherData.current.temp_f,
      condition: weatherData.current.condition.text,
      icon: weatherData.current.condition.icon,
      city: response.cityName,
      humidity: weatherData.current.humidity,
    };

    return weatherInfo;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}