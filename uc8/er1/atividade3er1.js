let listadepecas = ['filtro de ar','roda','pneu']

listadepecas.push('disco de freio')
listadepecas.push('motor')
listadepecas.push('amortecedor')

if (listadepecas.lenght < 10){
    console.log('é possível cadastrar mais peças')
}
else{
    console.log('não há mais espaço na caixa')
}

let peso = 150
if (peso < 100){
    console.log('a peça deve pesar no mínimo 100g')
}
else {
    console.log('a peça possui o peso adequado')
}

let nomepeca = "freio"

if (nomepeca.length > 3){
    console.log ('o nome da peca esta adequado para o cadastro')
}
else if(nomepeca.length == 0){
    console.log ('o nome da peça da nao pode ser vazio')
}
else {
    console.log('o nome da peça deve ter mais de 3 carcteres, digite o nome adequado')
}