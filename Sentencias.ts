function sentencias(params : number):void{
	let param:boolean= params==1?true:false;
    if(!param){
        return;
    }
    console.log("------------- Ciclos -------------------");
    let iter: number = 0;
    let str2: string = "DO WHILE\n";
    do {
        iter++;
        if (iter > 0 && iter <= 5) {
            str2 = str2 + "\tCINCO VECES ESTO\n";
        }
        if (iter > 5 && iter <= 10) {
            if (iter == 6) {
                str2 = str2 + "\t";
            }
            str2 = str2 + iter + " ";
            if (iter == 10) {
                str2 = str2 + "\n";
            }
        }
        if (iter > 10 && iter <= 15) {
            if (iter == 11) {
                str2 = str2 + "\t";

            }
            str2 = str2 + (iter + 1) + " ";
        }
    } while (iter < 15 && param);
    console.log(str2);

    console.log('------------ WHILE ANIDADO ---------------');
    iter = 0;
    let iter2: number = 0;
    while (iter < 5 && param) {
        iter2 = 0;
        console.log("TABLA DEL " + iter);
        while (iter2 < 5) {
            console.log(iter + " x " + iter2 + " = " + (iter * iter2) + "\n");
            iter2++;
        }
        iter++;
    }

    console.log('------------ FOR ANIDADOS ---------------');
    for (let i: number = 0; i < 10 && param; i++) {
        let output: string = ' ';
        for (let j: number = 0; j < 10 - i; j++) {
            output = output + ' ';
        }
        for (let k: number = 0; k <= i; k++) {
            output = output + '* ';
        }
        console.log(output);
    }

    let ifs : number = 0;
    if (10 - 15 >= 0 && 44.44 == 44.44) {
        ifs--;
    }
    else if(false || false){
        ifs--;
    }
    else {
        if (15 + 8 == 22 - 10 + 5 * 3 - 4 && 13 * 0 > -1) {
            if (10.0 != 11.0 - 1.01) {
                ifs = 100;
            }
            else {
            	console.log(" ");
            }
        }
        else {
        	console.log(" ");
        }
    }
    console.log('If: ', ifs);
}

function ternario(n : number, m1 : number) : string{
	let m:boolean= m1==1?true:false;
	let Aux1:number= n == 2 ? 30 : 40;
    let Aux2:number= n == 1 ? 20 : Aux1;
    let val1: number = n == 0 ? 10 : Aux2;
    console.log(val1 == 40 && m ? "Correcto Ternario 1" : "Incorrecto Ternario1");
    let Aux3:string=val1 == 40 ? "Correcto Ternario 2" : "Incorrecto Ternario 2";
    let Aux4:string=val1 != 40 ? "Incorrecto Ternario2" :Aux3 ;
    return Aux4;
}

function switch_(n: number): void {
    switch (n) {
        case 0:
            {console.log('Switch 1 malo');}
        case 3:{
        	let aux:string=ternario(-1, 1);
            console.log(aux);
            sentencias(0);
        	}
        case 1:
            {
            //forIn_forOf();
            CONSOLE.LOG("FOR OF");
            }
        case 2:
            {sentencias(1);}
        default:
            {console.log('Switch 1 bueno');}
    }
}

function main(){
	switch_(1);
	switch_(3);
	switch_(2);
    switch_(4);
}
