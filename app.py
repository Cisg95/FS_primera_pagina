from flask import Flask, render_template, request, redirect, url_for, flash
import json
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Cami1234$'
archivo_tareas = 'tareas.json'

def cargar_tarea():
    if os.path.exists(archivo_tareas):
        with open(archivo_tareas,'r') as f:
            return json.load(f)
    return []

tareas = cargar_tarea()

def guardar_tarea(tareas):
    with open(archivo_tareas,'w') as f:
        return json.dump(tareas,f)
    

@app.route("/", methods = ["GET","POST"])
def home():
    if request.method == "POST":
        nueva_tarea = request.form.get("nueva_tarea","").strip()
        if not nueva_tarea:
            flash("La tarea no puede estar vacia, añade una please","error")
        elif nueva_tarea in tareas:
            flash("La tarea existe linda","warning")
        else:
            tareas.append(nueva_tarea)
            guardar_tarea(tareas)
            flash("Tarea agregada con éxito.", "success")
            return redirect(url_for('home'))
    color_fondo = request.cookies.get('colorFondo','black')
    return render_template("index.html",tareas = tareas, color_fondo=color_fondo)

@app.route("/eliminar", methods=["POST"])
def eliminar_tarea():
    tarea_eliminar = request.form.get("tarea_a_eliminar")
    if tarea_eliminar in tareas:
        tareas.remove(tarea_eliminar)
        guardar_tarea(tareas)
    return redirect(url_for('home')) 

if __name__ == '__main__':
    app.run(debug=True)