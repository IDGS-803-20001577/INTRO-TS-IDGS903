interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;

}

interface Grupo{
    grupo:string;
    year:number;
}


const alumno2:Alumno1={
    matricula1:12345,
    nombre:"Pedro",
    edad:23,
    correo:"1234@gmail.com",
    grupo:{
        grupo:"idgs",
        year:2023
    }
}

console.log('la Matricula es: $(alumno2.matricula)')
console.log('el Nombre es: $(alumno2.nombre)')
console.log('el año es: $(alumno2.grupo.year)')


const{matricula1, nombre:nom, grupo:xx}= alumno2;
const{grupo,year:anio}=xx;

console.log('la matricula es: $(matricula1)')
console.log('el nombre es: $(nom)')


const gps:string[]=['IDGS','IEMV','REDES'];

console.log(`grupo 1: ${gps[0]}`)
console.log(`grupo 1: ${gps[1]}`)
console.log(`grupo 1: ${gps[2]}`)


const[a, ,b]=gps;

console.log(`grupo 2: ${a}`)
