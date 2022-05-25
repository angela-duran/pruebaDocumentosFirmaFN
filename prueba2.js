
var arr1 = ["1", "2", "3", "3", "3", "3", "4"];
var arr2 = ["a", "b", "c", "c", "c", "c", "d"]
var arr3 = ["A", "B", "C", "C", "C", "C", "D"]
var sliced1 = []
var sliced2 = []
var sliced3 = []


var slicedDoc = [];
var count = 0
var isDuplicated
var newGroupStart = 0
var long = 0
var newGroupEnd


var groupEnd
var counter = 0


var pagares = ["1", "2", "3", "3", "3", "3", "4"];
var pagare = [];
var actualPdf = []
var maxLines = 3 // Lineas maximas de pagarés por documento
var groupStart=0
var groupLength=0

for (var i=0; i< pagares.length; i++){
    if(groupStart!=0){ // Si en el ciclo anterior hemos completado un grupo, debe empezar desde ahí a contar de nuevo
        i=groupStart
    }
    // QUÉ PASA CUANDO EL (i+1) == undefined?
    if(pagares[i]===pagares[i+1]){
        if(pagare.length<maxLines){
            pagare.push(pagares[i])
        }else{
            // enviar a servicio para generar PDF
            actualPdf=pagare   
            pagare= []
        }
    }
    if(pagares[i] != pagares[i+1] && pagares[i+1]!=undefined){
        // nuevo bucle para ver la longitud del siguiente grupo con mismo nombre
        for (var j=0; j<pagares.length; j++){
            if(pagares[j]===pagares[j+1] && pagares[j+1]==undefined){
                length++
            }
            if(pagares[j]!=pagares[j+1]&& pagares[j+1]!=undefined){
                if(pagare.length+)
            }
        }
    }

}


// Subdividir en arrays y hacer inserción en PDF cada vez que se llena
for(var i=0; i < pagares.length; i++) {
    if (i===0){
        pagare.push(pagares[0]);
    }
    else{
        if(pagare.length <= maxLines){
            if(pagares[i+1] === pagares[i]){
                pagare.push(pagares[i]);
            }else{

                pagare= []
                pagare.push(pagares[i])
            }
        }else{
            // ya no caben más líneas, enviar el pdf e insertar en nuevo pagare[]
            actualPdf.send()
            pagare=[]
            pagare.push(pagares[i])
            
        }
    }
}




// for (var i = 0; i < arr1.length; i++) {
//     if (newGroupStart != 0) {
//         i = newGroupStart
//     }
//     if (i - 1 === -1) {
//         sliced1[counter].push(arr1[i])
//     }else
//     {
//         if (arr1[i]==arr1[i+1]){
//             if (sliced1[counter].length!=maxLines){
//                 sliced1[counter].push(arr1[i])
//             }
//             if ()
//         }
//     }
    
// }

// if (arr1[i - 1] == undefined || arr1[i - 1] != arr1[i] && arr1[i + 1] != arr1[i]) {
//     if (sliced1[counter] != undefined) {

//         if (sliced1[counter].length < maxLines) {
//             sliced1[counter] += arr1[i
//             }
//     }
//     else {
//         counter++
//         sliced1[counter] += arr1[i]
//     }
// }
// if (arr1[i + 1] != arr1[i]) {
//     newGroupStart = i + 1
//     for (var j = newGroupStart; j < arr1.length; j++) {
//         if (arr1[j] == arr1[j + 1]) {
//             newLong++
//         }
//         if (arr1[j] != arr1[j + 1] && arr1[j + 1] != undefined) {
//             if ((sliced1[counter].length + newLong) < maxLines) {
//                 sliced1[counter].push(newGroupStart, newGroupStart + newLong)
//                 groupStart = newGroupStart + newLong + 1
//             } else {
//                 console.log("se empieza un nuevo grupo")
//                 counter++
//                 groupStart = newGroupStart
//             }
//         }
//     }

    // sliced1[counter].push(arr1[i])
    // if (arr1[i] == arr1[i + 1]) {
    //     if (sliced1[counter].length < maxLines) {
    //         sliced1[counter].push(arr1[i])
    //     }
    //     else {
    //         counter++
    //         sliced1[counter].push(arr1[i])
    //     }
    // } else {
    //     newGroupStart = i + 1

    //     for (var j = newGroupStart; j < arr1.length; j++) {
    //         if (arr1[j] != arr1[j + 1] && arr1[j + 1] != undefined) {
    //             newLong++
    //         }
    //     }
    //     if (newLong > 0 && (newGroupStart + newLong) > maxLines) {
    //         sliced1.push(arr1.slice(newGroupStart, (i + 1) + maxLines));
    //     }

    // }

//}
//console.table(sliced1)
//}



