let g = 9.8; // gravity
<<<<<<< HEAD
let a = 150; // major axis of the ellipse
let b = 30; // minor axis of the ellipse
let w = 200; // block width
let h = 100; // block height
let dt = 1 / 3; // time between each frame (in milliseconds)
let l = 500; // length of the string
let beta = 0.1; // friction factor
let L = 1300; // distance from where the bullet is fired
=======
let a = 40; // major axis of the ellipse
let b = 15; // minor axis of the ellipse
let w = 80; // block width
let h = 80; // block height
let dt = 1 / 3; // time between each frame (in milliseconds)
let l = 200; // length of the string
let beta = 0.1; // friction factor
let L = 750; // distance from where the bullet is fired
>>>>>>> refs/remotes/origin/main

let bloque; // block object
let bala; // bullet object
let cuerda; // string object
let soporte;

let m; // bullet mass
let M; // block mass
let v_b; // bullet velocity
<<<<<<< HEAD

let Iter=200; // number of iterations
=======
>>>>>>> refs/remotes/origin/main

let omega = Math.sqrt(g / l);

let mSlider, MSlider, v_bSlider, resetButton;

<<<<<<< HEAD
let TT = [];
let HH = [];

=======
//let ended = false;

let TT = [];
let HH = [];

>>>>>>> refs/remotes/origin/main
let mValueElement, MValueElement, v_bValueElement;

