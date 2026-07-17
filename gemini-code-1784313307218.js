function nextSlide(slideNumber) {
    // সব স্লাইড থেকে active ক্লাস রিমুভ করা
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));

    // টার্গেট স্লাইডটি শো করা
    const targetSlide = document.getElementById(`slide${slideNumber}`);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }
}

function wrongChoice() {
    // যদি প্রথম স্লাইডে 'NO' চাপ দেয়, তবে স্লাইড ২ (Why did u click no) এ নিয়ে যাবে
    nextSlide(2);
}