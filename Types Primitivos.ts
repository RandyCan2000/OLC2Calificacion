type Auxiliar = {
    nombre : string,
    codigo : number
};

type Curso = {
    nombre : string,
    seccion : string,
    codigo : number
};

type Asignacion = {
    aux : Auxiliar,
    curso : Curso
};


function asignar(auxilar : Auxiliar, curso : Curso) : Asignacion{
    let asignacion : Asignacion = {aux : auxilar, curso : curso};
    return asignacion;
}

function crearAuxiliar(nombre : string, codigo : number) : Auxiliar{
    let auxiliar : Auxiliar = {nombre : nombre, codigo : codigo};
    return auxiliar;
}

function crearCurso(nombre : string, seccion : string, codigo : number) : Curso{
    let curso : Curso = {nombre : nombre, seccion : seccion, codigo : codigo};
    return curso;
}

function print(asignacion : Asignacion) : void{
    if(asignacion != null){
        console.log('Codigo: ', asignacion.aux.codigo, '\tAuxiliar: ', asignacion.aux.nombre);
        console.log('Codigo: ', asignacion.curso.codigo, '\tNombre: ', asignacion.curso.nombre, '\tSeccion: ', asignacion.curso.seccion);
    }
    else{
        console.log('Asignacion es null');
    }
}

function main() : void{
	//let auxiliares : string[] = ['Cristian', 'Pavel', 'Erik', 'Carlos'];
	//let secciones : string[] = ['A', 'B+', 'B-', 'C'];
    
    let aux:Auxiliar=null;
    let curso:Curso=null;
    let asignacion:Asignacion=null;
    //Primer Registro
    aux = crearAuxiliar("Cristian", 0);
    curso = crearCurso('OLC2', "A", 0);
    asignacion = asignar(aux, curso);
    print(asignacion); 
	//Segundo Registro  
    aux = crearAuxiliar("Pavel", 1);
    curso = crearCurso('OLC2', "B+", 1);
    asignacion = asignar(aux, curso);
    print(asignacion); 
  	//Tercer Registro  
    aux = crearAuxiliar("Erik", 2);
    curso = crearCurso('OLC2', "B-", 2);
    asignacion = asignar(aux, curso);
    print(asignacion);
    //Cuarto Registro  
    aux = crearAuxiliar("Carlos", 3);
    curso = crearCurso('OLC2', "C", 3);
    asignacion = asignar(aux, curso);
    print(asignacion);
}