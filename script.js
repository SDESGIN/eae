
let finished = false;

function nextStep() {
    if (finished) return;

    finished = true;

    const content = document.getElementById("content");

    content.style.opacity = "0";
    content.style.transform = "translateY(20px)";

    setTimeout(() => {
        content.innerHTML = `
            <div class="tag">MINHA ÚLTIMA MENSAGEM</div>
            <div class="final-message">
                <h1>EAE MONSTER MONKEY!</h1>
                <p>KKKKKKKKKKKKKKKKKKKKKK</p>
            </div>
        `;

        content.classList.add("final-message");
        content.style.transition = "0.7s";
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";

        launchConfetti();
    }, 500);
}

function launchConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
        "#a855f7",
        "#ffffff",
        "#9333ea",
        "#ec4899",
        "#facc15"
    ];

    const particles = [];

    for (let i = 0; i < 250; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -Math.random() * canvas.height,
            size: Math.random() * 8 + 3,
            speed: Math.random() * 5 + 3,
            rotation: Math.random() * 360,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    let frame = 0;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.y += p.speed;
            p.x += Math.sin(p.y * 0.02) * 2;
            p.rotation += 3;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });

        frame++;

        if (frame < 300) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

window.addEventListener("resize", () => {
    const canvas = document.getElementById("confetti");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