function setup() {
  
<<<<<<< HEAD

=======
  m = 0.1; // Initial value for bullet mass (adjust as needed)
  M = 50; // Initial value for block mass (adjust as needed)
  v_b = 40; // Initial value for bullet velocity (adjust as needed)
>>>>>>> refs/remotes/origin/main
  canvas = createCanvas(windowWidth, windowHeight);// crea el lienzo
  frameRate(200); // establece la velocidad de los frames

  // Crea los deslizadores con etiquetas en formato LaTeX
<<<<<<< HEAD
  mSlider = createSlider(0.015, 0.5, 0.30, 0.005);// crea el deslizador de la masa de la bala con valores entre 1 y 10 y un incremento de 1 
  mValueElement = createSpan(mSlider.value()); //crea el valor que se va a cambiar en la pantalla (the value element for v_b)
  positionSlider(mSlider, 'Masa de la bala [kg]', 50, 100, 400, mValueElement);// Aumenta el último argumento para un mayor ancho del deslizador

  MSlider = createSlider(1, 5, 2, 0.2);// crea el deslizador de la masa del bloque con valores entre 10 y 100 y un incremento de 1
  MValueElement = createSpan(MSlider.value());
  positionSlider(MSlider, 'Masa del Bloque [kg]', 50, 200, 400, MValueElement);// Aumenta el último argumento para un mayor ancho del deslizador 


  v_bSlider = createSlider(250, 400, 330, 10);// crea el deslizador de la velocidad de la bala con valores entre 0 y 100 y un incremento de 1
  v_bValueElement = createSpan(v_bSlider.value());
  positionSlider(v_bSlider, 'Rapidez de la bala [m/s]', 50, 300, 400, v_bValueElement); // Aumenta el último argumento para un mayor ancho del deslizador
  
  mSlider.input(() => { //crea un listener que ejecuta una accion cuando el valor en el slide es cambiado, actualiza la variable global m y actualiza el elemento de valor de m que sale en la pantalla, finalmente re-inicia la simulacion con este nuevo valor m
  const m = mSlider.value();
  mValueElement.html(m);
  
  resetAnimation(m,M,v_b);
});
  
MSlider.input(() => {
  M = MSlider.value();
  MValueElement.html(M);

  resetAnimation(m,M,v_b);
});

v_bSlider.input(() => {
  v_b = v_bSlider.value();
  v_bValueElement.html(v_b);

  resetAnimation(m,M,v_b);
});

  //Crea el botón de reinicio
  /*resetButton = createButton('Reiniciar');// crea el botón de reinicio con el texto 'Reiniciar' 
  resetButton.mousePressed(resetAnimation(m,M,v_b)); // llama a la función resetAnimation cuando se presiona el botón de reinicio 
  resetButton.style('font-size', '20px');// Cambia el tamaño del texto en el botón
  resetButton.size(120, 40); // Cambia el tamaño del botón en píxeles
  resetButton.position(windowWidth / 2 - 50, 100); // coloca el botón de reinicio en la posición (20, 110)*/
  
  resetButton = createButton('Guardar'); // crea el botón de reinicio con el texto 'Reiniciar' 
=======
  mSlider = createSlider(1, 10, 5, 1);// crea el deslizador de la masa de la bala con valores entre 1 y 10 y un incremento de 1 
  mValueElement = createSpan(mSlider.value()); //crea el valor que se va a cambiar en la pantalla (the value element for v_b)
  positionSlider(mSlider, 'Bullet Mass [kg]', 20, 20, 250, mValueElement);// Aumenta el último argumento para un mayor ancho del deslizador

  MSlider = createSlider(10, 100, 50, 1);// crea el deslizador de la masa del bloque con valores entre 10 y 100 y un incremento de 1
  MValueElement = createSpan(MSlider.value());
  positionSlider(MSlider, 'Block Mass [kg]', 20, 50, 250, MValueElement);// Aumenta el último argumento para un mayor ancho del deslizador 

  v_bSlider = createSlider(0, 100, 40, 1);// crea el deslizador de la velocidad de la bala con valores entre 0 y 100 y un incremento de 1
  v_bValueElement = createSpan(v_bSlider.value());
  positionSlider(v_bSlider, 'Bullet Velocity [m/s]', 20, 80, 250, v_bValueElement); // Aumenta el último argumento para un mayor ancho del deslizador

  mSlider.input(() => { //crea un listener que ejecuta una accion cuando el valor en el slide es cambiado, actualiza la variable global m y actualiza el elemento de valor de m que sale en la pantalla, finalmente re-inicia la simulacion con este nuevo valor m
  const m = mSlider.value();
  mValueElement.html(m);
  
  resetAnimation(m,M,v_b);
});
  
MSlider.input(() => {
  M = MSlider.value();
  MValueElement.html(M);

  resetAnimation(m,M,v_b);
});

v_bSlider.input(() => {
  v_b = v_bSlider.value();
  v_bValueElement.html(v_b);

  resetAnimation(m,M,v_b);
});

  // Crea el botón de reinicio
  resetButton = createButton('Reiniciar');// crea el botón de reinicio con el texto 'Reiniciar' 
  resetButton.mousePressed(resetAnimation(m,M,v_b)); // llama a la función resetAnimation cuando se presiona el botón de reinicio 
  resetButton.style('font-size', '20px');// Cambia el tamaño del texto en el botón
  resetButton.size(120, 40); // Cambia el tamaño del botón en píxeles
  resetButton.position(windowWidth / 2 - 50, 100); // coloca el botón de reinicio en la posición (20, 110)
  
    resetButton = createButton('Guardar'); // crea el botón de reinicio con el texto 'Reiniciar' 
>>>>>>> refs/remotes/origin/main
  resetButton.mousePressed(savedata); // llama a la función resetAnimation cuando se presiona el botón de reinicio 
  resetButton.style('font-size', '70px'); // Cambia el tamaño del texto en el botón
  resetButton.size(270, 100); // Cambia el tamaño del botón en píxeles
  resetButton.position(windowWidth / 2 -100, 200); // coloca el botón de reinicio en la posición (20, 110)

  soporte = new Soporte();
  cuerda = new Cuerda(0, 0); // crea el objeto cuerda
  bloque = new Bloque(-w / 2, l - h / 2, MSlider.value()); // crea el objeto bloque
  bala = new Bala(v_bSlider.value(), mSlider.value()); // crea el objeto bala
}



function draw() {

  translate(windowWidth / 2, windowHeight / 2); // coloca el origen en el centro
<<<<<<< HEAD

  background(255); // color fondo
=======
    background(207, 150, 450); // color fondo
>>>>>>> refs/remotes/origin/main
  // Actualiza los valores de M, m y v_b desde los deslizadores
  M = MSlider.value(); // actualiza el valor de M desde el deslizador de la masa del bloque 
  m = mSlider.value(); // actualiza el valor de m desde el deslizador de la masa de la bala
  v_b = v_bSlider.value(); // actualiza el valor de v_b desde el deslizador de la velocidad de la bala
  
  soporte.show(); // muestra el soporte
  bloque.show(); // muestra el bloque
  cuerda.show(); // muestra la cuerda

  if(bala.colision()){ // si la bala colisiona con el bloque
    t = 0;
    bloque.move(); // mueve el bloque
    cuerda.move(bloque.x, bloque.y); 

  } else { // si la bala no colisiona con el bloque
    bala.move(); // mueve la bala
    bala.show(); // muestra la bala
  }
}



