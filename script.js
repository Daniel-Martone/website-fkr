function oi(num){
    console.log(numero)
    numero = num += 1
    oi(numero)
}
function oi2(num){
    console.log(numero+2)
    numero = num ** 1.06
    oi(numero)
}
var numero;
oi(1.01)