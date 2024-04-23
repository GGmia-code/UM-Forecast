document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    const popupText = document.getElementById('popupText');
    const mapContainer = document.querySelector('.map-container');
    
    const pathMessages = {
        Rainbow: [ "Sunny Spells",
        "Marvelous",
        "Sunny and Settled",
        "Splended",
        "Positively Radiant",
        "Crystal Clear",
        "Promising",
        "Cheerful atmosphere today",
        "Bursting with energy",
        "Bright and uplifting",
        "Full of joy",
        "Radiating positivity"],

        CS: ["Very Very Frightening",
        "Rather Depressing",
        "Grey. Just Grey.",
        "Dreadfully Dull",
        "Gloomy",
        "Rather Cloudy",
        "Stormy",
        "Lousy",
        "Intense workload today",
        "Feeling overwhelmed",
        "Cloudy with a chance of assignments",
        "Heavy workload ahead",
        "Stressful day"],

        Lake: [ "Sunny Spells",
        "Refreshing breeze",
        "Tranquil atmosphere",
        "Serene and calm",
        "Beautiful weather by the lake",
        "Invigorating",
        "Peaceful surroundings",
        "Enjoying the waterfront",
        "Relaxing vibes",
        "Perfect day for a picnic",
        "Nature's tranquility"],
        
        CAS: ["Slightly Hazy",
        "Gentle breeze",
        "Mild weather",
        "Comfortable conditions",
        "Soothing atmosphere",
        "Light mist in the air",
        "Pleasant and mild",
        "Clear skies ahead",
        "Refreshing air",
        "Crisp and clean"],
        
        Foote: ["Calm and serene",
        "Quiet and peaceful",
        "Relaxing ambiance",
        "Undisturbed surroundings",
        "Quiet contemplation",
        "Tranquil environment",
        "Soothing solitude",
        "Serenity now",
        "Peaceful oasis",
        "Calm and collected"],
        
        Arboretum: ["Marvelous",
        "Sunny and Settled",
        "Pleasant stroll",
        "Lush greenery",
        "Nature's beauty",
        "Botanical bliss",
        "Scenic views",
        "Enjoying the gardens",
        "Relaxing walk",
        "Fresh air and sunshine",
        "Tranquil escape",
        "Immersed in nature",
        "Breath of the wild",
        "Serene surroundings",
        "Flourishing foliage"],

        PoliSci: ["Sunny and Settled",
        "Stable conditions",
        "Balanced atmosphere",
        "Political climate stable",
        "Moderate weather",
        "Steady outlook",
        "Comfortably warm",
        "Predictable conditions",
        "Feeling stable",
        "In the political calm",
        "Settled and serene",
        "Consistent temperatures",
        "Neutral weather",
        "Moderate political climate",
        "Smooth sailing"],

        Physics: [
        "Rather Depressing",
        "Dull and dreary",
        "Heavy atmosphere",
        "Gloomy outlook",
        "Dim conditions",
        "Overcast skies",
        "Lackluster weather",
        "Low energy",
        "Dreary and dull",
        "Feeling uninspired",
        "Underwhelming conditions",
        "Dismal weather",
        "Drab atmosphere",
        "In a slump",
        "Clouded thoughts"
        ],

        Cox: [
        "Grey. Just Grey.",
        "Bland and bleak",
        "Monotonous weather",
        "Neutral tones",
        "Dull and lifeless",
        "Lacking vibrancy",
        "Gray skies overhead",
        "Uninspiring conditions",
        "Boring weather",
        "Flat and unexciting",
        "Neutral outlook",
        "Feeling indifferent",
        "Gray and gloomy",
        "Colorless atmosphere",
        "Dreary day"
        ],

        Richter: [
        "Dreadfully Dull",
        "Boring and bland",
        "Uninteresting weather",
        "Lack of excitement",
        "Predictable conditions",
        "Routine atmosphere",
        "Monotonous outlook",
        "Lackluster day",
        "Tedious weather",
        "Repetitive patterns",
        "Routine and mundane",
        "Uninspiring climate",
        "Tiresome conditions",
        "Dull and drab",
        "Lacking variety"
        ],

        Law: [
            "Overcast",
            "Cloudy skies",
            "Gray and gloomy",
            "Dim conditions",
            "Hazy atmosphere",
            "Covered in clouds",
            "Lack of sunshine",
            "Low visibility",
            "Overcast outlook",
            "Heavy clouds",
            "Dreary weather",
            "Gloom and doom",
            "Clouded judgment",
            "Diminished sunlight",
            "In the shadow"
        ],

        Frost: ["Mostly Calm",
        "Tranquil atmosphere",
        "Quiet and serene",
        "Mild conditions",
        "Gentle breeze",
        "Calm and collected",
        "Stable weather",
        "Peaceful surroundings",
        "Relaxing environment",
        "Moderate temperatures",
        "Balmy weather",
        "Soft and gentle",
        "Breath of fresh air",
        "Easygoing atmosphere",
        "Mild climate"],

        Hecht: ["Splendid",
        "Exquisite weather",
        "Beautiful day",
        "Gorgeous conditions",
        "Lovely weather",
        "Wonderful atmosphere",
        "Delightful climate",
        "Fantastic day",
        "Fabulous weather",
        "Amazing conditions",
        "Stunning outlook",
        "Incredible atmosphere",
        "Breathtaking weather",
        "Superb conditions",
        "Majestic day"],
        Gym: [
            "Positively Radiant",
            "Energetic atmosphere",
            "High spirits",
            "Bright and lively",
            "Active and vibrant",
            "Dynamic conditions",
            "Full of energy",
            "Buoyant mood",
            "Bursting with vitality",
            "Optimistic outlook",
            "Invigorating climate",
            "Radiating positivity",
            "Feeling alive",
            "Enthusiastic vibe",
            "Vivacious atmosphere"
        ],
        UV: [
            "Bright and sunny",
            "Radiant weather",
            "Warm and inviting",
            "Glowing atmosphere",
            "Sun-kissed conditions",
            "Sunshine all around",
            "Warmth in the air",
            "Golden rays",
            "Basking in the sun",
            "Sunny disposition"
        ],
        Arts: [
            "Creative vibes",
            "Artistic atmosphere",
            "Expressive weather",
            "Inspiring conditions",
            "Colorful outlook",
            "Imaginative ambiance",
            "Art in the air",
            "Vibrant energy",
            "Creative muse",
            "Inspirational climate"
        ],
        Flipse:["Mindful weather",
        "Calm and collected",
        "Peaceful atmosphere",
        "Tranquil conditions",
        "Soothing climate",
        "Relaxed state of mind",
        "Mental clarity",
        "Serene surroundings",
        "Balanced outlook",
        "Stress-free environment"],
        
        Arch: [
            "Somewhat Calm",
            "Moderate weather",
            "Steady conditions",
            "Balanced atmosphere",
            "Gentle breeze",
            "Relaxed ambiance",
            "Tranquil environment",
            "Easygoing atmosphere",
            "Mild climate",
            "Stable weather"
        ],
        Eaton: [
            "Gloomy",
            "Overcast skies",
            "Gray and dreary",
            "Dull conditions",
            "Dark and cloudy",
            "Shadowed atmosphere",
            "Lack of sunlight",
            "Dreary outlook",
            "Dim atmosphere",
            "Chilly weather"
        ],
        Dooly: [
            "Gloomy",
            "Overcast skies",
            "Gray and dreary",
            "Dull conditions",
            "Dark and cloudy",
            "Shadowed atmosphere",
            "Lack of sunlight",
            "Dreary outlook",
            "Dim atmosphere",
            "Chilly weather"
        ],
        Nursing: [
            "Rather Cloudy",
            "Partly cloudy",
            "Cloudy skies",
            "Overcast conditions",
            "Gray and misty",
            "Hazy outlook",
            "Obscured visibility",
            "Muted atmosphere",
            "Faint sunshine",
            "Huddled clouds"
        ],
        Allen_Hall: [
            "Cold as ice",
            "Chilled to the bone",
            "Frosty conditions",
            "Freezing classrooms",
            "Polar temperatures inside",
            "Arctic air conditioning",
            "Icy lecture halls",
            "Shivering through lectures",
            "Chilly academic environment",
            "Winter wonderland indoors"
        ],
        Comm: [
            "Promising",
            "Hopeful weather",
            "Optimistic outlook",
            "Encouraging conditions",
            "Bright future ahead",
            "Positive vibes",
            "Assured climate",
            "Potential in the air",
            "Hope in the forecast",
            "Promising signs"
        ],
        LC: [
            "Stormy",
            "Thunderous skies",
            "Dark and stormy",
            "Torrential downpour",
            "Raging tempest",
            "Violent weather",
            "Turbulent atmosphere",
            "Heavy rain",
            "Tempestuous conditions",
            "Thunder and lightning"
        ],
        Merrick: [
            "Empowering environment",
            "Inclusive atmosphere",
            "Celebrating diversity",
            "Supportive community",
            "Inspiring gender studies",
            "Advocacy and awareness",
            "Championing equality",
            "Fostering understanding",
            "Empathy and education",
            "Promoting social justice"
        ],
        Herbert: [
            "Lousy",
            "Unfortunate weather",
            "Grim conditions",
            "Dismal outlook",
            "Unfavorable atmosphere",
            "Poor weather",
            "Bad mood weather",
            "Miserable climate",
            "Disheartening forecast",
            "Gloomy disposition"
        ],
        Mahoney: [
            "Fair",
            "Decent weather",
            "Acceptable conditions",
            "Reasonable outlook",
            "Fair weather",
            "Average atmosphere",
            "Tolerable climate",
            "Moderate conditions",
            "Satisfactory forecast",
            "Adequate climate"
        ]
    };
    fetch('weatherData.json')
        .then(response => response.json())
        .then(data => {
            // Assuming you want to use the first forecast in the list
            const firstForecast = data.list[0];

            // Extract relevant weather information from the first forecast
            const locationName = data.city.name; // Assuming 'city.name' is the location name in the JSON
            const temperature = firstForecast.main.temp;
            const temperatureFahrenheit = (temperature - 273.15) * 9/5 + 32;
            const weatherDescription = firstForecast.weather[0].description;

            // Update the HTML content of the 'weather' div
            document.getElementById('weather').innerHTML = `
                <div id="weather-content">
                    <img src="cloud_image.png" alt="Weather Icon">
                    <p>${temperatureFahrenheit.toFixed(2)}°F</p>
                    <p>${locationName}</p>
                    <p>${weatherDescription}</p>
                </div>`;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // Function to handle popups, paths, etc.
    function openPopup(text) {
        const randomIndex = Math.floor(Math.random() * text.length);
        const randomMessage = text[randomIndex];
        popupText.innerHTML = `
            <p>Your happiness outlook is:</p>
            <p>${randomMessage}</p>
        `;
        popupContainer.style.display = 'block';
    }

    function changeToCircularGradient() {
        document.body.classList.add('circular-gradient');
    }

    function changeToLinearGradient() {
        document.body.classList.remove('circular-gradient');
    }

    function closePopup() {
        popupContainer.style.display = 'none';
    }

    const paths = document.querySelectorAll('.main');
    paths.forEach(path => {
        path.addEventListener('click', function() {
            const pathId = this.getAttribute('id');
            const message = pathMessages[pathId];
            openPopup(message);
            changeToCircularGradient();
        });
    });

    const closePopupButton = document.getElementById('closePopup');
    closePopupButton.addEventListener('click', function() {
        closePopup();
        changeToLinearGradient();
    });
});