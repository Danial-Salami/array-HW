/*extract number from an array*/
function func(string) {
    var numbers = string.match(/\d+/g).map(Number);

    console.log(numbers)
}
func("100Mb 200Mb 300Mb 500Mb")