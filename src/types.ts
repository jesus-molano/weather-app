
interface WeatherData {
  name: string
  weather: {
    main: string
    description: string
  }[]
  main: {
    temp: number
    feels_like: number
  }
}

declare module 'react-icons-weather' {
  import { IconType } from 'react-icons';

  export const WiDaySunny: IconType;
  export const WiCloudy: IconType;
  export const WiRain: IconType;
  export const WiThunderstorm: IconType;
  export const WiSnow: IconType;
  export const WiFog: IconType;
}

export type { WeatherData }
