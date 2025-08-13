import { connection } from "./connection.js";

export function dobros(dados) {

    let numeros = dados.dobros


    let dobros = []
    for (let item of numeros) {
        dobros.push(item * 2);
    }
    return dobros
}