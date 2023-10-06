let g = 9.8; // gravedad
let a = 30; // radio principal de la elipse
let b = 10; // radio secundario de la elipse
let w = 50; // ancho del bloque
let h = 50; // alto del bloque
let dt = 1 / 3; // tiempo entre cada frame (en milisegundos)
let l = 200; // longitud de la cuerda
let beta = 0.1; // factor de fricción
let L = 750; // distancia desde donde se dispara la bala

let bloque; // objeto bloque
let bala; // objeto bala
let cuerda; // objeto cuerda

let m = 10; // masa de la bala
let M = 50; // masa del bloque
let v_b = 60; // velocidad de la bala

let omega = Math.sqrt(g / l);

let mSlider, MSlider, v_bSlider, resetButton;

function setup() {

  canvas = createCanvas(windowWidth, windowHeight); // crea el lienzo
  frameRate(200); // establece la velocidad de los frames
  bloque = new Bloque(-w / 2, l - h / 2, M); // crea el objeto bloque
  cuerda = new Cuerda(0, 0); // crea el objeto cuerda
  bala = new Bala(v_b, m); // crea el objeto bala

  // Crea los deslizadores con etiquetas en formato LaTeX
  mSlider = createSlider(1, 10, m, 1); // crea el deslizador de la masa de la bala con valores entre 1 y 10 y un incremento de 1 
  positionSlider(mSlider, 'Masa bala [kg]', 20, 20, 250); // Aumenta el último argumento para un mayor ancho del deslizador 

  MSlider = createSlider(10, 100, M, 1); // crea el deslizador de la masa del bloque con valores entre 10 y 100 y un incremento de 1
  positionSlider(MSlider, 'Masa péndulo [kg]', 20, 50, 250); // Aumenta el último argumento para un mayor ancho del deslizador 

  v_bSlider = createSlider(0, 100, v_b, 1); // crea el deslizador de la velocidad de la bala con valores entre 0 y 100 y un incremento de 1
  positionSlider(v_bSlider, 'rapidéz bala [m/s]', 20, 80, 250); // Aumenta el último argumento para un mayor ancho del deslizador

  // Crea el botón de reinicio
  resetButton = createButton('Reiniciar'); // crea el botón de reinicio con el texto 'Reiniciar' 
  resetButton.mousePressed(resetAnimation); // llama a la función resetAnimation cuando se presiona el botón de reinicio 
  resetButton.style('font-size', '20px'); // Cambia el tamaño del texto en el botón
  resetButton.size(120, 40); // Cambia el tamaño del botón en píxeles
  resetButton.position(windowWidth/2-50, 100); // coloca el botón de reinicio en la posición (20, 110)

}

function draw() {
  translate(windowWidth / 2, windowHeight / 2); // coloca el origen en el centro
  background(255); // fondo blanco

  // Actualiza los valores de M, m y v_b desde los deslizadores
  M = MSlider.value();  // actualiza el valor de M desde el deslizador de la masa del bloque 
  m = mSlider.value(); // actualiza el valor de m desde el deslizador de la masa de la bala
  v_b = v_bSlider.value(); // actualiza el valor de v_b desde el deslizador de la velocidad de la bala

  bloque.show(); // muestra el bloque
  cuerda.show();  // muestra la cuerda

  if (bala.colision()) { // si la bala colisiona con el bloque
    bloque.move(); // mueve el bloque
    cuerda.move(bloque.x, bloque.y); // mueve la cuerda
  } else { // si la bala no colisiona con el bloque
    bala.move(); // mueve la bala
    bala.show(); // muestra la bala
  }
}

let Bloque = function (x, y, m) { // crea el objeto bloque
  this.x = x; // posición en x del bloque 
  this.y = y; // posición en y del bloque 
  this.m = m; // masa del bloque
 
  let t = 0; // tiempo 
  let theta = 0; // ángulo de oscilación del bloque 

  let H=[];
  let T=[];

  this.show = function () { // muestra el bloque 
    noStroke(); // sin borde 
    fill(139, 69, 19); // Color marrón para el bloque
    rect(this.x, this.y, w, h); // rectángulo con esquinas en (this.x, this.y) y (this.x + w, this.y + h)
  }

  this.move = function () { // mueve el bloque
    t = t + dt; // incrementa el tiempo en dt
    T.push(t);

    theta = ((m * v_b) / ((m + M) * l * omega)) * Math.sin(omega * t) // calcula el ángulo de oscilación del bloque 

    this.x = l * Math.sin(theta) - w / 2; // actualiza la posición en x del bloque 
    this.y = l * Math.cos(theta) - h / 2; // actualiza la posición en y del bloque
    H.push(this.y);
  }
}

