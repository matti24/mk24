function scrollToSection(sectionId, offset) {
    var section = document.getElementById(sectionId);
    var sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;

    // Definiere die Dauer basierend auf der Fensterbreite
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
    scrollToSection("features", -1200);
}

function scrollToAbout() {
    scrollToSection("about", -2820);
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

hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    closeBtn.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    closeBtn.classList.remove('open');
});

const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        const parent = this.parentNode;

        // Entferne alle ausgewählten Sterne
        parent.querySelectorAll('.star').forEach(s => {
            s.classList.remove('selected');
            s.style.color = '#ccc'; // Setze die Farbe zurück
        });

        // Setze die neuen ausgewählten Sterne
        for (let i = 0; i < value; i++) {
            parent.children[i].classList.add('selected');
            parent.children[i].style.color = 'gold'; // Färbe die ausgewählten Sterne gold
        }

        console.log('Feature bewertet mit:', value, 'Stern(en)');
    });

    star.addEventListener('mouseover', function() {
        const value = this.getAttribute('data-value');
        const parent = this.parentNode;

        // Setze den Hover-Effekt von links nach rechts
        for (let i = 0; i < value; i++) {
            parent.children[i].style.color = 'gold';
        }
    });

    star.addEventListener('mouseout', function() {
        const parent = this.parentNode;

        // Entferne den Hover-Effekt bei Mouseout
        parent.querySelectorAll('.star').forEach(s => {
            if (!s.classList.contains('selected')) {
                s.style.color = '#ccc'; // Setze die Farbe zurück, wenn der Stern nicht ausgewählt ist
            }
        });
    });
});
