const dateDiv = document.getElementById("time");

function myDateFunction() {
  const now = new Date();
  const nowStr = now.toLocaleString('lv-EU');
  dateDiv.innerHTML = nowStr;
}
setInterval(myDateFunction, 1000);


const form = document.querySelector("#form");
const city = document.querySelector("#result");
const link = "https://api.openweathermap.org/data/2.5/weather?appid={}&units=metric";
const api="c774716a7b3ab97e1151d8304e6b0bf9";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const cityName = document.querySelector("#city").value;
  const response = await fetch(Url + "&appid=" + apiKey + "&q=" + cityName);
  const data = await response.json();
  if (response.status === 200) {
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    result.innerHTML = `Temperature in ${cityName}: ${temperature} Celsius<br>Weather description: ${weatherDescription}`;
  } else {
    result.innerHTML = "Not found";
  }
});
