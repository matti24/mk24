document.addEventListener('DOMContentLoaded', function() {
    // Event Listener für News
    document.getElementById("scrollToNewsButton").addEventListener('click', scrollToNews);

    // Event Listener für Features
    document.getElementById("scrollToFeaturesButton").addEventListener('click', scrollToFeatures);

    // Event Listener für About
    document.getElementById("scrollToAboutButton").addEventListener('click', scrollToAbout);

    // Scroll to top button anzeigen
    window.onscroll = function() {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    };

    // Event Listener für den "Scroll to Top"-Button
    document.getElementById("scrollToTopBtn").addEventListener('click', scrollToTop);

    // Dein Counter-Code
    let count = 0;
    let counterElement = document.getElementById("count");
    let hasStarted = false;

    function updateCounter() {
        if (count < 4237) {
            count += 10;  // Zähle um 10 pro Schritt statt um 1
            counterElement.innerText = count > 4237 ? 4237 : count;  // Sicherstellen, dass er nicht über 4237 hinaus geht
            setTimeout(updateCounter, 5);
        }
    }

    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasStarted) {
                hasStarted = true;
                updateCounter();
            }
        });
    });

    observer.observe(counterElement);
});
