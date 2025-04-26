const listaTarea = document.querySelector('ol');

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

const botonColor = document.getElementById('cambiar-color');

botonColor.addEventListener('click', () => {
	const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
	document.body.style.backgroundColor = colorAleatorio
});
