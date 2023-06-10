class PilaEnteros{
    private vec:number[]=[];

    insertar(x:number){
        this.vec.push(x);
    }

    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}

class PilasString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}


let pila = new PilaEnteros();
pila.insertar(23);
pila.insertar(28);
pila.insertar(2);
console.log(pila.extraer());


let pila2 = new PilasString();
pila2.insertar('23');
pila2.insertar('12');
pila2.insertar('2');
console.log(pila2.extraer());

class PilaGenerica<T>{
        private vec:T[]=[];
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}

let pila3 = new PilaGenerica<number>();
pila3.insertar(23);
pila3.insertar(28);
pila3.insertar(2);
console.log(pila3.extraer());


let pila4 = new PilaGenerica<string>();
pila2.insertar('23');
pila2.insertar('12');
pila2.insertar('14');
console.log(pila2.extraer());   
