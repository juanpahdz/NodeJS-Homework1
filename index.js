const { cursos } = require('./cursos.js')
const express = require('express')
// comandos

const opciones_inscribir = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'x'
    },
}
// Delcaracion de funciones
const argv = require('yargs')
    .command('inscribir', 'inscribirte a una materia', opciones_inscribir)
    .argv

let mostrarCursos = (id) => {
    if (id <= cursos.length) {
        setTimeout(() => {
            let resultado = console.log("El curso de " + cursos[id - 1].nombre +
                " Tiene como id " + cursos[id - 1].id + " con una duración de "
                + cursos[id - 1].duracion + " horas y un valor de " + cursos[id - 1].valor
                + " en pesos Colombianos")
            return resultado
        }, 2000)
    }
    else {
        console.log("Si quieres ver la descripción de un curso en específico coloca el comando --id y el id del curso")
        console.log("Si te quieres inscribir usa el comando inscribir")
        console.log("Selecciona un curso disponible")
        setTimeout(() => {
            mostrarCursos(1)
        }, 2000)
        setTimeout(() => {
            mostrarCursos(2)
        }, 4000)
        setTimeout(() => {
            mostrarCursos(3)
        }, 6000)
    }

}


// Ejecución 

if (argv.x) {
    let crearArchivo = (nombre, id, cedula) => {
        if (id <= cursos.length) {
            let text = 'El nombre del estudiantes es ' + nombre + '\n' + 'se quiere inscribir al curso con id ' + id + '\n' + 'su cedula es ' + cedula

            const app = express()
            const port = 3000
            app.get('/', (req, res) => res.send(text))
            app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        }
        else {
            mostrarCursos()
        }
    }

    crearArchivo(argv.n, argv.i, argv.x)
}

else {
    mostrarCursos(argv.id)

}

// Servicio
