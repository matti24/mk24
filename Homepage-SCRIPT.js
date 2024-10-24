
    // Easter Egg Funktion
    document.getElementById("easterEggImage").addEventListener("click", function() {
        alert("Du hast das Easter Egg gefunden! 🥚🎉");
    });

    // Scroll-Funktion für die "News"-Sektion
    function scrollToNews() {
        var newsSection = document.getElementById("news");
        var offset = -140;
        var newsPosition = newsSection.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: newsPosition,
            behavior: "smooth"
        });
    }

    // Scroll-Funktion für die "Features"-Sektion
    function scrollToFeatures() {
        var featureSection = document.getElementById("features");
        var offset = -1150;
        var featurePosition = featureSection.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: featurePosition,
            behavior: "smooth"
        });
    }

    // Scroll-Funktion für die "About"-Sektion
    function scrollToAbout() {
        var aboutSection = document.getElementById("about");
        var offset = -2999;
        var aboutPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: aboutPosition,
            behavior: "smooth"
        });
    }

    // Scroll-to-Top Button Funktion
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

    // Menü-Toggle Funktion
    function toggleMenu() {
        var navbar = document.getElementById('navbar');
        navbar.classList.toggle('open');
    }

    // Zähler-Funktion
    document.addEventListener('DOMContentLoaded', function() {
        let count = 0;
        let counterElement = document.getElementById("count");
        let hasStarted = false;

        if (counterElement) {
            function updateCounter() {
                if (count < 2511) {
                    count += 7;  // Zähle um 7 pro Schritt
                    counterElement.innerText = count > 2511 ? 2511 : count;  // Sicherstellen, dass er nicht über 2511 hinaus geht
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

            // Beobachte das `count`-Element
            observer.observe(counterElement);
        } else {
            console.error("Element mit der ID 'count' nicht gefunden.");
        }
    });
