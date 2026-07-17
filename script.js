// Function to check passcode
function checkPasscode() {
    const enteredCode = document.getElementById('passInput').value;
    const errorMsg = document.getElementById('errorMsg');
    
    // Check if passcode is exactly 2010
    if (enteredCode === "2010") {
        document.getElementById('passcodeScreen').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        createBackgroundHearts(); // Start heart shower animation
    } else {
        errorMsg.style.display = 'block';
        // Simple input shake effect on wrong code
        const inputField = document.getElementById('passInput');
        inputField.style.borderColor = '#d32f2f';
        setTimeout(() => { inputField.style.borderColor = '#ffccd5'; }, 500);
    }
}

// Function to handle slide switching
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

// Rich Background Animation: Creating falling heart shapes dynamically
function createBackgroundHearts() {
    const container = document.getElementById('heartsBg');
    const heartSymbols = ['❤️', '💖', '💝', '💕'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Random horizontal positions and styling sizes
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Between 3s and 5s
        heart.style.fontSize = Math.random() * 15 + 15 + 'px';
        
        container.appendChild(heart);
        
        // Remove individual element from DOM after completion of animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 350);
}
