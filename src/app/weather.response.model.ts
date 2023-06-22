export interface WeatherResponseModel {
  current: {
    air_quality:  {
      co: number;
      'gb-defra-index': number;
      no2: number;
      o3: number;
      pm2_5: number;
      pm10: number;
      so2: number;
      'us-epa-index': number;
    }
    condition: {
      code: number,
      icon: string,
      text: string
    }
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  }
  location: {
    country: string,
    lat: number,
    localtime: string,
    localtime_epoch: number,
    lon: string,
    name: string,
    region: string,
    tz_iz: string
  }
}
