import { useContext, useEffect } from 'react';
import { LocationContext } from '../contexts';

export const useUserLocation = (): void => {
  const { setLocation } = useContext(LocationContext);

  useEffect(() => {
    const handleLocation = (position: GeolocationPosition): void => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocation);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, [setLocation]);
};