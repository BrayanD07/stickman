function crearPersona()
{
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

var arregloPersonas = new Array(new Persona("hector",15,"black",108,70,10,180),
			       new Persona("Iris",21,"blue",80,45,80,180),
			       new Persona("juan",17,"green",95,30,150,180),
			       new Persona("pablo",19,"orange",120,55,220,180),
			       new Persona("pedro",12,"red",100,50,300,180));

for (var u = arregloPersonas.length - 1; u >= 0; u--) 
{
arregloPersonas[u].Dibujar(context);
}
}


/*
function crearArbol()
{

var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

//Declaración, Creación e Inicialización de un arreglo
var arregloArboles = new Array(new Arbol("blue", 100, 80, 10, 350, 5, 1),
			       new Arbol("black", 82, 50, 120, 350, 5, 1),
			       new Arbol("red",70, 70, 200, 350, 5, 1),
			       new Arbol("orange", 97, 67, 300, 350, 5, 1),
			       new Arbol("green", 80, 66, 400, 350, 5, 1));
for (var o = arregloArboles.length - 1; o >= 0; o--) 
{
arregloArboles[o].Dibujar(context);
}
}


function crearCubo()
{
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

var arregloCubos = new Array(new Cubo("red",30,30,850,27000,10,50),
			       new Cubo("green",40,40,40,64000,100,50),
			       new Cubo("blue",20,20,20,8000,190,50),
			       new Cubo("orange",35,35,35,42875,280,50),
			       new Cubo("black",25,25,25,15625,360,50));
for (var p = arregloCubos.length - 1; p >= 0; p--) 
{
arregloCubos[p].Dibujar(context);
}
}
*/
