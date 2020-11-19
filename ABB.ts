
type Estudiante = {
    nombre : string,
    edad : number,
    esmayor : number,
    registro : number
};

type Nodo = {
    izq : Nodo,
    der : Nodo,
    estudiante : Estudiante
};

type Arbol = {
    raiz : Nodo
};

function insertar(nodo1 : Nodo, estudiante1 : Estudiante) : Nodo{
    if(nodo1 == null){
        let aux:Nodo=null;
        aux.izq=null;
        aux.der=null;
        aux.estudiante=estudiante1;
        nodo1=aux;
        //nodo1 = {izq : null, der : null, estudiante : estudiante1};
    }
    else if(estudiante1.registro < nodo1.estudiante.registro){
        nodo1.izq = insertar(nodo1.izq, estudiante1);
    }
    else {
        nodo1.der = insertar(nodo1.der, estudiante1);
    }
    return nodo1;
}

function printEstudiante(estudiante : Estudiante) : void{
    console.log('Nombre: ', estudiante.nombre, '\t Edad: ', estudiante.edad, ' Registro: ', estudiante.registro, '\t Es Mayor: ', estudiante.esmayor==0?"false":"true");
}

function preOrden(raiz : Nodo) : void{
    if(raiz != null){
        printEstudiante(raiz.estudiante);
        preOrden(raiz.izq);
        preOrden(raiz.der);
    }
}

function postOrden(raiz : Nodo) : void{
    if(raiz != null){
        postOrden(raiz.izq);
        postOrden(raiz.der);
        printEstudiante(raiz.estudiante);
    }
}

function inOrden(raiz : Nodo) : void{
    if(raiz != null){
        inOrden(raiz.izq);
        printEstudiante(raiz.estudiante);
        inOrden(raiz.der);
    }
}

function cambio(raiz : Nodo, registro : number, nuevoNombe : string) : void{
    if(raiz == null){
        console.log('Indice no encontrado: ', registro);
        return;
    }

    if(raiz.estudiante.registro == registro){
        console.log('Encontrado:' + registro);
        raiz.estudiante.nombre = nuevoNombe;
        return;
    }
    else if(registro < raiz.estudiante.registro){
        cambio(raiz.izq, registro, nuevoNombe);
        return;
    }
    cambio(raiz.der, registro, nuevoNombe);
}

function insertarGlobal(arbola:Arbol,nombre1 : string, edad1 : number, registro1 : number) : void{
    let estudiantea : Estudiante = null;
    //{nombre : nombre, edad : edad, registro : registro};
    estudiantea.nombre=nombre1;
    estudiantea.edad=edad1;
    estudiantea.registro=registro1;
    estudiantea.esmayor=edad1>=18?1:0;
    let aux:Nodo=null;
    aux=insertar(arbola.raiz, estudiantea);
    arbola.raiz = aux;
}

function inOrdenMayores(raiz : Nodo) : void{
    if(raiz != null){
        inOrdenMayores(raiz.izq);
        if(raiz.estudiante.esmayor==1){
            printEstudiante(raiz.estudiante);
        }
        inOrdenMayores(raiz.der);
    }
}

