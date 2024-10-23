
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
        var offset = -1150;
        var featurePosition = featureSection.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: featurePosition,
            behavior: "smooth"
        });
    }

    function scrollToAbout() {
        var aboutSection = document.getElementById("about");
        var offset = -2999;
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

     function toggleMenu() {
            var navbar = document.getElementById('navbar');
            navbar.classList.toggle('open');
        }

            const hamburgerBtn = document.getElementById('hamburger-btn');
            const menu = document.getElementById('menu');

     



   document.addEventListener('DOMContentLoaded', function() {
    let count = 0;
    let counterElement = document.getElementById("count");
    let hasStarted = false;

    if (counterElement) {
        function updateCounter() {
            if (count < 2447) {
                count += 7;  // Zähle um 10 pro Schritt statt um 1
                counterElement.innerText = count > 2447 ? 2447 : count;  // Sicherstellen, dass er nicht über 4237 hinaus geht
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

