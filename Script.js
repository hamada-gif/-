document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const card = document.querySelector('.card');
    const giftText = document.querySelector('.gift-text');

    // Simple animation for the sender's text
    setTimeout(() => {
        giftText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        giftText.style.opacity = '1';
        giftText.style.transform = 'translateY(0)';
    }, 2000); // Delay for 2 seconds after page load

    // Add a subtle hover effect for a more interactive feel
    cardContainer.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset card rotation on mouse leave
    cardContainer.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
