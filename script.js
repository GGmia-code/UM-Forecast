document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    const popupText = document.getElementById('popupText');
    const mapContainer = document.querySelector('.map-container');

    const pathMessages = {
        Richter: "Dreadfully Dull",
        Arboretum: "Marvelous",
        PoliSci: "Sunny and Settled",
        Cox: " ",
        CS: " ",
        Law: " ",
        Richter: " ",
        ArtsandSci: " ",
        Physics: " ",
        Dooly: " ",
        Nursing: " ",
        Frost: " ",
        Lake: " ",
        Stanford: " ",
        wellness: " ",
        Eaton: " ",
        Archi: " ",
        Mahoney: " ",
        Business: " ",
        LC: " ",
        Comm: " "
    };
    function openPopup(text) {
        popupText.textContent = text;
        popupContainer.style.display = 'block';
    }

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
            openPopup(message);
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