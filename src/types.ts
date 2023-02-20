interface Location {
  latitude: number | null;
  longitude: number | null;
}

interface LocationContextType {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
}
interface WeatherContextType {
  weatherData: WeatherData | null;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}
interface WeatherData {
  coord:      Coord;
  weather:    Weather[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  rain:       Rain;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

interface Clouds {
  all: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
  sea_level:  number;
  grnd_level: number;
}

interface Rain {
  "1h": number;
}
interface Sys {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}

interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

interface Wind {
  speed: number;
  deg:   number;
  gust:  number;
}


export type { Location, LocationContextType, WeatherData, WeatherContextType }
