let numeroDeAlunos = 10;
for(let contador = 0; contador <= numeroDeAlunos; contador++)
{
    if(contador == 0){
        console.log(`${contador} - ZERO`) //interpolação
        //console.log(contador + " - ZERO") //concatenação
    }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
    else {
        console.log(`${contador} - IMPAR`)
    }
}
