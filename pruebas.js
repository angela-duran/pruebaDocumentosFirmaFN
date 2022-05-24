
var arr1 = ["1", "2", "3", "3", "3", "3", "4"];
var arr2 = ["a", "b", "c", "c", "c", "c", "d"]
var arr3 = ["A", "B", "C", "C", "C", "C", "D"]
var sliced1 = []
var sliced2 = []
var sliced3 = []

var maxLines = 3 // Lineas maximas de pagarés por documento
var slicedDoc = [];
var count;

for (var i = 0; i < arr1.length; i += maxLines) {
    if(arr1[i]==arr1[i+1]){
        sameID++
    }
    if (isDuplicated == false) {
        sliced1.push([arr1.slice(i, i + maxLines)]);
        sliced2.push([arr2.slice(i, i + maxLines)]);
        sliced3.push([arr3.slice(i, i + maxLines)]);
    }
}


console.table(sliced1);
console.table(sliced2);
console.table(sliced3);

var isDuplicated

for (var i = 0; i < sliced1.length; i++) {
    sliced1[i + 1].forEach(y => {
        isDuplicated = (sliced1[i].indexOf(y) != -1);
    });
    console.log("*" + isDuplicated)

}








