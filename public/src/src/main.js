// Lógica inicial do jogo: carregamento, controle e renderização simples

// Canvas setup document.addEventListener("DOMContentLoaded", function () { const canvas = document.createElement("canvas"); canvas.width = 800; canvas.height = 600; document.body.appendChild(canvas); const ctx = canvas.getContext("2d");

// Carregar imagem do carro const car = new Image(); car.src = "./assets/images/car.png"; // certifique-se de que esse arquivo está lá depois

// Posição do carro let x = 400; let y = 300; let speed = 0; let angle = 0;

// Controles const keys = {}; document.addEventListener("keydown", (e) => (keys[e.key] = true)); document.addEventListener("keyup", (e) => (keys[e.key] = false));

function update() { if (keys["ArrowUp"]) speed += 0.2; if (keys["ArrowDown"]) speed -= 0.2; if (keys["ArrowLeft"]) angle -= 0.05; if (keys["ArrowRight"]) angle += 0.05;

// Atrito
speed *= 0.98;

// Movimento baseado no ângulo
x += Math.cos(angle) * speed;
y += Math.sin(angle) * speed;

}

function draw() { ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.save();
ctx.translate(x, y);
ctx.rotate(angle);
ctx.drawImage(car, -25, -12, 50, 25); // carro 50x25 px
ctx.restore();

}

function loop() { update(); draw(); requestAnimationFrame(loop); }

car.onload = () => loop(); });

