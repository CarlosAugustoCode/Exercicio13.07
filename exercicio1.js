let prompt = require("prompt-sync")()

let user = prompt("Digite o nome do usuário: ")
let password = prompt("Digite a senha: ")

if (user == "admin" && password == "senha123") {
    console.log("Login Feito com Sucesso!")
} else {
    console.log("Login e Senha Incorretos!")
}