let BloqueV = function (x, y, MB, T, H) { // crea el objeto bloque
  this.x = x; // posición en x del bloque 
  this.y = y; // posición en y del bloque 
  this.M = MB; // masa del bloque

  let t = 0; // tiempo 
  let theta = 0; // ángulo de oscilación del bloque 

  this.show = function () { // muestra el bloque 
    noStroke(); // sin borde 
    fill(255, 105, 180); // Color rosa para el bloque
    rect(this.x, this.y, w, h); // rectángulo con esquinas en (this.x, this.y) y (this.x + w, this.y + h)
  }

  let iterationCount = 0; // Counter for the number of iterations

  this.move = function () {
    if (iterationCount < Iter) {
      T.push(t);
      theta = ((m * v_b) / ((m + M) * l * omega)) * Math.sin(omega * t); // calcula el ángulo de oscilación del bloque 

      this.x = l * Math.sin(theta) - w / 2; // actualiza la posición en x del bloque 
      this.y = l * Math.cos(theta) - h / 2; // actualiza la posición en y del bloque
      H.push(l * (1 - Math.cos(theta)));

      t = t + dt; // incrementa el tiempo en dt

      iterationCount++; // Increment the iteration counter
    }

    // file writer once in the infinite loop
    else if (iterationCount == Iter) {

      const tArray = T; //bloque.getTArray();
      const hArray = H; //bloque.getHArray();

      // Combine tArray and hArray into a single array of arrays
      const combinedData = tArray.map((t, index) => [t, hArray[index]]);

      // Convert combinedData to CSV format
      const csvContent = combinedData.map(row => row.join(',')).join('\n');

      // Create a Blob containing the CSV data
      const blob = new Blob([csvContent], { type: 'text/csv' });

      // Create a download link for the Blob
      const url = URL.createObjectURL(blob);

      // Create an anchor element for the download link
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.csv'; // Specify the file name

      // Trigger a click event on the anchor element to start the download
      a.click();

      // Clean up by revoking the URL object
      URL.revokeObjectURL(url);
      iterationCount++;
    }
  }
}

let Bloque=function(x, y, Mb){ // crea el objeto bloque
    //console.log(M)
    //console.log(m)
  this.x = x; // posición en x del bloque 
  this.y = y; // posición en y del bloque 
  this.M = Mb; // masa del bloque
  
  let t = 0; // tiempo 
  let theta = 0; // ángulo de oscilación del bloque
  let HH=[];
  let TT=[];

  this.show = function () { // muestra el bloque 
    noStroke(); // sin borde 
    fill(255, 105, 180); // Color rosa para el bloque
    rect(this.x, this.y, w, h); // rectángulo con esquinas en (this.x, this.y) y (this.x + w, this.y + h)
  }

  this.move = function(){
    TT.push(t);
    theta = ((m * v_b) / ((m + M) * l * omega)) * Math.sin(omega * t); // calcula el ángulo de oscilación del bloque 
    this.x = l * Math.sin(theta) - w / 2; // actualiza la posición en x del bloque 
    this.y = l * Math.cos(theta) - h / 2; // actualiza la posición en y del bloque
    HH.push(l * (1 - Math.cos(theta)));
    t = t + dt; // incrementa el tiempo en dt
      //console.log(M)
      //console.log(m)
  }


}

