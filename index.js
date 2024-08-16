//Definir o nome do herói
let NomeHeroi = "Wey"
//Definir o nível de XP
let XP = 7500

//determinando os niveis de cada xp
if (XP < 1000) {
    console.log("O herói de nome " + NomeHeroi + " está no nível: FERRO")
} else if ( (XP >= 1001) && (XP <= 2000)) {
    console.log("O herói de nome " + NomeHeroi + " está no nível: BRONZE ")
} else if ( (XP >= 2001) && (XP <= 5000)) {
    console.log("O herói de nome " + NomeHeroi + " está no nível: PRATA ")
} else if ( (XP >= 6001) && (XP <= 7000)) {
    console.log("O herói de nome " + NomeHeroi + " está no nível: OURO ")
} else if ( (XP >= 7001) && (XP <= 8000)) {
    console.log("O herói de nome " + NomeHeroi + " está no nível: PLATINA ")
} else if ( (XP >= 8001) && (XP <= 9000)) {
    console.log("O herói de nome " + NomeHeroi + " está no nível: ASCENDENTE ")
} else if ( (XP >= 9001) && (XP <= 10000)) {
    console.log("O herói de nome " + NomeHeroi + " está no nível: IMORTAL ")
} else if (XP > 10000) {
    console.log("O herói de nome " + NomeHeroi + " está no nível: RADIANTE ")
}