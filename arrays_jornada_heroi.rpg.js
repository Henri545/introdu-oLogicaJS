let inventário = ["Espada de Madeira", "Escudo", "Poção de vida", "Machado" ];
console.timeLog("seu inventário inicial:", inventário)
let novoItem = "ovo de dragão"
inventário.push(novoItem);
console.log("vocé encontrou um baú! novo item adicionado ao seu inventário", inventário );
console.log("um goblin apareceu! prepare-se para a batalha.");
let itemUsado2 = inventário [0]; 
console.log("vocé ataca o goblin com sua", itemUsado2);
let itemUsado3 = inventário[3] 
console.log("vocé ataca o goblin com o", itemUsado3);
console.log("vocé derrotou o goblin e continua sua jornada,"); 
console.log(inventário.length)