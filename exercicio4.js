let prompt = require("prompt-sync")()

let anoNascimento = prompt("Digite o ano de nascimento: ")

if (anoNascimento <= "2005") {
    console.log("Você é maior de idade!")
} else {
    console.log("Você é menor de idade!")
}