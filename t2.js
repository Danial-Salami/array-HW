/*a function to combine two or more arrays and sort the final array*/
let mainArr = []
var hege = ["1", "Lone"];
var stale = ["Emil", "2", "Linus"];
var kai = ["10"];

function func(...arr) {
    return mainArr.concat(...arr).sort((a, b) => a < b);
}
console.log(func(hege, stale, kai))