function main(){
    let arbol : Arbol = null;
    console.log("-------- INSERTANDO ---------");
    insertarGlobal(arbol,'Carlo', 21, 10);
    insertarGlobal(arbol,'Oscar', 17, 5);
    insertarGlobal(arbol,'Pablo', 18, 12);
    insertarGlobal(arbol,'Luisa', 26, 9);
    insertarGlobal(arbol,'Karla', 20, 3);
    insertarGlobal(arbol,'Erick', 13, 14);
    console.log("--------- PREORDEN ----------");
    preOrden(arbol.raiz);
    console.log("--------- POSTORDEN ----------");
    postOrden(arbol.raiz);
    console.log("--------- INORDEN ----------");
    inOrden(arbol.raiz);
    console.log("--------- INORDEN MAYORES ----------");
    inOrdenMayores(arbol.raiz);
    console.log("--------- CAMBIANDO --------");
    cambio(arbol.raiz,3,"idnuevo"); 
    cambio(arbol.raiz,4,"no encontrado"); 
    inOrden(arbol.raiz);
} 
/**** Arbol binario de busqueda
type Estudiante = {
    nombre : string,
    edad : number,
    //esMayor : boolean,
    registro : number
};

type Nodo = {
    izq : Nodo,
    der : Nodo,
    estudiante : Estudiante
};

type Arbol = {
    raiz : Nodo
};

function insertar(nodo1 : Nodo, estudiante1 : Estudiante) : Nodo{
    if(nodo1 == null){
        let aux:Nodo=null;
        aux.izq=null;
        aux.der=null;
        aux.estudiante=estudiante1;
        nodo1=aux;
        //nodo1 = {izq : null, der : null, estudiante : estudiante1};
    }
    else if(estudiante1.registro < nodo1.estudiante.registro){
        nodo1.izq = insertar(nodo1.izq, estudiante1);
    }
    else {
        nodo1.der = insertar(nodo1.der, estudiante1);
    }
    return nodo1;
}

function printEstudiante(estudiante : Estudiante) : void{
    console.log('Nombre: ', estudiante.nombre, '\t Edad: ', estudiante.edad, 'Registro: ', estudiante.registro);
}

function preOrden(raiz : Nodo) : void{
    if(raiz != null){
        printEstudiante(raiz.estudiante);
        preOrden(raiz.izq);
        preOrden(raiz.der);
    }
}

function postOrden(raiz : Nodo) : void{
    if(raiz != null){
        postOrden(raiz.izq);
        postOrden(raiz.der);
        printEstudiante(raiz.estudiante);
    }
}

function inOrden(raiz : Nodo) : void{
    if(raiz != null){
        inOrden(raiz.izq);
        printEstudiante(raiz.estudiante);
        inOrden(raiz.der);
    }
}

function cambio(raiz : Nodo, registro : number, nuevoNombe : string) : void{
    if(raiz == null){
        console.log('Indice no encontrado: ', registro);
        return;
    }

    if(raiz.estudiante.registro == registro){
        console.log('Encontrado:' + registro);
        raiz.estudiante.nombre = nuevoNombe;
        return;
    }
    else if(registro < raiz.estudiante.registro){
        cambio(raiz.izq, registro, nuevoNombe);
        return;
    }
    cambio(raiz.der, registro, nuevoNombe);
}

function insertarGlobal(arbola:Arbol,nombre1 : string, edad1 : number, registro1 : number) : void{
    let estudiantea : Estudiante = null;
    //{nombre : nombre, edad : edad, registro : registro};
    estudiantea.nombre=nombre1;
    estudiantea.edad=edad1;
    estudiantea.registro=registro1;
    let aux:Nodo=null;
    aux=insertar(arbola.raiz, estudiantea);
    arbola.raiz = aux;
}

function inOrdenMayores(raiz : Nodo) : void{
    if(raiz != null){
        inOrdenMayores(raiz.izq);
        //if(raiz.estudiante.esMayor){
            printEstudiante(raiz.estudiante);
        //}
        inOrdenMayores(raiz.der);
    }
}

function main(){
    let arbol : Arbol = null;
    console.log("-------- INSERTANDO ---------");
    insertarGlobal(arbol,'Carlo', 21, 10);
    insertarGlobal(arbol,'Oscar', 17, 5);
    insertarGlobal(arbol,'Pablo', 18, 12);
    insertarGlobal(arbol,'Luisa', 26, 9);
    insertarGlobal(arbol,'Karla', 20, 3);
    insertarGlobal(arbol,'Erick', 13, 14);
    console.log("--------- PREORDEN ----------");
    preOrden(arbol.raiz);
    console.log("--------- POSTORDEN ----------");
    postOrden(arbol.raiz);
    console.log("--------- INORDEN ----------");
    inOrden(arbol.raiz);
    console.log("--------- INORDEN MAYORES ----------");
    inOrdenMayores(arbol.raiz);
    console.log("--------- CAMBIANDO --------");
    cambio(arbol.raiz,3,"idnuevo"); 
    cambio(arbol.raiz,4,"no encontrado"); 
    inOrden(arbol.raiz);
} 

*/




