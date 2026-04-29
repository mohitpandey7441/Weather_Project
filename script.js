async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const apiKey = "48973bec8793488dba5170700250711";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      document.getElementById("result").innerText = "Location not found.";
    } else {
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      document.getElementById("result").innerText = `Current temperature in ${location} is ${temp}°C (${condition})`;
    }
  } catch (error) {
    document.getElementById("result").innerText = "Error fetching weather data.";
  }
}
