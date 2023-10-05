let g=9.8;  // gravedad
let a=20; // radio principal de la elipse
let b=5; // radio secundario de la elipse
let w=50; //ancho del bloque
let h=50; //alto del bloque
let dt=1/30; //esto es un número que se llama dt y que es el tiempo que pasa entre cada frame.
let l=200; //longitud de la cuerda
let beta=0.1; //factor de fricción.  

let bloque; //objeto bloque
let bala; //objeto bala
let cuerda;  //objeto cuerda

let m=10; //masa de la bala
let M=100; //masa del bloque
let v_b=45; //velocidad de la bala

let landa=beta/(2*(m+M)*l**2);
let omega=Math.sqrt(g/l);



function setup(){

  canvas=createCanvas(windowWidth,windowHeight); //
  frameRate(30); //esto es para que el programa corra a 30 fps
  bloque=new Bloque(-w/2,-h/2, M); //creo el objeto bloque
  cuerda=new Cuerda(0,-200,0,0); //creo el objeto cuerda
  bala=new Bala(v_b,m); //creo el objeto bala

};

function draw() {
  translate(windowWidth/2, windowHeight/2); //esto es para que el origen de coordenadas esté en la esquina inferior izquierda.
  background(94, 205, 206); //color que tiene el fondo canvas (gris). 

  bloque.show();
  bala.show();
  cuerda.show();

  if(bala.colision()==True){
    t=0;
    bloque.move();
    cuerda.move();
  } else{
    bala.move();
  }
  
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let Bloque=function(x,y,m){ //clase bloque

  this.x=x;
  this.y=y;
  this.m=m;

  let t=0; //tiempo
  let theta= 0;

  this.show=function(){
    noStroke();
    fill(0);
    rect(this.x,this.y,w,h);
  }

  this.move=function(){
    
    t=t+dt;

    theta= ((m*v_b)/((m+M)*l*omega))*Math.sin(omega*t)

    this.x=l*Math.sin(theta);
    this.y=l*Math.cos(theta);
  }
}

let Cuerda=function(x0,y0, x1, y1){

  this.x0=x0;
  this.y0=y0;
  this.x1=x1;
  this.y1=y1;

  this.show=function(){
    stroke(255,0,0);
    line(this.x0,this.y0,this.x1,this.y1);
  }

  this.move=function(){
    this.x1=this.x1+dx;
    this.y1=this.y1+dy;
  }

}


let Bala=function(vx, m){ //clase balas

    this.vxb=vx;
    this.m=m;

    let xb=0;

    this.show=function(){
      noStroke();
      fill(255);
      ellipse(-200+xb,0,a,b);
    }
    
    this.move=function(){
        xb=xb+this.vxb*dt;
    }

  this.colision=function(){
    if(xb>=-w/2){
      return True;
    }
  }
}