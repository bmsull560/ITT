
// Hero Fade In
gsap.from("#hero .content", {
    opacity: 0,
    y: 50,
    duration: 1.5
});

// Sections Glide In
gsap.from(".glide-in", {
    opacity: 0,
    x: -50,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".glide-in",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

// Sections Fade In
gsap.from(".fade-in", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});
