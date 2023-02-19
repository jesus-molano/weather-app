import { LocationContextType } from "@types";
import { createContext } from "react";

export const LocationContext = createContext<LocationContextType>({
  location: {
    latitude: 0,
    longitude: 0,
  },
  setLocation: () => { },
})