var tareas= [];
var lista = document.getElementById("lista");



function anadirTarea(){
	var inputTarea= document.getElementById("inputTarea");
}
//funcion constructor para añadir tareas

// Constructor para generar una nueva tarea. 
function tareas(title) {
	this.title, title.toLowerCase();
	
//Método para imprimir tareas en html
tareas.prototype.toHMTL = function () {
	var html = '';
	html += this.title.toUpperCase() + '<br>';
	html += '<br><br>';
	return HTML;
}
//Función que une todas las tareas guardadas en el array Tareas
function mergeHTML (){
	var html = '';
	for (i=0 ; i<Tareas.length; i++){
		html += anadirTarea[i].toHTML();
	}
	return html;
}


//función que imprime una tarea luego de ingresarlo
function printHTML(html){
	lista.innerHTML = '';
	lista.innerHTML = html;
}


// Cuando hacen click en el boton de colocar tarea, crea una nueva tarea y la añade al array de tareas
var lista=document.getElementById("inputTarea");
inputTarea.onclick = function() {
	var nuevatarea = prompt('Ingrese tarea');
	var T  = new colocarTareas(title);
	tareas.push(T);
	printHTML(T.toHTML());
};
//Para mostrar la informacion en pantalla
function mostrarInfo(){
	res.forEach(function(element){
		res.innerHTML(element.id + "<b>"+ element.title +"<br>"  );
		(element.completed + "<br>"+ <li>);
	}
	var Tar = document.getElementById("inputTarea").value;
}


