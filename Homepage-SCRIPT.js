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
            if (count < 2844) {
                count += 7;  // Zähle um 10 pro Schritt statt um 1
                counterElement.innerText = count > 2844 ? 2844 : count;  // Sicherstellen, dass er nicht über 4237 hinaus geht
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

// Globale Variablen
let gameContainer, gameCanvas, ctx, gameStartButton, gameOverText, scoreElement;
let dino, obstacles, isGameOver, score;

// Initialisierung des Spiels
function initGame() {
    gameContainer = document.getElementById("gameContainer");
    gameCanvas = document.getElementById("gameCanvas");
    ctx = gameCanvas.getContext("2d");
    gameStartButton = document.getElementById("gameStartButton");
    gameOverText = document.getElementById("gameOverText");
    scoreElement = document.getElementById("score");

    dino = { x: 50, y: 150, width: 20, height: 20, velocityY: 0, jumping: false };
    obstacles = [];
    isGameOver = false;
    score = 0;

    console.log("Spiel initialisiert.");
}

// Spiel starten
function startGame() {
    gameStartButton.style.display = "none";
    gameOverText.style.display = "none";
    score = 0;
    gameContainer.style.display = "block";
    dino.y = 150;
    dino.velocityY = 0;
    dino.jumping = false;
    obstacles = [];
    isGameOver = false;

    console.log("Spiel gestartet!");
    requestAnimationFrame(updateGame);
}

// Spiel-Update
function updateGame() {
    if (isGameOver) {
        console.log("Game Over!");
        gameOverText.style.display = "block";
        scoreElement.textContent = score;
        gameStartButton.style.display = "block";
        return;
    }

    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    // Dino zeichnen
    ctx.fillStyle = "green";
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
    dino.velocityY += 1.5;
    dino.y += dino.velocityY;
    if (dino.y > 150) {
        dino.y = 150;
        dino.jumping = false;
    }

    // Hindernisse generieren
    if (Math.random() < 0.02) {
        obstacles.push({ x: gameCanvas.width, y: 160, width: 20, height: 20 });
    }

    ctx.fillStyle = "red";
    obstacles = obstacles.filter(obstacle => {
        obstacle.x -= 5;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        // Kollision prüfen
        if (
            dino.x < obstacle.x + obstacle.width &&
            dino.x + dino.width > obstacle.x &&
            dino.y < obstacle.y + obstacle.height &&
            dino.y + dino.height > obstacle.y
        ) {
            isGameOver = true;
        }

        return obstacle.x > -20;
    });

    // Punkte aktualisieren
    score++;
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText(`Punkte: ${score}`, 10, 20);

    requestAnimationFrame(updateGame);
}

// Sprung-Funktion
function jump() {
    if (!dino.jumping) {
        dino.jumping = true;
        dino.velocityY = -20;
    }
}

// Tastendrücke direkt im HTML verarbeiten
document.onkeydown = function (e) {
    if (e.code === "Space") {
        jump();
    }
};

// Initialisiere das Spiel beim Laden der Seite
initGame();




window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500); // Ladebildschirm nach 0.5 Sekunden vollständig entfernen
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = `${day}, ${date}. ${month} ${year}`;
}

// Aktualisiere die Uhr jede Sekunde
setInterval(updateClock, 1000);
updateClock();

