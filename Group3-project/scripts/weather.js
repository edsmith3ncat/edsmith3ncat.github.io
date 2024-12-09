/**
 * This script fetches the current weather data for Greensboro using the OpenWeatherMap API.
 * It dynamically updates the weather information on the BarberConnect website,
 * includes the location, temperature, and weather conditions.
 * If the data retrieval fails, it displays an error message.
 */


$(document).ready(function () {
    const api = "d757d4feabd812d88a92bbad08bdef4e";
    const location = "Greensboro";
    const apilink = `https://api.openweathermap.org/data/2.5/weather?q=Greensboro&units=metric&appid=899481291c289da8f00aa1153c767e40`;

    $.ajax({
        url: apilink,
        type: "GET",
        dataType: "json",
        success: function (response) {
            const city = response.name;
            const temp = response.main.temp;
            const weatherDesc = response.weather[0].description;

            const weatherHTML = `
                <p><strong>Location:</strong> ${city}</p>
                <p><strong>Temperature:</strong> ${temp}°C</p>
                <p><strong>Condition:</strong> ${weatherDesc}</p>
            `;
            $("#weather-results").html(weatherHTML);
        },
        error: function () {
            // Display error message if the request fails
            $("#weather-results").html("<p>Unable to fetch weather data.</p>");
        }
    });
});
