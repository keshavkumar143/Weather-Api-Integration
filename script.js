const b = document.querySelector('.submitting'); 

b.addEventListener('click', api);

function api() {
    const a = document.querySelector('.state').value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=28a14b189afc4407813133804241006&q=${a}`)
    .then(res => res.json())
    .then(data => {
        const weatherInfoDiv = document.querySelector('.weather-info');
        weatherInfoDiv.innerHTML = `
            <h2>Weather in ${data.location.name}, ${data.location.region}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="Weather icon">
        `;
    })
    .catch(err => {
        const weatherInfoDiv = document.querySelector('.weather-info');
        weatherInfoDiv.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
    });
}