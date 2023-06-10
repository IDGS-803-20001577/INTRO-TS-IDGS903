interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
}

const alumno:Alumno={
    nombre: 'Mario',
    matricula: 20001577,
    email: 'mario@gmail.com'
}

let mascotas=['perro','gato','perico']
mascotas[1] = 'sshh'

let tem:(number|string)[]=[]

tem.push('nombre')
tem.push(1234)

console.log(tem)
console.log(mascotas)
console.log(alumno)