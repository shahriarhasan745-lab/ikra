function checkPasscode() {
    const enteredCode = document.getElementById('passInput').value;
    const errorMsg = document.getElementById('errorMsg');
    
    if (enteredCode === "2010") {
        document.getElementById('passcodeScreen').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        initializeCanvasAnimations();
        // Sets background image of the first active slide immediately upon unlock
        updateBackgroundTheme(document.querySelector('.slide.active'));
    } else {
        errorMsg.style.display = 'block';
        const inputField = document.getElementById('passInput');
        inputField.style.borderColor = '#ff4d6d';
        setTimeout(() => { inputField.style.borderColor = 'rgba(255, 117, 143, 0.5)'; }, 600);
    }
}

function nextSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    const targetSlide = document.getElementById(`slide${slideNumber}`);
    if (targetSlide) {
        targetSlide.classList.add('active');
        updateBackgroundTheme(targetSlide); // Switch full-viewport background engine hook
    }
}

function updateBackgroundTheme(slideElement) {
    const themeBg = document.getElementById('themeBg');
    if (slideElement && slideElement.hasAttribute('data-bg')) {
        const imageUrl = slideElement.getAttribute('data-bg');
        themeBg.style.backgroundImage = `url('${imageUrl}')`;
    }
}

function initializeCanvasAnimations() {
    const heartsBg = document.getElementById('heartsBg');
    const butterflyContainer = document.getElementById('butterflyContainer');
    
    const heartIcons = ['❤️', '💖', '✨', '💕', '🤍'];
    const butterflyIcons = ['🦋', '🌸', '✨'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-node');
        heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 4 + 's';
        heart.style.fontSize = Math.random() * 12 + 16 + 'px';
        heartsBg.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 5500);
    }, 350);

    setInterval(() => {
        const butterfly = document.createElement('div');
        butterfly.classList.add('butterfly-node');
        butterfly.innerText = butterflyIcons[Math.floor(Math.random() * butterflyIcons.length)];
        butterfly.style.top = Math.random() * 50 + 30 + 'vh';
        butterfly.style.animationDuration = Math.random() * 3 + 5.5 + 's';
        butterflyContainer.appendChild(butterfly);
        setTimeout(() => { butterfly.remove(); }, 7500);
    }, 1200);
}
