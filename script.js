// Function to check passcode entry
function checkPasscode() {
    const enteredCode = document.getElementById('passInput').value;
    const errorMsg = document.getElementById('errorMsg');
    
    // Exact passcode key validated
    if (enteredCode === "2010") {
        document.getElementById('passcodeScreen').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        startHeartsShower(); // Fire active background loop
    } else {
        errorMsg.style.display = 'block';
        const inputField = document.getElementById('passInput');
        inputField.style.borderColor = '#d32f2f';
        setTimeout(() => { inputField.style.borderColor = '#ffccd5'; }, 600);
    }
}

// Function to route active page frames
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

// Dynamic Floating Canvas Heart Engine
function startHeartsShower() {
    const bgContainer = document.getElementById('heartsBg');
    const emoIcons = ['❤️', '💖', '🌸', '✨', '💕'];
    
    setInterval(() => {
        const leafNode = document.createElement('div');
        leafNode.classList.add('heart');
        leafNode.innerText = emoIcons[Math.floor(Math.random() * emoIcons.length)];
        
        leafNode.style.left = Math.random() * 100 + 'vw';
        leafNode.style.animationDuration = Math.random() * 2 + 3.5 + 's'; 
        leafNode.style.fontSize = Math.random() * 12 + 18 + 'px';
        
        bgContainer.appendChild(leafNode);
        
        setTimeout(() => {
            leafNode.remove();
        }, 4500);
    }, 300);
}
