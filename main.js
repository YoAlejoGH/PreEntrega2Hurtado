console.log("Hello World");

console.log("DOM");

let cliente = "Asly Rivas";
let montoCompra = 26000000;
let msg = cliente + " realizo una compra por $ " + montoCompra;
console.log(msg);

//La plantilla nos permite concatenar datos y mostrar valores que estan almacenados de una forma mas sencilla

//Usamos los backsticks `` (alt+96)

let msgPlantillaLiteral = `El cliente ${cliente} realizo una compra por $ ${montoCompra} `;
console.log(msgPlantillaLiteral);

//DOM: Significa Document Object Model, Es una estructura de objetos generada por el navegador la cual va represntar el HTML actual. Lo que hace el DOM es transformar el HTML en objetos. Cada etiqueta HTML se transforma para el DOM en un NODO que contiene las mismas propiedades que un objeto en JS. Esto nos permite trabajar desde el lado de la programacion con la estructura HTML.
//Con JS voy a poder acceder a esa estructura y modificarla de forma DINAMICA.
//Como funciona?: En DOM cada etiqueta HTML representa un objeto llamado NODO, todos los nodos son accesibles para JS atravez del objeto global "document".
//Pasos:

//Paso 1): Acceder al DOM
// A) ID= getElementByID

const tituloPrincipal = document.getElementById("tituloPrincipal");

// B) CLASS

const nombres = document.getElementsByClassName("nombres");
console.log(nombres);

// C) Nombre de etiqueta:

const meses = document.getElementsByTagName("li");
console.log(meses);

// D) querySelector

const queryNombre = document.querySelector(".nombres");
console.log(queryNombre);

// E) querySelectorAll:

const queryNombres = document.querySelectorAll(".nombres");
console.log(queryNombres);

//Modificar

//innerText: me permite modificar textos de algun elemento del DOM

tituloPrincipal.innerText = "Modificamos el H1 desde JS";

//innerHTML es para gregar etiquetas al HTML

const divContenedor = document.getElementById("divContenedor");

divContenedor.innerHTML = `<p> Esto es un parrafo </p>`;

divContenedor.innerHTML = `<div>
                                <p>Nombre</p>
                                <p>Precio</p>
                                <button>COMMIT</button>
                            </div>`;

//class name: Me permite agregar un nombre de clase.

tituloPrincipal.className = "titulo";

//Agrego nodos

const contenedor = document.getElementById("contenedor");
const parrafo = document.createElement("p");
parrafo.innerText = "Esto es un parrafo";
parrafo.className = "titulo";
