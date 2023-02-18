import { useState, useEffect } from "react"

type Position = {
  latitude: number | null;
  longitude: number | null;
}

function Weather() {
  const [position, setPosition] = useState<Position>({
    latitude: null,
    longitude: null
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        },
        (error) => console.log(error)
      )
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, [])

  return (
    <>
      <h2>Current weather</h2>
      {position.latitude && position.longitude ? (
        <p>
          Latitude: {position.latitude.toFixed(6)}, Longitude:{" "}
          {position.longitude.toFixed(6)}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
export default Weather
