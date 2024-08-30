function mediaAluno (n1,n2,n3){
let media = (n1+n2+n3)/3   
  return 'sua media é', media 
}

let notasPatrik = mediaAluno(3,5,8)
console.log("é media do patrick é:"  ,notasPatrik)  

let notasjurema = mediaAluno(8,8,9)
console.log("A media da jurema é:", notasjurema)

function funcaoPrimeiroGrau(a,b,x){
    return a*x*b
}

a = 2
b = 3
x = 5

resultado = funcaoPrimeiroGrau(a,b,x)
console.log("o resultado é: ", resultado)