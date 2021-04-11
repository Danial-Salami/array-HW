/*a function to combine two or more arrays and sort the final array*/
let mainArr = []
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];

function func(...arr) {
    return mainArr.concat(...arr).sort();
}
console.log(func(hege, stale, kai))