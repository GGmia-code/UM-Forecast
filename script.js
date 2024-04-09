document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    const popupText = document.getElementById('popupText');
    const mapContainer = document.querySelector('.map-container');

    const pathMessages = {
        Richter: "Dreadfully Dull",
        Arboretum: "Marvelous",
        PoliSci: "Sunny and Settled",
        Cox: "Grey. Just Grey.",
        CS: "Very Very Frightening",
        Law: "Overcast",
        ArtsandSci: "Slightly Hazy",
        Physics: "Rather Depressing",
        Dooly: "Crystal Clear",
        Nursing: "Rather Cloudy",
        Frost: "Mostly Calm",
        Lake: "Sunny Spells",
        Stanford: "Splended",
        wellness: "Positively Radiant",
        Eaton: "Gloomy",
        Archi: "Somewhat Calm",
        Mahoney: "Fair",
        Business: "Lousy",
        LC: "Stormy",
        Comm: "Promising"
    };
    const responseData = {
        "coord": {"lon": -80.2684, "lat": 25.7215},
        "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
        "base": "stations",
        "main": {"temp": 75.78, "feels_like": 76.1, "temp_min": 75, "temp_max": 75.78, "pressure": 1020, "humidity": 65},
        "visibility": 10000,
        "wind": {"speed": 17.4, "deg": 115},
        "clouds": {"all": 80},
        "dt": 1712674800,
        "sys": {"type": 2, "id": 4151871, "country": "US", "sunrise": 1712660602, "sunset": 1712706071},
        "timezone": -14400,
        "id": 803,
        "name": "Coral Gables",
        "cod": 200
    };
    const happinessText = "Your happiness outlook is: ";


    // Extract relevant weather information from the API response
    const locationName = responseData.name;
    const temperature = responseData.main.temp;
    const weatherDescription = responseData.weather[0].description;

    // Update the HTML content of the 'weather' div
    document.getElementById('weather').innerHTML = `
    <div id="weather-content">
        <img src="cloud_image.png" alt="Weather Icon">
        <p>${temperature}°F</p>
        <p>${locationName}</p>
        <p>${weatherDescription}</p>
    </div>



`;
    function openPopup(text) {
        popupText.innerHTML = `
            <p>Your happiness outlook is:</p>
            <p>${text}</p>
        `;
        popupContainer.style.display = 'block';
    }
    // function openPopup(text) {
    //     popupText.textContent = text;
    //     popupContainer.style.display = 'block';
    // }

    function changeToCircularGradient() {
        document.body.classList.add('circular-gradient');
    }

    function changeToLinearGradient() {
        document.body.classList.remove('circular-gradient');
    }

    // Function to close the pop-up
    function closePopup() {
        popupContainer.style.display = 'none';
    }

    const paths = document.querySelectorAll('.main');
    paths.forEach(path => {
        path.addEventListener('click', function() {
            const pathId = this.getAttribute('id');
            const message = pathMessages[pathId];
            openPopup(`${message}`);
            changeToCircularGradient();
        });
    });

    // Close pop-up when close button is clicked
    const closePopupButton = document.getElementById('closePopup');
    closePopupButton.addEventListener('click', function() {
        closePopup();
        changeToLinearGradient();
    });
});
