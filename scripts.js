const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    if (body.style.animationPlayState === 'paused') {
        body.style.animationPlayState = 'running';
        toggleButton.textContent = 'Pause Background';
    } else {
        body.style.animationPlayState = 'paused';
        toggleButton.textContent = 'Resume Background';
    }
});