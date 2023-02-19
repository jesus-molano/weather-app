import { createContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode
}
type Coords = {
  longitude: number | null
  latitude: number | null
}

export const UserPositionContext = createContext<Coords | null>(null)

function UserPositionProvider({ children }: Props) {
  const [longitude, setLongitude] = useState<number | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocalización no soportada por el navegador.");
    }
  }, []);

  return (
    <UserPositionContext.Provider value={{ longitude, latitude }}>
      {children}
    </UserPositionContext.Provider>
  );
}
export default UserPositionProvider
