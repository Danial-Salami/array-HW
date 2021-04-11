/*flat an array of arrays*/
const array = [0, 1, 2, [3, [44, 78]]];

function func(arr) {
    console.log(arr.flat(Infinity));
}
func(array)