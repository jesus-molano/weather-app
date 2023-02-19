import { useState } from "react"
import type { Location } from "@types"
import { LocationContext } from "."

interface Props {
  children: React.ReactNode
}

export const LocationProvider = ({ children }: Props) => {
  const [location, setLocation] = useState<Location>({ latitude: 0, longitude: 0 })
  
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  )
}