let Cuerda = function(x1, y1){ // crea el objeto cuerda 
  this.x0 = 0; // posición en x del extremo fijo de la cuerda
  this.y0 = 0; // posición en y del extremo fijo de la cuerda
  this.x1 = x1; // posición en x del extremo libre de la cuerda
  this.y1 = y1; // posición en y del extremo libre de la cuerda

  this.show = function () { // muestra la cuerda
<<<<<<< HEAD
    //stroke(255, 255, 255); // Color para la cuerda
    stroke(0)
=======
    stroke(255, 255, 255); // Color para la cuerda
>>>>>>> refs/remotes/origin/main
    strokeWeight(5); // grosor de la cuerda  en píxeles

    if (this.y1 == 0) { // si la cuerda está en reposo
      line(this.x0, this.y0, this.x1, -h / 2 + l); // línea con extremos en (this.x0, this.y0) y (this.x1, -h / 2 + l)
    } else { // si la cuerda está en movimiento
      line(this.x0, this.y0, this.x1 + w / 2, this.y1 + h / 2); // línea con extremos en (this.x0, this.y0) y (this.x1 + w / 2, this.y1 + h / 2)
    }
  }

  this.move = function (x, y) { // mueve la cuerda
    this.x1 = x; // actualiza la posición en x del extremo libre de la cuerda
    this.y1 = y; // actualiza la posición en y del extremo libre de la cuerda
  }
}


let Soporte= function(){

  let LL=150;
  this.show = function () { // muestra el bloque

    stroke(0); // Color 
    strokeWeight(10); // grosor de la cuerda  en píxeles
    line(-LL,0,LL,0); // línea con extremos en (this.x0, this.y0) y (this.x1, -h / 2 + l)

  }
}

let Bala = function (vx, mb) { // crea el objeto bala
  this.vxb = vx; // velocidad en x de la bala
  this.m = mb; // masa de la bala

  let xb = 0; // posición en x de la bala

  this.show = function () { // muestra la bala
    noStroke(); // sin borde
    fill(212, 175, 55); // Color para la bala
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

function positionSlider(slider, label, x, y, sliderWidth,valueElement) { // crea un deslizador con una etiqueta en formato LaTeX en la posición (x, y)
<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/main
  slider.position(x, y); // Ajusta la posición del deslizador
  slider.style('width', sliderWidth + 'px'); // Ajusta el ancho del deslizador

  let labelElement = createSpan(label); // Crea un elemento de texto con la etiqueta en formato LaTeX
  labelElement.position(x + sliderWidth + 100, y-30); // Ajusta la posición de la etiqueta
  labelElement.style('font-size', '70px'); // Aumenta el tamaño de la fuente de la etiqueta

  //let valueElement = createSpan(slider.value()); // Crea un elemento de texto con el valor numérico del deslizador
<<<<<<< HEAD
  valueElement.position(x + sliderWidth + 900, y); // Ajusta la posición del valor numérico
  valueElement.style('font-size', '50px'); // Aumenta el tamaño de la fuente del valor numérico
=======
  valueElement.position(x + sliderWidth + 250, y); // Ajusta la posición del valor numérico
  valueElement.style('font-size', '25px'); // Aumenta el tamaño de la fuente del valor numérico
>>>>>>> refs/remotes/origin/main
  valueElement.style('font-weight', 'bold'); // Opcional: haz que el valor sea más visible

  // Actualiza el valor numérico cada vez que se cambia el slider
  slider.input(function () { // cuando se cambia el valor del deslizador
    valueElement.html(slider.value()); // actualiza el valor numérico
  });
}

function resetAnimation(m,M,v_b) { // reinicia la animación
<<<<<<< HEAD
=======

  //m=mSlider.value();
  //M=MSlider.value();
  //v_b=v_bSlider.value();

  // Restablece los objetos y valores necesarios
    //console.log(M)
>>>>>>> refs/remotes/origin/main
  bloque = new Bloque(-w / 2, l - h / 2, M);
    //console.log(M)
  cuerda = new Cuerda(0, 0);
  bala = new Bala(v_b, m);
<<<<<<< HEAD
=======
  


  // Restablece los deslizadores a sus valores iniciales
>>>>>>> refs/remotes/origin/main
}

function savedata() { // reinicia la animación 
  let H = ['h'];
  let T = ['t'];

  m=mSlider.value();
  M=MSlider.value();
  v_b=v_bSlider.value();

  // Restablece los objetos y valores necesarios
  bloque = new BloqueV(-w / 2, l - h / 2, M, T, H); //this function calls the file writer
  cuerda = new Cuerda(0, 0);
  bala = new Bala(v_b, m);

  // Restablece los deslizadores a sus valores iniciales
<<<<<<< HEAD
}
=======
}
>>>>>>> refs/remotes/origin/main
