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

export function checkResponse(res) {
  if (!res.ok) {
    throw new Error("API error: ${res.status}");
  }
  return res.json();
}

export async function getLocation() {
  const res = await fetch("https://geolocation-db.com/json/");
  return checkResponse(res);
}
