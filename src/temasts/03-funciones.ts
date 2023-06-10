function suma():void{
    
    console.log(3+5)
}

function suma2(a:number,b:number):number{
   return a+b
}


function suma3(a:number,b:number):string{
    return `$[a+b]`
 }
 

 interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
 }

function calcular(mascota:Mascotas,x:number):void{
    mascota.edad = x;

    console.log(mascota)
} 

const nuevaMascota:Mascotas={
    nombre:'Juan',
    edad:3,
    mostrarEdad(){
        console.log('la edad es: ',this.edad);
    },
}

calcular(nuevaMascota,5);

function multiplicar(n1:number,n2?:number,n3=3):number{
    
    let tem = n1 * n3;
    return tem;
}

console.log()
console.log(multiplicar(3,0,2))
console.log(suma2(3,5))

const funSumar=function(valor:number,valor2:number):number{
    return valor+valor2;
}

console.log(funSumar(12,5));
