document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.querySelector('.map-container');

    function changeToCircularGradient() {
        document.body.classList.add('circular-gradient');
    }
    function changeToLinearGradient() {
        document.body.classList.remove('circular-gradient');
    }

    const paths = document.querySelectorAll('.map-path');
    paths.forEach(path => {
        path.addEventListener('click', function() {
            const pathId = this.getAttribute('id');
            const message = pathMessages[pathId];
            openPopup(message);
            changeToCircularGradient();
        });
    });
});