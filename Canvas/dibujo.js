const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');


//TORTUGÜEITOR
// Caparazón
// Caparazón (Hexágono)
// ctx.fillStyle = '#004d00'; // Verde más oscuro para el caparazón
// ctx.beginPath();
// ctx.moveTo(600, 250);
// ctx.lineTo(650, 275);
// ctx.lineTo(650, 325);
// ctx.lineTo(600, 350);
// ctx.lineTo(550, 325);
// ctx.lineTo(550, 275);
// ctx.closePath();
// ctx.fill();

// Líneas de división para el caparazón
// ctx.strokeStyle = '#002600'; // Un verde aún más oscuro para las líneas de división
// ctx.lineWidth = 3;
// ctx.beginPath();
// ctx.moveTo(600, 250); 
// ctx.lineTo(600, 350);
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(625, 260);
// ctx.lineTo(575, 340);
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(575, 260);
// ctx.lineTo(625, 340);
// ctx.stroke();

// Cabeza
// ctx.fillStyle = '#32CD32'; // Verde claro para la cabeza
// ctx.beginPath();
// ctx.arc(600, 210, 40, 0, Math.PI * 2); 
// ctx.fill();

// Patas (Triángulos)
// ctx.fillStyle = '#006400'; // Verde oscuro para las patas

//PATAS DERECHAS
// Pata superior
// ctx.beginPath();
// ctx.moveTo(650, 275);
// ctx.lineTo(680, 275);
// ctx.lineTo(650, 295);
// ctx.closePath();
// ctx.fill();

// Pata inferior
// ctx.beginPath();
// ctx.moveTo(650, 325);
// ctx.lineTo(680, 325);
// ctx.lineTo(650, 305);
// ctx.closePath();
// ctx.fill();

//PATAS IZQUIERDAS
// Pata superior
// ctx.beginPath();
// ctx.moveTo(550, 275);
// ctx.lineTo(520, 275);
// ctx.lineTo(550, 295);
// ctx.closePath();
// ctx.fill();

// Pata inferior
// ctx.beginPath();
// ctx.moveTo(550, 325);
// ctx.lineTo(520, 325);
// ctx.lineTo(550, 305);
// ctx.closePath();
// ctx.fill();

// Cuerpo 
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(200, 200, 100, Math.PI, 0); 
ctx.fill();

ctx.fillRect(100, 200, 200, 150); // Cuerpo

// Ojos ovalados
ctx.fillStyle = 'black';

// Ojo izquierdo
ctx.beginPath();
ctx.ellipse(170, 180, 15, 25, 0, 0, Math.PI * 2);
ctx.fill();

// Ojo derecho
ctx.beginPath();
ctx.ellipse(230, 180, 15, 25, 0, 0, Math.PI * 2);
ctx.fill();

// Boca
ctx.beginPath();
ctx.arc(200, 250, 30, 0, Math.PI * 2);
ctx.fill();

// Brazos
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(90, 250, 50, 0.5 * Math.PI, 1.5 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(310, 250, 50, 0.5 * Math.PI, 1.5 * Math.PI, true);
ctx.fill();

// Cola 
ctx.beginPath();
ctx.moveTo(130, 350);
ctx.quadraticCurveTo(200, 420, 270, 350); 
ctx.fill();

