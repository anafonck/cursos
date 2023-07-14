
// Ex 02
// function solucao(lista) {
//     //seu codigo aqui

//     let valorGuardado = 0;
//     let totalDeDias = lista.length;

//     for (let item of lista) {
//         valorGuardado += item;
//     }

//     const mediaValorGuardado = valorGuardado / totalDeDias;

//     console.log(mediaValorGuardado);
// }

// let entrada = [1, 2, 10, 25, 16, 86, 93, 64];

// solucao(entrada);

// -------------------------------------------------------------------------------------------------------------------

//Ex 03

// function solucao(numero, limiteInferior, limiteSuperior) {

//     if (numero >= limiteInferior && numero <= limiteSuperior) {
//         console.log("PERTENCE");
//     } else {
//         console.log("NAO PERTENCE")
//     }
// }

// solucao(100, 10, 20);

// -------------------------------------------------------------------------------------------------------------------

// Ex 04

// function solucao(min, max, valores) {
//     //seu codigo aqui
//     let valoresPermitidos = [];

//     for (let valor of valores) {
//         if (valor >= min && valor <= max) {
//             valoresPermitidos.push(valor);
//         }
//     }

//     console.log(valoresPermitidos);
// }

// solucao(10, 50, [1, 4, 10, 15, 16, 26, 59, 50, 49]);

//--------------------------------------------------------------------------------------------------------------

// // Ex 05
// function solucao(carta) {
//     //seu codigo aqui
//     const ordemDeForca = ["Q", "J", "K", "A", "2", "3"];


//     function verificarManilha(carta) {
//         let indice = ordemDeForca.indexOf(carta) + 1;
//         let manilha = ordemDeForca[indice]
//         console.log(manilha);
//     }


//     if (carta == "Q") {

//         verificarManilha(carta);

//     } else if (carta == "J") {
//         verificarManilha(carta);

//     } else if (carta == "K") {

//         verificarManilha(carta);

//     } else if (carta == "A") {

//         verificarManilha(carta);

//     } else if (carta == "2") {

//         verificarManilha(carta);

//     } else if (carta == "3") {
//         console.log("Q")
//     }

// }

// solucao("3")
//------------------------------------------------------------------------------------------------------------

//Ex 06
// function solucao(lista) {
//     // seu codigo aqui

//     let maioresDeIdade = [];

//     for (let participante of lista) {
//         if (participante >= 18) {
//             maioresDeIdade.push(participante)
//         }
//     }

//     if (maioresDeIdade < 1) {
//         console.log("CRESCA E APARECA")
//     } else {

//         let adultoMaisJovem = Math.min(...maioresDeIdade);

//         console.log(adultoMaisJovem);
//     }
// }

// solucao([14, 18, 27, 81, 67]);

//---------------------------------------------------------------------------------------------------------------

//Ex 07 

function solucao(texto) {
    // Seu codigo aqui

    let separadores = [" ", ",", ".", ";", ":", "!", "?", "||"];

    function contarPalavras(texto) {
        for (let separador of separadores) {
            let contaPalavras = texto.trim()

        }
    }


    let separador = ajustaTexto.replaceAll(" ", "|")

    console.log(separador)

    const numeroDePalavras = separador.split("|");


    console.log(numeroDePalavras.length);

}

solucao("Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ");

//-----------------------------------------------------------------------------------------------------------------
//Ex 08

// function solucao(numeros) {
//     // seu codigo aqui
//     const numeroJogadores = numeros.length;

//     let somaNumeros = 0;


//     for (let numero of numeros) {
//         somaNumeros += numero;
//     }

//     let posicaoJogadores = somaNumeros % numeroJogadores;


//     if (posicaoJogadores == 0) {
//         console.log(numeroJogadores);
//     } else {
//         console.log(posicaoJogadores)
//     }

// }

// let arr = [1, 2, 3, 4]

// solucao(arr)

//-----------------------------------------------------------------------------------------------------------------
//Ex 09

// function solucao(precos) {
//     //seu codigo aqui

//     let valorTotal = 0;

//     if (precos.length >= 3) {
//         let itemMaisBarato = Math.min(...precos);

//         let desconto = (itemMaisBarato / 100) * 50;



//         for (let preco of precos) {
//             valorTotal += preco;
//         }

