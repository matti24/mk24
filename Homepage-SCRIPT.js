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

      function startConfetti() {
       const confettiContainer = document.getElementById("confettiContainer");
       for (let i = 0; i < 50; i++) {
           const confetti = document.createElement("div");
           confetti.classList.add("confetti");
           confetti.style.left = `${Math.random() * 100}vw`;
           confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
           confetti.style.animationDelay = `${Math.random() * 2}s`;
           confettiContainer.appendChild(confetti);

           setTimeout(() => confetti.remove(), 3000);
          }
      }

       document.addEventListener("DOMContentLoaded", function() {
    // Funktion, die die Animation der Pixel-Figur startet
    function startPixelCharacterAnimation() {
        const character = document.getElementById("pixelCharacter");
        character.style.display = "block"; // Figur wird sichtbar
        character.classList.add("walk");   // Startet die Animation
        moveCharacter(); // Startet die Bewegung
    }

    function moveCharacter(moveCount = 5) {
        const character = document.getElementById("pixelCharacter");
        let position = 0; // Startposition
        const moveDistance = 100; // Distanz, die die Figur bewegt

        function animate() {
            if (position < moveCount * moveDistance) {
                position += moveDistance; // Position um die Distanz erhöhen
                character.style.transform = `translateX(${position}px)`; // Figur bewegen
                requestAnimationFrame(animate); // Nächsten Frame anfordern
            } else {
                // Figur zurücksetzen und wiederholen
                position = 0; // Zurücksetzen der Position
                character.style.transform = `translateX(${position}px)`; // Figur zurücksetzen

                // Hier können wir die Animation erneut starten, wenn gewünscht
                if (moveCount > 1) {
                    moveCharacter(moveCount - 1); // Rekursiv die Animation wiederholen
                } else {
                    character.classList.remove("walk"); // Animation stoppen
                }
            }
        }

        animate(); // Animation starten
    }

    // Klick-Event für das Easter Egg-Bild, das die Animation startet
    const easterEggImage = document.getElementById("easterEggImage");
    if (easterEggImage) {
        easterEggImage.onclick = startPixelCharacterAnimation;
    }
});







   document.addEventListener('DOMContentLoaded', function() {
    let count = 0;
    let counterElement = document.getElementById("count");
    let hasStarted = false;


    if (counterElement) {
        function updateCounter() {
            if (count < 2524) {
                count += 7;  // Zähle um 10 pro Schritt statt um 1
                counterElement.innerText = count > 2524 ? 2524 : count;  // Sicherstellen, dass er nicht über 4237 hinaus geht
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
