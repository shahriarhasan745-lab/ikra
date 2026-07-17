// Function to check passcode entry
function checkPasscode() {
    const enteredCode = document.getElementById('passInput').value;
    const errorMsg = document.getElementById('errorMsg');
    
    if (enteredCode === "2010") {
        document.getElementById('passcodeScreen').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        initializeCanvasAnimations(); // Start love & butterflies background shower
    } else {
        errorMsg.style.display = 'block';
        const inputField = document.getElementById('passInput');
        inputField.style.borderColor = '#ff4d6d';
        setTimeout(() => { inputField.style.borderColor = '#ff758f'; }, 600);
    }
}

// Router for Slide switching
function nextSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    const targetSlide = document.getElementById(`slide${slideNumber}`);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }
}

// Procedural Canvas Animation Engine
function initializeCanvasAnimations() {
    const heartsBg = document.getElementById('heartsBg');
    const butterflyContainer = document.getElementById('butterflyContainer');
    
    const heartIcons = ['❤️', '💖', '✨', '💕'];
    const butterflyIcons = ['🦋', '🌸'];

    // Loop 1: Love Hearts Flowing Layer
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-node');
        heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3.5 + 's';
        heart.style.fontSize = Math.random() * 10 + 16 + 'px';
        heartsBg.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 5000);
    }, 400);

    // Loop 2: Aesthetic Flying Butterflies Layer
    setInterval(() => {
        const butterfly = document.createElement('div');
        butterfly.classList.add('butterfly-node');
        butterfly.innerText = butterflyIcons[Math.floor(Math.random() * butterflyIcons.length)];
        butterfly.style.top = Math.random() * 40 + 40 + 'vh'; // Spawn points
        butterfly.style.animationDuration = Math.random() * 3 + 5 + 's';
        butterflyContainer.appendChild(butterfly);
        setTimeout(() => { butterfly.remove(); }, 7000);
    }, 1500);
}
