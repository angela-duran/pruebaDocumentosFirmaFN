var pagares = ["1", "2", "3", "3", "3", "3", "4"];
var pagare = [];
var actualPdf = []
var maxLines = 3 // Lineas maximas de pagarés por documento
var groupStart = 0
var nextPagare = 0
var length = 1
var pagaresImpresos = []
for (var i = 0; i < pagares.length; i++) {
    if (groupStart != 0) { // Si en el ciclo anterior hemos completado un grupo, debe empezar desde ahí a contar de nuevo
        i = groupStart
    }
    nextPagare = i
    if (pagares[nextPagare + 1] == undefined) {
        if (pagare.length < maxLines) {
            pagare.push(pagares[i])
            actualPdf = pagare
            pagaresImpresos.push(actualPdf)
            console.log("Documento exportado con pagares con nombres: " + pagare)
            break;
        } else {
            actualPdf = pagare
            pagaresImpresos.push(actualPdf)
            console.log("Documento exportado con pagares con nombres: " + pagare)
            // Enviar pagare completo
            pagare = []
            pagare.push(pagares[i])
            actualPdf = pagare
            pagaresImpresos.push(actualPdf)
            console.log("Documento exportado con pagares con nombres: " + pagare)
            break;

        }
    } else {

        for (var j = nextPagare; j < pagares.length; j++) {
            console.log("Registro a insertar: " + pagares[j])
            if (pagares[j] === pagares[j + 1]) {
                length++
            }
            if (pagares[j] != pagares[j + 1] && pagares[j + 1] != undefined) {
                groupStart = groupStart + length
                if ((pagare.length + length) < maxLines) {
                    for (var k = 0; k < length; k++) {
                        pagare.push(pagares[j])
                    }
                }
                else {
                    console.log("Los registros no entran en un solo documento. Enviando el actual y creando uno nuevo.")
                    actualPdf = pagare
                    pagaresImpresos.push(actualPdf)
                    console.log("Documento exportado con pagares con nombres: " + pagare)
                    pagare = []
                    for (var k =0; k<length; k++){
                        console.log("se añade " + pagares[j])
                        if (pagare.length<maxLines){
                            pagare.push(pagares[j])
                        }
                        else{
                            console.log("Los registros no entran en un solo documento. Enviando el actual y creando uno nuevo.")
                            actualPdf = pagare
                            pagaresImpresos.push(actualPdf)
                            console.log("Documento exportado con pagares con nombres: " + pagare)
                            pagare = []
                            pagare.push(pagares[j])
                        }
                    }
                    break;
                }
            }
        }
    }
}
console.log("Resumen de los documentos exportados con los nombres de pagaré que contienen: ")
console.table(pagaresImpresos)

