/* const listaTarea = document.querySelector('ol');

let localTareas = JSON.parse(localStorage.getItem('lista'));
if (localTareas !== null) {
	localTareas.forEach(tarea => {
	const nuevaTarea = document.createElement('li');
	nuevaTarea.textContent = tarea;
	listaTarea.appendChild(nuevaTarea);
	});
};

const tareas = document.querySelectorAll('li');

tareas.forEach(tarea => {
  tarea.addEventListener('click', () => {
    tarea.classList.toggle('completado');
  });
});

const botonTarea = document.getElementById('newTaskButton');
const inputNewTarea = document.getElementById('newTask');
const mensajeAnadir = document.getElementById('popupAnadirTarea');

botonTarea.addEventListener('click', () => {
	const texto = inputNewTarea.value.trim();
	if (texto !== "") {
		
		const nuevaTarea = document.createElement('li');
		nuevaTarea.addEventListener('click', () => {
			nuevaTarea.classList.toggle('completado')
		});
		
		nuevaTarea.textContent = texto;
		listaTarea.appendChild(nuevaTarea);
		
		let tareasTodoArray = JSON.parse(localStorage.getItem('lista')) || [];
		if (localTareas !== null) {
		tareasTodoArray.push(texto)}
		else {
			let listaActual = document.querySelectorAll('li');
			listaActual.forEach(l => {
				tareasTodoArray.push(l.textContent);
			});
		};
		localStorage.setItem('lista',JSON.stringify(tareasTodoArray));
		
		inputNewTarea.value = "";
		mensajeAnadir.textContent= '';
	} else {
		mensajeAnadir.textContent= 'Favor ingresar una tarea';
	};
});

const botonEliminarTarea = document.getElementById('deleteTaskButton');
const inputEliminarTarea = document.getElementById('deleteTask');
const mensajeEliminar = document.getElementById('popupEliminarTarea');

botonEliminarTarea.addEventListener('click', () => {
	const tareaEliminar = inputEliminarTarea.value.trim();
	const tareasNuevasEliminar = document.querySelectorAll('li');
	let tareasTodoArray = JSON.parse(localStorage.getItem('lista')) || [];
	if (tareaEliminar === "") {
		mensajeEliminar.textContent = 'Favor ingresar una tarea'
	} else {	
				tareasNuevasEliminar.forEach(tarea => {
				if (tarea.textContent.toLowerCase().trim() === tareaEliminar.toLowerCase()) {
					tarea.remove();
					tareasTodoArray = tareasTodoArray.filter( t => t.toLowerCase().trim() !== tarea.textContent.toLowerCase().trim())
				};
				});
				
				localStorage.setItem('lista',JSON.stringify(tareasTodoArray));
				mensajeEliminar.textContent = ""};
		inputEliminarTarea.value = '';	
});
 */
/* Cambia de color el fondo */
const botonColor = document.getElementById('cambiar-color');

botonColor.addEventListener('click', () => {
	const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
	document.body.style.backgroundColor = colorAleatorio
	localStorage.setItem("colorFondo",colorAleatorio);
    // Guardar el color en una cookie
    document.cookie = `colorFondo=${colorAleatorio}; path=/`;
});
/* 

document.addEventListener("DOMContentLoaded", () => {
	const colorguardado = localStorage.getItem("colorfondo");
	if (colorguardado) {
		document.body.style.backgroundColor = colorguardado;	
	};
})
 */
function alerta_sonido(id) {
	const sonido = document.getElementById(id)
	if (sonido) {
		sonido.currentTime = 0;
		sonido.play()
	}
}

document.addEventListener("DOMContentLoaded",function(){
	const alertas = document.querySelectorAll('.alert')
	alertas.forEach(alerta => {
		if (alerta.classList.contains('success')) {
			alerta_sonido('success')
		} else if (alerta.classList.contains('error')) {
			alerta_sonido('error')
		} else {alerta_sonido('warning')}
	});
})

const sonidoPurring = document.getElementById('cat_purring');
const imagePurring = document.querySelector('.gato_durmiendo');

imagePurring.addEventListener('mouseenter', () => {
	sonidoPurring.currentTime = 0;
	sonidoPurring.play();
})
imagePurring.addEventListener('mouseleave', () => {
	sonidoPurring.pause();
	sonidoPurring.currentTime = 0;
})