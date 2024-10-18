document.addEventListener('DOMContentLoaded', function() {
    // Dein bestehender Scroll-Code
    function scrollToSection(sectionId, offset) {
        var section = document.getElementById(sectionId);
        var sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;

        var duration = window.innerWidth <= 768 ? 2000 : 2000; // Beide Formate mit 2 Sekunden

        window.scrollTo({
            top: sectionPosition,
            behavior: "smooth"
        });
    }

    function scrollToNews() {
        scrollToSection("news", -140);
    }

    function scrollToFeatures() {
        scrollToSection("features", -1150);
    }

    function scrollToAbout() {
        scrollToSection("about", -2999);
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
    const closeBtn = document.getElementById('close-btn');
    const menu = document.getElementById('menu');

    // Dein Counter-Code
    let count = 0;
    let counterElement = document.getElementById("count");
    let hasStarted = false;

    function updateCounter() {
        if (count < 4237) {
            count++;
            counterElement.innerText = count;
            setTimeout(updateCounter, 50);
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
