function resolverFunçãoSegundoGrau(a,b,c){
    let delta = b*b-4*a*b


    if(delta<0){
        console.log("A aquação não tem raizes reais")      
}

 else if (delta===0){
 console.log("A equação em  raizes reais.")

 let x1 = (-b+Math.sqrt(delta))/(2*a)

 }

else{
    let x1 =(-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b - Math.sqrt(delta))/(2*a)
console.log("A equação tem duas raizes reais:, " , x1,"e x2= ",x2)

}

}

resolverFunçãoSegundoGrau(16, -16, 16)
resolverFunçãoSegundoGrau(2,  -3,  4)