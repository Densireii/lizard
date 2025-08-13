document.addEventListener('DOMContentLoaded', () => {
    const lizard = document.getElementById('lizard');
    const audio = document.getElementById("click");
    const container = document.querySelector('.container');

    lizard.addEventListener('click', () => {
        // Play sound
        audio.currentTime = 0;
        audio.play();

        // Button size
        const btnWidth = lizard.offsetWidth;
        const btnHeight = lizard.offsetHeight;

        // Container size
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        // Random position inside container
        const x = Math.random() * (containerWidth - btnWidth);
        const y = Math.random() * (containerHeight - btnHeight);

        // Move button
        lizard.style.position = 'absolute';
        lizard.style.left = `${x}px`;
        lizard.style.top = `${y}px`;
    });
});
