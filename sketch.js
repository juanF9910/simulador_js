let g = 9.8; // gravedad
let a = 30; // radio principal de la elipse
let b = 10; // radio secundario de la elipse
let w = 50; // ancho del bloque
let h = 50; // alto del bloque
let dt = 1 / 3; // tiempo entre cada frame (en milisegundos)
let l = 200; // longitud de la cuerda
let beta = 0.1; // factor de fricción
let L=400; // distancia desde donde se dispara la bala

let bloque; // objeto bloque
let bala; // objeto bala
let cuerda; // objeto cuerda

let m = 10; // masa de la bala
let M = 50; // masa del bloque
let v_b = 60; // velocidad de la bala

let omega = Math.sqrt(g / l);

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); //
  frameRate(200); // 30 fps
  bloque = new Bloque(-w / 2, l-h / 2, M); // crea el objeto bloque
  cuerda = new Cuerda(0, 0); // crea el objeto cuerda
  bala = new Bala(v_b, m); // crea el objeto bala
}

function draw() {
  translate(windowWidth / 2, windowHeight / 2); // coloca el origen en el centro
  background(255); // fondo blanco

  
  bloque.show();
  cuerda.show();

  
  if (bala.colision()) {
    bloque.move();
    cuerda.move(bloque.x, bloque.y);
  } else {
    bala.move();
    bala.show();
  }
}

let Bloque = function (x, y, m) {
  this.x = x;
  this.y = y;
  this.m = m;

  let t = 0;
  let theta = 0;

  this.show = function () {
    noStroke();
    fill(139, 69, 19); // Color marrón para el bloque
    rect(this.x, this.y, w, h);
  }

  this.move = function () {
    t = t + dt;
    theta = ((m * v_b) / ((m + M) * l * omega)) * Math.sin(omega * t)

    this.x = l * Math.sin(theta) - w / 2;
    this.y = l * Math.cos(theta) - h / 2;
  }
}

let Cuerda = function (x1, y1) {
  this.x0 = 0;
  this.y0 = 0;
  this.x1 = x1;
  this.y1 = y1;

  this.show = function () {
    stroke(255, 0, 0); // Color rojo para la cuerda
    strokeWeight(5);

    if(this.y1==0){
      line(this.x0, this.y0, this.x1,  -h /2 + l);

    } else{
      line(this.x0, this.y0, this.x1 + w / 2, this.y1 + h / 2);
    }
    
  }

  this.move = function (x, y) {
    this.x1 = x;
    this.y1 = y;
  }
}

let Bala = function (vx, m) {
  this.vxb = vx;
  this.m = m;

  let xb = 0;

  this.show = function () {
    noStroke();
    fill(0, 0, 255); // Color azul para la bala
    ellipse(-L + xb, l, a, b);
  }

  this.move = function (val) {
    xb = xb + this.vxb * dt;
  }

  this.colision = function () {
    if (-L + xb >= -w / 2) {
      return true;
    }
  }
}