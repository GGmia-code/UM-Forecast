document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    const popupText = document.getElementById('popupText');
    const mapContainer = document.querySelector('.map-container');
    const svgImage = mapContainer.querySelector("svg");

    
    const pathMessages = {
        Rainbow: {
            mood: "good",
            feedbacks: ["Sunny Spells", "Marvelous", "Sunny and Settled", "Splendid", "Positively Radiant", "Crystal Clear", "Promising", "Cheerful atmosphere today", "Bursting with energy", "Bright and uplifting", "Full of joy", "Radiating positivity"]
        },
        CS: {
            mood: "bad",
            feedbacks: ["Very Very Frightening", "Rather Depressing", "Grey. Just Grey.", "Dreadfully Dull", "Gloomy", "Rather Cloudy", "Stormy", "Lousy", "Intense workload today", "Feeling overwhelmed", "Cloudy with a chance of assignments", "Heavy workload ahead", "Stressful day"]
        },
        Lake: {
            mood: "good",
            feedbacks: ["Sunny Spells", "Refreshing breeze", "Tranquil atmosphere", "Serene and calm", "Beautiful weather by the lake", "Invigorating", "Peaceful surroundings", "Enjoying the waterfront", "Relaxing vibes", "Perfect day for a picnic", "Nature's tranquility"]
        },
        CAS: {
            mood: "good",
            feedbacks: ["Slightly Hazy",
            "Gentle breeze",
            "Mild weather",
            "Comfortable conditions",
            "Soothing atmosphere",
            "Light mist in the air",
            "Pleasant and mild",
            "Clear skies ahead",
            "Refreshing air",
            "Crisp and clean"]
        },
        Foote: {
            mood: "good",
            feedbacks: ["Calm and serene",
            "Quiet and peaceful",
            "Relaxing ambiance",
            "Undisturbed surroundings",
            "Quiet contemplation",
            "Tranquil environment",
            "Soothing solitude",
            "Serenity now",
            "Peaceful oasis",
            "Calm and collected"]
        },
        Arboretum: {
            mood: "good",
            feedbacks:["Marvelous",
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
            "Flourishing foliage"] 
        },
        PoliSci: {
            mood: "good",
            feedbacks: ["Sunny and Settled",
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
            "Smooth sailing"]
        },
        Physics: {
            mood: "bad",
            feedbacks: [
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
                ]
        },
        Cox: {
            mood: "bad",
            feedbacks: [
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
                ]
        },
        Richter: {
            mood: "bad",
            feedbacks: [
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
                ]
        },
        Law: {
            mood: "bad",
            feedbacks: [
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
            ]
        },
        Frost: {
            mood: "neutral",
            feedbacks: ["Mostly Calm",
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
            "Mild climate"]    
        },
        Hecht: {
            mood: "good",
            feedbacks: ["Splendid",
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
            "Majestic day"]
        },
        Gym: {
            mood: "good",
            feedbacks: [
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
            ]
        },
        UV: {
            mood: "good",
            feedbacks: [
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
            ]
        },
        Arts: {
            mood: "good",
            feedbacks: ["Creative vibes",
            "Artistic atmosphere",
            "Expressive weather",
            "Inspiring conditions",
            "Colorful outlook",
            "Imaginative ambiance",
            "Art in the air",
            "Vibrant energy",
            "Creative muse",
            "Inspirational climate"]
        },
        Flipse: {
            mood: "good",
            feedbacks: ["Mindful weather",
            "Calm and collected",
            "Peaceful atmosphere",
            "Tranquil conditions",
            "Soothing climate",
            "Relaxed state of mind",
            "Mental clarity",
            "Serene surroundings",
            "Balanced outlook",
            "Stress-free environment"]
        },
        Arch: {
            mood: "neutral",
            feedbacks: [
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
            ]
        },
        Eaton: {
            mood: "bad",
            feedbacks: [
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
            ]
        },
        Dooly: {
            mood: "bad",
            feedbacks: [
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
            ]
        },
        Nursing: {
            mood: "bad",
            feedbacks: [
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
            ]
        },
        Allen_Hall: {
            mood: "bad",
            feedbacks: [
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
            ]
        },
        Comm: {
            mood: "good",
            feedbacks:[
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
            ] 
        },
        LC: {
            mood: "bad",
            feedbacks: [
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
            ]
        },

        Merrick: {
            mood: "good",
            feedbacks: [
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
            ]
        },

        Herbet: {
            mood: "bad",
            feedbacks:[
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
            ] 
        },

        Mahoney: {
            mood: "neutral",
            feedbacks: [
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
        }
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
        // hover text for all paths:

        const archText = document.getElementById('archText');
        const archPath = document.getElementById('Arch');
        
        archPath.addEventListener('mouseenter', function() {
            archText.style.display = 'block';
        });
        
        archPath.addEventListener('mouseleave', function() {
            archText.style.display = 'none';
        });

        const lakeText = document.getElementById('lakeText');
        const lakePath = document.getElementById('Lake');
        
        lakePath.addEventListener('mouseenter', function() {
            lakeText.style.display = 'block';
        });
        
        lakePath.addEventListener('mouseleave', function() {
            lakeText.style.display = 'none';
        });
        const flipseText = document.getElementById('flipseText');
        const flipsePath = document.getElementById('Flipse');
        
        flipsePath.addEventListener('mouseenter', function() {
            flipseText.style.display = 'block';
        });
        
        flipsePath.addEventListener('mouseleave', function() {
            flipseText.style.display = 'none';
        });
        
        const ArtsText = document.getElementById('ArtsText');
        const ArtsPath = document.getElementById('Arts');
        
        ArtsPath.addEventListener('mouseenter', function() {
            ArtsText.style.display = 'block';
        });
        
        ArtsPath.addEventListener('mouseleave', function() {
            ArtsText.style.display = 'none';
        });

        const GymText = document.getElementById('GymText');
        const GymPath = document.getElementById('Gym');
        
        GymPath.addEventListener('mouseenter', function() {
            GymText.style.display = 'block';
        });
        
        GymPath.addEventListener('mouseleave', function() {
            GymText.style.display = 'none';
        });
        
        const ArboText = document.getElementById('ArboText');
        const ArboPath = document.getElementById('Arboretum');
        
        ArboPath.addEventListener('mouseenter', function() {
            ArboText.style.display = 'block';
        });
        
        ArboPath.addEventListener('mouseleave', function() {
            ArboText.style.display = 'none';
        });
        
        const FooteText = document.getElementById('FooteText');
        const FootePath = document.getElementById('Foote');
        
        FootePath.addEventListener('mouseenter', function() {
            FooteText.style.display = 'block';
        });
        
        FootePath.addEventListener('mouseleave', function() {
            FooteText.style.display = 'none';
        });

        
        const MahoneyText = document.getElementById('MahoneyText');
        const MahoneyPath = document.getElementById('Mahoney');
        
        MahoneyPath.addEventListener('mouseenter', function() {
            MahoneyText.style.display = 'block';
        });
        
        MahoneyPath.addEventListener('mouseleave', function() {
            MahoneyText.style.display = 'none';
        });

        const UVText = document.getElementById('UVText');
        const UVPath = document.getElementById('UV');
        
        UVPath.addEventListener('mouseenter', function() {
            UVText.style.display = 'block';
        });
        
        UVPath.addEventListener('mouseleave', function() {
            UVText.style.display = 'none';
        });

        const HechtText = document.getElementById('HechtText');
        const HechtPath = document.getElementById('Hecht');
        
        HechtPath.addEventListener('mouseenter', function() {
            HechtText.style.display = 'block';
        });
        
        HechtPath.addEventListener('mouseleave', function() {
            HechtText.style.display = 'none';
        });

        const FrostText = document.getElementById('FrostText');
        const FrostPath = document.getElementById('Frost');
        
        FrostPath.addEventListener('mouseenter', function() {
            FrostText.style.display = 'block';
        });
        
        FrostPath.addEventListener('mouseleave', function() {
            FrostText.style.display = 'none';
        });

        
        const LawText = document.getElementById('LawText');
        const LawPath = document.getElementById('Law');
        
        LawPath.addEventListener('mouseenter', function() {
            LawText.style.display = 'block';
        });
        
        LawPath.addEventListener('mouseleave', function() {
            LawText.style.display = 'none';
        });

        const RichterText = document.getElementById('RichterText');
        const RichterPath = document.getElementById('Richter');
        
        RichterPath.addEventListener('mouseenter', function() {
            RichterText.style.display = 'block';
        });
        
        RichterPath.addEventListener('mouseleave', function() {
            RichterText.style.display = 'none';
        });
        const CASText = document.getElementById('CASText');
        const CASPath = document.getElementById('CAS');
        
        CASPath.addEventListener('mouseenter', function() {
            CASText.style.display = 'block';
        });
        
        CASPath.addEventListener('mouseleave', function() {
            CASText.style.display = 'none';
        });

        const CSText = document.getElementById('CSText');
        const CSPath = document.getElementById('CS');
        
        CSPath.addEventListener('mouseenter', function() {
            CSText.style.display = 'block';
        });
        
        CSPath.addEventListener('mouseleave', function() {
            CSText.style.display = 'none';
        });

        const CoxText = document.getElementById('CoxText');
        const CoxPath = document.getElementById('Cox');
        
        CoxPath.addEventListener('mouseenter', function() {
            CoxText.style.display = 'block';
        });
        
        CoxPath.addEventListener('mouseleave', function() {
            CoxText.style.display = 'none';
        });
        
        const DoolyText = document.getElementById('DoolyText');
        const DoolyPath = document.getElementById('Dooly');
        
        DoolyPath.addEventListener('mouseenter', function() {
            DoolyText.style.display = 'block';
        });
        
        DoolyPath.addEventListener('mouseleave', function() {
            DoolyText.style.display = 'none';
        });

        const PhysicsText = document.getElementById('PhysicsText');
        const PhysicsPath = document.getElementById('Physics');
        
        PhysicsPath.addEventListener('mouseenter', function() {
            PhysicsText.style.display = 'block';
        });
        
        PhysicsPath.addEventListener('mouseleave', function() {
            PhysicsText.style.display = 'none';
        });

        const PoliSciText = document.getElementById('PoliSciText');
        const PoliSciPath = document.getElementById('PoliSci');
        
        PoliSciPath.addEventListener('mouseenter', function() {
            PoliSciText.style.display = 'block';
        });
        
        PoliSciPath.addEventListener('mouseleave', function() {
            PoliSciText.style.display = 'none';
        });

        const NursingText = document.getElementById('NursingText');
        const NursingPath = document.getElementById('Nursing');
        
        NursingPath.addEventListener('mouseenter', function() {
            NursingText.style.display = 'block';
        });
        
        NursingPath.addEventListener('mouseleave', function() {
            NursingText.style.display = 'none';
        });

        const AllenText = document.getElementById('AllenText');
        const AllenPath = document.getElementById('Allen');
        
        AllenPath.addEventListener('mouseenter', function() {
            AllenText.style.display = 'block';
        });
        
        AllenPath.addEventListener('mouseleave', function() {
            AllenText.style.display = 'none';
        });

        const CommText = document.getElementById('CommText');
        const CommPath = document.getElementById('Comm');
        
        CommPath.addEventListener('mouseenter', function() {
            CommText.style.display = 'block';
        });
        
        CommPath.addEventListener('mouseleave', function() {
            CommText.style.display = 'none';
        });

        const LCText = document.getElementById('LCText');
        const LCPath = document.getElementById('LC');
        
        LCPath.addEventListener('mouseenter', function() {
            LCText.style.display = 'block';
        });
        
        LCPath.addEventListener('mouseleave', function() {
            LCText.style.display = 'none';
        });

        const MerrickText = document.getElementById('MerrickText');
        const MerrickPath = document.getElementById('Merrick');
        
        MerrickPath.addEventListener('mouseenter', function() {
            MerrickText.style.display = 'block';
        });
        
        MerrickPath.addEventListener('mouseleave', function() {
            MerrickText.style.display = 'none';
        });

        const HerbertText = document.getElementById('HerbertText');
        const HerbertPath = document.getElementById('Herbert');
        
        HerbertPath.addEventListener('mouseenter', function() {
            HerbertText.style.display = 'block';
        });
        
        HerbertPath.addEventListener('mouseleave', function() {
            HerbertText.style.display = 'none';
        });
        const EatonText = document.getElementById('EatonText');
        const EatonPath = document.getElementById('Eaton');
        
        EatonPath.addEventListener('mouseenter', function() {
            EatonText.style.display = 'block';
        });
        
        EatonPath.addEventListener('mouseleave', function() {
            EatonText.style.display = 'none';
        });









        // blurring map
        svgImage.addEventListener("click", function() {
            svgImage.classList.add("blur");
            popupContainer.style.display = "block";
        });
        
        // Close pop-up
        popupContainer.addEventListener("click", function() {
            svgImage.classList.remove("blur");
            popupContainer.style.display = "none";
        });

    // Function to change background gradient based on mood
    function changeBackgroundGradient(mood) {
        switch (mood) {
            case "bad":
                document.body.style.background = "radial-gradient(circle, #fff, #a4c6b8, #5e435d)";
                break;
            case "good":
                document.body.style.background = "radial-gradient(circle, #58efec, #e85c90, #fcc9ba)";
                break;
            case "neutral":
                document.body.style.background = "radial-gradient(circle, #9bf8f4, #6f7bf7, #d3f3f1)";
                break;
            default:
                document.body.style.background = "radial-gradient(circle, #fff, #a4c6b8, #5e435d)";
        }
    }


    // Function to handle popups, paths, etc.
    function openPopup(feedbacks, mood) {
        const randomIndex = Math.floor(Math.random() * feedbacks.length);
        const randomMessage = feedbacks[randomIndex];
        popupText.innerHTML = `
            <p>Your happiness outlook is:</p>
            <p>${randomMessage}</p>
        `;
        popupContainer.style.display = 'block';
        changeBackgroundGradient(mood); // Change background gradient based on mood
    }

    function closePopup() {
        popupContainer.style.display = 'none';
        document.body.style.background = "linear-gradient(-45deg, #9f2db4, #eef1c3, #f47321)"; // Reset background gradient
    }

    const paths = document.querySelectorAll('.main');
    paths.forEach(path => {
        path.addEventListener('click', function() {
            const pathId = this.getAttribute('id');
            const { mood, feedbacks } = pathMessages[pathId];
            openPopup(feedbacks, mood);
        });
    });

    const closePopupButton = document.getElementById('closePopup');
    closePopupButton.addEventListener('click', function() {
        closePopup();
    });
});