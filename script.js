let liegeLat = 50.64;
let liegeLon = 5.56;
let apiKey = "c40e1220d8b3da947a6f6df9817c4b17";
let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${liegeLat}&lon=${liegeLon}&appid=${apiKey}`;
let weatherOutput = document.getElementById("weather-output");

// Récupérer les données météo
fetch(weatherUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((weatherData) => {
    // Parcourir les prévisions météorologiques
    weatherData.list.forEach((weather) => {
      console.log(weatherData);
      // Créer un élément de liste pour chaque prévision
      let li = document.createElement("li");

      // Récupérer les données météo importantes
      let temp = weather.main.temp;
      let description = weather.weather[0].description;

      // Remplir le modèle HTML
      li.textContent = `Temperature: ${temp} K, Description: ${description}`;

      // Ajouter l'élément de liste à l'élément <ul>
      weatherOutput.appendChild(li);
    });
  })
  .catch((error) => {
    console.error(error);
  });
