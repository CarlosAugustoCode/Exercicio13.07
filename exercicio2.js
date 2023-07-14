let prompt = require("prompt-sync")()

let week = prompt("Digite um número de 1 à 7: ")

switch (week) {
    case "1":
        console.log("Segunda-feira")
        break;
    case "2":
        console.log("Terça-feira")
        break;
    case "3":
        console.log("Quarta-feira")
        break;
    case "4":
        console.log("Quinta-feira")
        break;
    case "5":
        console.log("Sexta-feira")
        break;
    case "6":
        console.log("Sábado")
        break;
    case "7":
        console.log("Domingo")
        break;
    default:
        console.log("Não Identificado")
        break;
}
