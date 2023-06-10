
class Persona2{
    nombre:string;
    edad:number;

    constructor(a:string, b:number){
        this.nombre=a;
        this.edad=b
    }

    imprimir(){
        console.log(`el Nombre: ${this.nombre} y edad: ${this.edad}`)
    }
}

let persona:Persona2;
persona = new Persona2('Juancho',23);
persona.imprimir()


class Dato{
    private valor:number=0;
    public tirar(){
        this.generar();
    }

    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }

    public imprimir(){
        console.log(`Valor: ${this.valor}`);
    }
}

let dato1 = new Dato();

dato1.tirar();

dato1.imprimir();



class Persona3{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre ${this.nombre} y edad ${this.edad}`)
    }
}

let persona3:Persona3;
persona3 = new Persona3('Juancho',23);
persona3.imprimir();




