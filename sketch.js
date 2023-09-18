let suelo; //define una variable que se llama suelo o un objeto que se llama suelo.

function setup(){

  /*createCanvas(400, 400); el canvas está en pixeles. 
  si queremos que el canvas tenga el tamaño de la ventana entonces:*/

  createCanvas(windowWidth, windowHeight); //esto es una función.

  suelo=new Tierra(-windowWidth/2, windowHeight/2-100, 100 , 100); //esto es un objeto de la clse Tierra.
}

function draw(){ //esto es un ciclo infinito.

  translate(windowWidth/2, windowHeight/2); //esto es para que el origen de coordenadas esté en la esquina inferior izquierda.

  background(94, 205, 206); //color que tiene el fondo canvas (gris). 
  // si es en rgb se pone background(217, 128, 109);
  suelo.show(); //esto es un método que se llama show y que dibuja un rectángulo.
}

let Tierra=function(_x,_y, _w, _h){ //esto es una clase (es un molde para crear objetos).

  this.x=_x; 
  this.y=_y;
  this.w=_w;
  this.h=_h;

  this.show=function(){

    noStroke(); //esto es para que no tenga borde. 
    fill(217, 128, 109); //esto es para que tenga color.
    
    rect(this.x, this.y, this.w, this.h); //esto es un método que se llama show y que dibuja un rectángulo.
  };

};
