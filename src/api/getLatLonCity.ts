
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const limit = 1

export async function getLatLonCity(city:string) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY}`
  const response = await fetch(url)
  const data = await response.json()
  return data 
}