//         const valorComDesconto = valorTotal - desconto;

//         console.log(valorComDesconto);
//     } else {
//         for (let preco of precos) {
//             valorTotal += preco;
//         }

//         console.log(valorTotal)
//     }


// }



// let comprados = [150, 50];

// solucao(comprados);

//----------------------------------------------------------------------------------------------------------------

//Ex 10

// const jogadores = [
//     {
//         "nome": "Herman",
//         "jogada": 1
//     },
//     {
//         "nome": "Rhodes",
//         "jogada": 0
//     },
//     {
//         "nome": "Beach",
//         "jogada": 0
//     },
//     {
//         "nome": "Laurel",
//         "jogada": 0
//     },
//     {
//         "nome": "Beatrice",
//         "jogada": 0
//     },
//     {
//         "nome": "Alison",
//         "jogada": 0
//     },
//     {
//         "nome": "Saundra",
//         "jogada": 0
//     },
//     {
//         "nome": "Klein",
//         "jogada": 0
//     }
// ]
// //Exercício 10

// let jogadaZero = [];

// let jogadaUm = [];

// let vencedor;

// for (let jogador of jogadores) {

//     if (jogador.jogada == 0) {
//         jogadaZero.push(jogador.nome)
//     } else if (jogador.jogada == 1) {
//         jogadaUm.push(jogador.nome)
//     }
// }

// if (jogadaZero.length > 1 && jogadaUm.length > 1) {
//     console.log("NINGUEM")
// } else if (jogadaZero.length == 1) {
//     vencedor = jogadaZero[0]
//     console.log(vencedor.toString())
// } else if (jogadaUm.length == 1) {
//     vencedor = jogadaUm[0]
//     console.log(vencedor.toString())
// }

//---------------------------------------------------------------------------------------------
//Ex 11 - taximetro


// function solucao(min, km) {
//     //seu codigo aqui

//     const valorKm = km * 70;

//     const valorMin = min * 50;

//     let valorViagem = 0;

//     function descontarKm(km) {
//         const valorKmTotal = km * 70;

//         const kmMais = km - 10;

//         const descontoKm = valorKmTotal - (kmMais * 70);

//         const valorKmDesconto = descontoKm + (kmMais * 50);

//         return valorKmDesconto;
//     }


//     function descontarMin(min) {

//         const valorMinTotal = min * 50;

//         const minMais = min - 20;

//         const descontoMin = valorMinTotal - (minMais * 50);

//         const valorMinDesconto = descontoMin + (minMais * 30);

//         return valorMinDesconto;
//     }


//     if (km > 10 && min > 20) {

//         valorViagem = (descontarKm(km) + descontarMin(min)).toFixed(0);

//         console.log(valorViagem);

//     } else if (km > 10 && min < 20) {

//         valorViagem = (descontarKm(km) + valorMin).toFixed(0);

//         console.log(valorViagem);

//     } else if (km < 10 && min > 20) {

//         valorViagem = (descontarMin(min) + valorKm).toFixed(0);

//         console.log(valorViagem);
//     } else {
//         valorViagem = (valorKm + valorMin).toFixed(0);

//         console.log(valorViagem);
//     }

// }


// solucao(25, 11.5)

//------------------------------------------------------------------------------------------------------------------
//Ex 12

// function processData(input) {
//     //Enter your code here
//     function formatarPalavra(palavra) {
//         let primeiraLetra = palavra[0];
//         let demaisLetras = palavra.slice(1);

//         let palavraFormatada = primeiraLetra.toUpperCase() + demaisLetras.toLowerCase();

//         return palavraFormatada;

//     }



//     let primeiraLetra = input[0];

//     let demaisLetras = input.slice(1);


//     if (input == (input.toUpperCase())) {
//         console.log(input.toLowerCase());

//     } else if ((primeiraLetra == primeiraLetra.toLowerCase()) && (demaisLetras == demaisLetras.toUpperCase())) {
//         console.log(formatarPalavra(input));

//     } else if ((primeiraLetra == primeiraLetra.toUpperCase()) && (demaisLetras != demaisLetras.toLowerCase())) {
//         console.log(input)
//     } else {
//         console.log(input)
//     }


// }

// processData("palavra")