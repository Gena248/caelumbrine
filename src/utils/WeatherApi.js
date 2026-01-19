export const getWeather = ({ latitude, longitude, apiKey }) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`,
  ).then((res) => res.json());
};

export const filterWeatherData = (data) => {
  const result = {};
  result.condition = data.weather?.[0]?.main || "Clear";

  return result;
};
