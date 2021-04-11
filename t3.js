/*remove duplicates of array*/
let chars = ['A', 'B', 'A', 'C', 'B', 'D', 'A', 'A'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});
console.log(uniqueChars)