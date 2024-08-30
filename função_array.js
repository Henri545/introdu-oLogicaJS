function primeiroeultimoDivididopordois(numero){
    const primeiro = numero[0]/2
    const ultimo = numero[numero.length-1]/2
    return [ultimo,primeiro]

}
const numeros = [10,20,30,40,50]
const resultado = primeiroeultimoDivididopordois
(numeros)
console.log(resultado)