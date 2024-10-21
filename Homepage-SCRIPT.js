document.addEventListener('DOMContentLoaded', function() {
    // Scroll zu "News" Abschnitt
    function scrollToNews() {
        var newsSection = document.getElementById("news");
        var offset = -140;  // Passe den Offset hier an
        var newsPosition = newsSection.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({
            top: newsPosition,
            behavior: "smooth"
        });
    }

    // Scroll zu "Features" Abschnitt
    function scrollToFeatures() {
        var featureSection = document.getElementById("features");
        var offset = -140;  // Angepasster Offset
        var featurePosition = featureSection.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({
            top: featurePosition,
            behavior: "smooth"
        });
    }

    // Scroll zu "About" Abschnitt
    function scrollToAbout() {
        var aboutSection = document.getElementById("about");
        var offset = -140;  // Angepasster Offset
        var aboutPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({
            top: aboutPosition,
            behavior: "smooth"
        });
    }

    // Event Listener für die Scroll-Buttons
    document.getElementById("scrollToNewsButton").addEventListener('click', scrollToNews);
    document.getElementById("scrollToFeaturesButton").addEventListener('click', scrollToFeatures);
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
    document.getElementById("scrollToTopBtn").addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

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
