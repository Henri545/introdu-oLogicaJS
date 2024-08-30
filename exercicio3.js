function podeEstudar (concluindoEnsinoMedio,idade,cursandoOutraFaculdade){
    return concluindoEnsinoMedio && idade>=18 &&!cursandoOutraFaculdade}
    
    let concluindoEnsinoMedio = true
    let idade =20
    let cursandoOutraFaculdade = false
    let resultado = podeEstudar(concluindoEnsinoMedio,idade,cursandoOutraFaculdade)

    if(resultado){
        console.log("vocé pode entrar na faculdade")
    }
    else{
        console.log("vocé não pode entrar na faculda")
    }

