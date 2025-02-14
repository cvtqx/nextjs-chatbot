import opencage from "opencage-api-client";

interface OpenCageResponse {
  results: Array<{
    formatted: string;
    geometry: {
      lat: number | undefined,
      lng: number | undefined,
    };
  }>;
}

interface UserLocation {
  cityName: string;
  latitude: number;
  longitude: number;
}

export default async function getUserLocation(location): Promise<
  UserLocation | string
> {
  const apiKey = process.env.NEXT_PUBLIC_OPENCAGEDATA_API_KEY;

  try {
    const data: OpenCageResponse = await opencage.geocode({ q: location, key: apiKey });

    if (data.results && data.results.length > 0) {
      const latitude = data.results[0].geometry.lat;
      const longitude = data.results[0].geometry.lng;
      const city = data.results[0].formatted;
      console.log(data.results)
      return {cityName: city, latitude, longitude}
    } else {
      return 'City not found'
    }
  } catch (error) {
    console.error("Error fetching city:", error);
    return "Unknown city";
  }
}
