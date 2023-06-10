class Persona5{
    protected nombre:string;
    protected edad:number;

    constructor{nombre:string,edad:number}(
        this.nombre=nombre;
        this.edad=edad;
    )

    imprimir(){
        console.log(`Nombre ${this.nombre}`)
        console.log(`edad ${this.edad}`)
    }        
}




  class Empleado extends Persona5{
    private sueldo:number;
    constructor(nom:string,edad:number,sueldo:number){
        super();
        this.sueldo=sueldo;
    }
    imprimir(){
        super.imprimir()
        console.log()
    }

  }