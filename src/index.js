let nomeDoHeroi = "Reyna"
let xpDoHeroi = 7500
let nivel = 0
console.log("digite o nome do seu herói: " + nomeDoHeroi)
console.log("quantidade de XP atual: " + xpDoHeroi)

if(xpDoHeroi <= 1000){
    nivel = "Ferro"
    console.log("Seu XP atual é menor ou igual a 1000")
} else if(xpDoHeroi >= 1001 && xpDoHeroi <= 2000){
    nivel = "Bronze"
    console.log("Seu xp atual está entre 1001 e 2000")
} else if(xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
    nivel = "Prata"
    console.log("Seu xp atual está entre 2001 e 5000")
} else if(xpDoHeroi >= 5001 && xpDoHeroi <= 7000){
    nivel = "Ouro"
    console.log("Seu xp atual está entre 5001 e 7000")
} else if (xpDoHeroi >= 7001&& xpDoHeroi <= 8000){
    nivel = "Platina"
    console.log("Seu xp atual está entre 7000 e 8000")
} else if (xpDoHeroi >= 8001&& xpDoHeroi <= 9000){
    nivel = "Ascendente"
    console.log("Seu xp atual está entre 8001 e 9000")
} else if(xpDoHeroi >= 10001){
    nivel = "Radiante"
    console.log("Seu xp atual é maior que 10000")
}
    
console.log("O herói de nome: " + nomeDoHeroi + " está no nível " + nivel)