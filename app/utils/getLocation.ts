interface OpenCageResponse {
  results: Array<{
    components: {
      town: string | undefined;
    };
  }>;
}

interface UserLocation {
  cityName: string;
  latitude: number;
  longitude: number;
}

export default async function getUserLocation(): Promise<UserLocation | string> {
  
  const apiKey = process.env.NEXT_PUBLIC_OPENCAGEDATA_API_KEY;

  if (!navigator.geolocation) {
    console.error("Geolocation not supported");
    return "Unknown city";
  }

  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    );

    const { latitude, longitude } = position.coords;

    // Fetch city name using OpenCage API
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
    );
    const data: OpenCageResponse = await response.json();

    const cityName = data.results[0]?.components.town || "Unknown City";

    return { cityName, latitude, longitude };
  } catch (error) {
    console.error("Error fetching city:", error);
    return "Unknown city";
  }
}
