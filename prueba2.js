var pagares = ["1", "2", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4"];
var pagare = [];
var actualPdf = []
var maxLines = 3 // Lineas maximas de pagarés por documento
var groupStart = 0
var nextPagare = 0
var length = 1
var pagaresImpresos = []

for (var j = 0; j < pagares.length; j++) {

    if (groupStart != 0) {
        j = groupStart
        groupStart = 0
    }
    nomPagareActual = pagares[j] 
    console.log("Registro a insertar: " + nomPagareActual)

    if (pagares[j + 1] == undefined) { // TODO: FALLA
        length++
        if (pagare.length + length < maxLines) {
            console.log("se añade " + nomPagareActual)
            pagare.push(nomPagareActual)
        }
        else {
            // Si no entra entero
            // se hacen grupos con el maximo de lineas y se insertan 
            console.log("Los registros no entran en un solo documento. Enviando el actual y creando uno nuevo.")
            actualPdf = pagare
            pagaresImpresos.push(actualPdf)
            console.log("Documento exportado con pagares con nombres: " + pagare)
            pagare = []
            for (var k = 0; length > 0; k++) {
                console.log("se añade " + nomPagareActual)
                pagare.push(nomPagareActual)
                length--
                if (pagare.length == maxLines) {
                    console.log("Los registros no entran en un solo documento. Enviando el actual y creando uno nuevo.")
                    actualPdf = pagare
                    pagaresImpresos.push(actualPdf)
                    console.log("Documento exportado con pagares con nombres: " + pagare)
                    pagare = []

                }
                if(pagare.length==0){
                    console.log("Fin del proceso")
                    actualPdf = pagare
                    pagaresImpresos.push(actualPdf)
                    console.log("Documento exportado con pagares con nombres: " + pagare)
                    pagare = []
                    break;
                }
            }
            
        }
        
    } else {


        if (nomPagareActual === pagares[j + 1]) {
            length++
        }
        if (nomPagareActual != pagares[j + 1] && pagares[j + 1] != undefined) {
            // si el siguiente es distinto, es fin de grupo
            // hacer break 
            groupStart = j + 1

            // se rellena el array con el grupo si entra entero

            for (var k = 0; k < length; k++) {
                if (pagare.length + length < maxLines) {
                    console.log("se añade " + nomPagareActual)
                    pagare.push(nomPagareActual)
                }
                else {
                    // Si no entra entero
                    // se hacen grupos con el maximo de lineas y se insertan 
                    console.log("Los registros no entran en un solo documento. Enviando el actual y creando uno nuevo.")
                    actualPdf = pagare
                    pagaresImpresos.push(actualPdf)
                    console.log("Documento exportado con pagares con nombres: " + pagare)
                    pagare = []

                    for (var k = 0; length > 0; k++) {
                        console.log("se añade " + nomPagareActual)
                        pagare.push(nomPagareActual)
                        length--
                        if (pagare.length == maxLines) {
                            console.log("Los registros no entran en un solo documento. Enviando el actual y creando uno nuevo.")
                            actualPdf = pagare
                            pagaresImpresos.push(actualPdf)
                            console.log("Documento exportado con pagares con nombres: " + pagare)
                            pagare = []

                        }
                    }

                }


            }
        }
    }
}
console.table(pagaresImpresos)
// si no cabe, empezar nuevo pagare y meter hasta que length sea 0

//e insertar
// si cabe dentro de pagare, meter
// si no cabe, empezar nuevo pagare y meter hasta que length sea 0
// setear lenght de grupo a 1
// el siguiente grupo empieza en j+1

// if ((pagare.length + length) <= maxLines) {
//     for (var k = 0; k < length; k++) {
//         pagare.push(nomPagareActual)
//         console.log("se añade " + nomPagareActual)
//     }
// }
// else {
//     console.log("Los registros no entran en un solo documento. Enviando el actual y creando uno nuevo.")
//     actualPdf = pagare
//     pagaresImpresos.push(actualPdf)
//     console.log("Documento exportado con pagares con nombres: " + pagare)
//     pagare = []
//     for (var k = 0; k < length; k++) {
//         console.log("se añade " + nomPagareActual)
//         if (pagare.length < maxLines) {
//             pagare.push(nomPagareActual)
//         }
//         else {
//             console.log("Los registros no entran en un solo documento. Enviando el actual y creando uno nuevo.")
//             actualPdf = pagare
//             pagaresImpresos.push(actualPdf)
//             console.log("Documento exportado con pagares con nombres: " + pagare)
//             pagare = []
//             pagare.push(nomPagareActual)
//             console.log("se añade " + nomPagareActual)
//         }

//     }
//     break;
// }

//     }
// if (pagares[j + 1] == undefined) {
//     break;
// }
// }
//     }
// }
// console.log("Resumen de los documentos exportados con los nombres de pagaré que contienen: ")
// console.table(pagaresImpresos)

