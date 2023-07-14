let prompt = require("prompt-sync")()

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))

if (numero1 < numero2 && numero2 < numero3) {
    console.log("Os números estão em ordem crescente")
} else {
    console.log("Os números não estão em ordem crescente")
}