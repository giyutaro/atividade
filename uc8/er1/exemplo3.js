// sistema para um radar de velocidade

//variaveis
let velocidade;

//entrada
velocidade = 99;

//processamento/saida
if (velocidade > 110){
    console.log("voce foi multado!!!!")
}
else if (velocidade > 100 && velocidade < 110){
    console.log("voce esta sendo notificado por andar acima do limite")
}
else {
    console.log("voce esta dentro do limite de velocidade")
}