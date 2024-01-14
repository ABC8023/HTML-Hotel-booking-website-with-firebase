// Get all video containers and hover texts
const videoContainers = document.querySelectorAll(".slide");
const hoverTexts = document.querySelectorAll(".hover-text");

// Function to start video playback and hide hover text
const playVideo = (index) => {
    const video = videoContainers[index].querySelector("video");
    if (video.paused) {
        video.play();
        hoverTexts[index].classList.remove("active");
    }
};

// Function to pause video and show hover text
const pauseVideo = (index) => {
    const video = videoContainers[index].querySelector("video");
    video.pause();
    video.currentTime = 0;
    hoverTexts[index].classList.add("active");
};

// Add mouseenter and mouseleave events for each video container
videoContainers.forEach((container, index) => {
    container.addEventListener("mouseenter", () => playVideo(index));
    container.addEventListener("mouseleave", () => pauseVideo(index));
});

// Ensure hover texts are initially hidden
hoverTexts.forEach((text) => text.classList.add("active"));