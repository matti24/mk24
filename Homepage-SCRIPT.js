
    function scrollToNews() {
        var newsSection = document.getElementById("news");
        var offset = -140;
        var newsPosition = newsSection.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: newsPosition,
            behavior: "smooth"
        });
    }

    function scrollToFeatures() {
        var featureSection = document.getElementById("features");
        var offset = -140;
        var featurePosition = featureSection.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: featurePosition,
            behavior: "smooth"
        });
    }

    function scrollToAbout() {
        var aboutSection = document.getElementById("about");
        var offset = -140;
        var aboutPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: aboutPosition,
            behavior: "smooth"
        });
    }

        window.onscroll = function() {
            var scrollToTopBtn = document.getElementById("scrollToTopBtn");
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        };

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

     document.addEventListener('DOMContentLoaded', function() {
         function toggleMenu() {
        var navbar = document.getElementById('navbar');
        navbar.classList.toggle('open');
    }

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const menu = document.getElementById('menu');

    // Überprüfe, ob die Elemente vorhanden sind, bevor Event Listener hinzugefügt werden
    if (hamburgerBtn && closeBtn && menu) {
        hamburgerBtn.addEventListener('click', () => {
            menu.classList.toggle('open');
            closeBtn.classList.toggle('open');
        });
    } else {
        console.error('Eines der Elemente (hamburgerBtn, closeBtn, menu) wurde nicht gefunden.');
    }
});


    // Dein Counter-Code
    let count = 0;
    let counterElement = document.getElementById("count");
    let hasStarted = false;

    function updateCounter() {
        if (count < 4237) {
            count += 10;  // Zähle um 5 pro Schritt statt um 1
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
