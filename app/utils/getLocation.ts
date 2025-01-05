
export default async function getUserLocation() {
  const apiKey = process.env.NEXT_PUBLIC_OPENCAGEDATA_API_KEY
  
  if (!navigator.geolocation) {
    console.error("Geolocation not supported")
    return 'Unknown city'
  }
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    const { latitude, longitude } = position.coords
    
    // Fetch city name using OpenCage API
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`)
    const data = await response.json()

    const cityName = data.results[0]?.components.city || data.results[0]?.components.town || 'Unknown City'
    return cityName

  } catch (error) {
    console.error("Error fetching city:", error)
    return 'Unknown city'
  }
}