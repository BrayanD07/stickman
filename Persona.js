class Persona
{
constructor(n, e, c, al, an, x, y)
{
this.Nombre = n;
this.Edad = e;
this.Color = c;
this.Altura = al;
this.Ancho = an;
this.X = x;
this.Y = y;
}

Hablar(mensaje)
{
alert(mensaje);
}

Dibujar(contextoDeDibujo){

//Crear una pluma con el color
contextoDeDibujo.strokeStyle = this.Color; 

//cabeza
var radio = this.Ancho/2;
contextoDeDibujo.beginPath();
contextoDeDibujo.arc(this.X+radio,this.Y+radio,
            	     radio,0,2*3.1416,true);
contextoDeDibujo.stroke();

//tronco
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X+radio,
                        this.Y+2*radio);
contextoDeDibujo.lineTo(this.X+radio,
                        this.Y+3*radio);
contextoDeDibujo.stroke();

//manos
contextoDeDibujo.moveTo(this.X,
                        this.Y + 2.2*(radio));
contextoDeDibujo.lineTo(this.X + 2*(radio),
                        this.Y + 2.2*(radio));
contextoDeDibujo.stroke();

//piernaI
contextoDeDibujo.moveTo(this.X + radio,
                        this.Y + 3*(radio));
contextoDeDibujo.lineTo(this.X + 2*(radio),
                        this.Y + 4*(radio));
contextoDeDibujo.stroke();

//piernaD
contextoDeDibujo.moveTo(this.X + radio,
                        this.Y + 3*(radio));
contextoDeDibujo.lineTo(this.X ,
                        this.Y + 4*(radio));
contextoDeDibujo.stroke();

//Nombre
contextoDeDibujo.font="bold italic 12px arial";
contextoDeDibujo.fillText(this.Nombre,this.X,this.Y-20)

}
}