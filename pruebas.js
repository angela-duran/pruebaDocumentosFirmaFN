
var arr1 = ["1", "2", "3", "3", "3", "3", "4"];
var arr2 = ["a", "b", "c", "c", "c", "c", "d"]
var arr3 = ["A", "B", "C", "C", "C", "C", "D"]
var sliced1 = []
var sliced2 = []
var sliced3 = []

var maxLines = 3 // Lineas maximas de pagarés por documento
var slicedDoc = [];
var count = 0
var isDuplicated
var duplicatedPosition = 0

for (var i = 0; i < arr1.length; i += maxLines) {
    sliced1.push([arr1.slice(i, i + maxLines)]);
    sliced2.push([arr2.slice(i, i + maxLines)]);
    sliced3.push([arr3.slice(i, i + maxLines)]);
}
console.table(sliced1);
console.table(sliced2);
console.table(sliced3);


for (var i = 0; i < sliced1.length; i++) {
    console.log("Documento " + (i + 1) + ":")
    console.table(sliced1[i])
    for (var j = 0; j < maxLines; j++) {
        if (sliced1[j] == sliced1[j+1]) {
            console.log("Repetido")
        }
        else{
            console.log("Hay un valor distinto")
        }
    }
}



// for (var i = 0; i < sliced1.length; i++) {
//     sliced1[i + 1].forEach(y => {
//         isDuplicated = (sliced1[i].indexOf(y) != -1);
//     });
//     console.log("*" + isDuplicated)

// }








