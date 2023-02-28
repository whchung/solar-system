const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const sunRadius = 5;

const colors = {
  mercury: '#7d7d7d',
  venus: '#e5be01',
  earth: '#00a2ff',
  mars: '#cf5c36',
  jupiter: '#d1a07e',
  saturn: '#d2bb9a',
  uranus: '#bde5e5',
  neptune: '#76b8c6'
}

class Planet {
  constructor(name, distanceFromSun, radius, color, speed) {
    this.name = name;
    this.distanceFromSun = distanceFromSun;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
    this.angle = Math.random() * Math.PI * 2;
  }

  update() {
    this.angle += this.speed;
  }

  draw() {
    const x = Math.cos(this.angle) * this.distanceFromSun;
    const y = Math.sin(this.angle) * this.distanceFromSun;

    c.beginPath();
    c.fillStyle = this.color;
    c.arc(x + canvas.width / 2, y + canvas.height / 2, this.radius, 0, Math.PI * 2);
    c.fill();
    c.closePath();

    c.fillStyle = 'white';
    c.fillText(this.name, x + canvas.width / 2, y + canvas.height / 2 + this.radius + 10);

    c.beginPath();
    c.strokeStyle = this.color;
    c.arc(canvas.width / 2, canvas.height / 2, this.distanceFromSun, 0, Math.PI * 2);
    c.stroke();
    c.closePath();
  }
}

const planets = [
  new Planet('Mercury', 50, 3, colors.mercury, 0.03),
  new Planet('Venus', 80, 4, colors.venus, 0.02),
  new Planet('Earth', 110, 5, colors.earth, 0.01),
  new Planet('Mars', 140, 4, colors.mars, 0.008),
  new Planet('Jupiter', 200, 10, colors.jupiter, 0.005),
  new Planet('Saturn', 260, 9, colors.saturn, 0.003),
  new Planet('Uranus', 320, 7, colors.uranus, 0.002),
  new Planet('Neptune', 380, 6, colors.neptune, 0.001)
];

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = 'white';
  c.font = '24px sans-serif';
  c.textAlign = 'center';
  c.fillText('Vincent Chung\'s Solar System Project', canvas.width / 2, 30);
  c.fillText('Powered by ChatGPT', canvas.width / 2, canvas.height - 30);
  c.beginPath();
  c.fillStyle = 'yellow';
  c.arc(canvas.width / 2, canvas.height / 2, sunRadius, 0, Math.PI * 2);
  c.fillText('Sun', canvas.width / 2, canvas.height / 2 + 25);
  c.fill();
  c.closePath();

  planets.forEach(planet => {
    planet.update();
    planet.draw();
  });
}

animate();

