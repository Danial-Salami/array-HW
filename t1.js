/*a function to delete an item by index*/
function deleteByIndex(arr, index) {

    var filtered = arr.filter(function(value, indx, array) {
        return indx !== index;

    })
    return filtered
}
let array = ["a", "b", "c", "asd", "aaaaasd", "afg"]
console.log(deleteByIndex(array, 4))