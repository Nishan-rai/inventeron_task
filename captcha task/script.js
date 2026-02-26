const canvas = document.getElementById('captcha');
const ctx = canvas.getContext('2d');
const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');
const userInput = document.getElementById('userInput');
const message = document.getElementById('message');

let captchaCode = '';

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)})`;
}

function generateCaptcha() {
    captchaCode = '';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Generate 6 random characters
    for (let i = 0; i < 6; i++) {
        const char = chars.charAt(Math.floor(Math.random() * chars.length));
        captchaCode += char;

        ctx.fillStyle = randomColor();
        ctx.save();
        ctx.translate(30 * i + 20, 35);
        ctx.rotate(Math.random() * 0.5 - 0.25);
        ctx.fillText(char, 0, 0);
        ctx.restore();
    }

    // Add random lines for noise
    for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = randomColor();
        ctx.beginPath();
        ctx.moveTo(Math.random() * 200, Math.random() * 60);
        ctx.lineTo(Math.random() * 200, Math.random() * 60);
        ctx.stroke();
    }
}

refreshBtn.addEventListener('click', generateCaptcha);

submitBtn.addEventListener('click', () => {
    if (userInput.value === captchaCode) {
        message.style.color = 'green';
        message.innerText = 'CAPTCHA Verified Successfully!';
    } else {
        message.style.color = 'red';
        message.innerText = 'Incorrect CAPTCHA. Try Again!';
    }

    userInput.value = '';
    generateCaptcha();
});

// Generate first captcha when page loads
generateCaptcha();