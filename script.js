document.addEventListener("DOMContentLoaded", function() {
    // Dynamic background change
    let colors = ['#ffecd2', '#fcb69f', '#ff9a9e', '#fecfef', '#99f2c8'];
    let i = 0;
    setInterval(function() {
        document.body.style.background = `linear-gradient(120deg, ${colors[i]} 0%, ${colors[(i+1)%colors.length]} 100%)`;
        i = (i + 1) % colors.length;
    }, 4000);

    // Dynamic text animation
    let heading = document.getElementById("heading");
    let slogans = [
        "Happy Raksha Bandhan, My Dear Sisters! ❤️",
        "A bond that's strong and everlasting! ❤️",
        "With love, care, and endless memories! ❤️",
        "Cherishing every moment with you! ❤️",
        "❤️I love you, my three cute sisters!Thankyou so much  coming in my life ❤️ "
    ];
    let sloganElement = document.getElementById("slogan");
    let j = 0;

    setInterval(function() {
        heading.textContent = slogans[j];
        sloganElement.textContent = slogans[(j + 1) % slogans.length];
        j = (j + 1) % slogans.length;
    }, 5000);

    // Flower rain animation
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);

    let petals = [];
    let petalCount = 100;

    function createPetal() {
        let petal = {
            x: Math.random() * width,
            y: Math.random() * height,
            speedY: Math.random() * 2 + 1,
            size: Math.random() * 3 + 2,
            angle: Math.random() * Math.PI * 2,
            drift: Math.random() * 0.5 - 0.25
        };
        petals.push(petal);
    }

    for (let i = 0; i < petalCount; i++) {
        createPetal();
    }

    function drawPetals() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255, 192, 203, 0.8)';
        ctx.beginPath();
        petals.forEach(petal => {
            petal.y += petal.speedY;
            petal.x += petal.drift;
            if (petal.y > height) {
                petal.y = -petal.size;
                petal.x = Math.random() * width;
            }
            ctx.moveTo(petal.x, petal.y);
            ctx.arc(petal.x, petal.y, petal.size, 0, Math.PI * 2);
        });
        ctx.fill();
    }

    function animatePetals() {
        drawPetals();
        requestAnimationFrame(animatePetals);
    }

    animatePetals();
});
