let entrada = prompt("Ingresar nombre de Alumno , teclear ESC para salir");
const alumnos = [];
while (entrada != 'ESC') {
    alumnos.push(entrada);
    entrada = prompt("Ingresar nombre de Alumno , teclear ESC para salir");
}
for (let index = 0; index < alumnos.length; index++) {

    console.log(index + " Alumno " + alumnos[index]);

}