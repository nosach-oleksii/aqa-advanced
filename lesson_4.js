let globalVar = "Ця змінна доступна скрізь"
console.log(globalVar)
const
var

function great() {
    var message = "Привіт"
    console.log(message)
}
great()
console.log(message)

function bar() {
    if (true) {
        var a = 1;
        let b = 2;
    }
    console.log(a)

}
bar()