let Cuerda = function (x1, y1) { // crea el objeto cuerda 
  this.x0 = 0; // posición en x del extremo fijo de la cuerda
  this.y0 = 0; // posición en y del extremo fijo de la cuerda
  this.x1 = x1; // posición en x del extremo libre de la cuerda
  this.y1 = y1; // posición en y del extremo libre de la cuerda

  this.show = function () { // muestra la cuerda
    stroke(255, 0, 0); // Color rojo para la cuerda
    strokeWeight(5); // grosor de la cuerda  en píxeles

    if (this.y1 == 0) {  // si la cuerda está en reposo
      line(this.x0, this.y0, this.x1, -h / 2 + l); // línea con extremos en (this.x0, this.y0) y (this.x1, -h / 2 + l)
    } else { // si la cuerda está en movimiento
      line(this.x0, this.y0, this.x1 + w / 2, this.y1 + h / 2); // línea con extremos en (this.x0, this.y0) y (this.x1 + w / 2, this.y1 + h / 2)
    }
  }

  this.move = function (x, y) { // mueve la cuerda
    this.x1 = x;  // actualiza la posición en x del extremo libre de la cuerda
    this.y1 = y; // actualiza la posición en y del extremo libre de la cuerda
  }
}

let Bala = function (vx, m) { // crea el objeto bala
  this.vxb = vx; // velocidad en x de la bala
  this.m = m; // masa de la bala

  let xb = 0; // posición en x de la bala

  this.show = function () { // muestra la bala
    noStroke(); // sin borde
    fill(0, 0, 255); // Color azul para la bala
    ellipse(-L + xb, l, a, b); // elipse con centro en (-L + xb, l) y radios a y b
  }

  this.move = function (val) { // mueve la bala
    xb = xb + this.vxb * dt; // incrementa la posición en x de la bala en vxb * dt
  }

  this.colision = function () { // verifica si la bala colisiona con el bloque
    if (-L + xb >= -w / 2) { // si la bala está a la derecha del bloque
      return true; // retorna verdadero
    }
  }
}

function positionSlider(slider, label, x, y, sliderWidth) {  // crea un deslizador con una etiqueta en formato LaTeX en la posición (x, y)
  slider.position(x, y); // Ajusta la posición del deslizador
  slider.style('width', sliderWidth + 'px'); // Ajusta el ancho del deslizador

  let labelElement = createSpan(label); // Crea un elemento de texto con la etiqueta en formato LaTeX
  labelElement.position(x + sliderWidth + 10, y); // Ajusta la posición de la etiqueta
  labelElement.style('font-size', '25px'); // Aumenta el tamaño de la fuente de la etiqueta

  let valueElement = createSpan(slider.value()); // Crea un elemento de texto con el valor numérico del deslizador
  valueElement.position(x + sliderWidth + 250, y); // Ajusta la posición del valor numérico
  valueElement.style('font-size', '25px'); // Aumenta el tamaño de la fuente del valor numérico
  valueElement.style('font-weight', 'bold'); // Opcional: haz que el valor sea más visible

  // Actualiza el valor numérico cada vez que se cambia el slider
  slider.input(function() { // cuando se cambia el valor del deslizador
    valueElement.html(slider.value()); // actualiza el valor numérico
  });
}

function resetAnimation() { // reinicia la animación 
  // Restablece los objetos y valores necesarios
  bloque = new Bloque(-w / 2, l - h / 2, M); 
  cuerda = new Cuerda(0, 0);
  bala = new Bala(v_b, m);

  // Restablece los deslizadores a sus valores iniciales
  mSlider.value(m); 
  MSlider.value(M);
  v_bSlider.value(v_b);
};