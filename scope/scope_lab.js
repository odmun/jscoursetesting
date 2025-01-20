// Ámbito global
var globalVar = "Soy una variable global";
let globalLet = "También soy global, pero con ámbito de let";
const globalConst = "Soy una constante global";


{
// Ámbito de bloque
var blockVar = "Soy un var con ámbito de bloque";
let blockLet = "Soy un let con ámbito de bloque";
const blockConst = "Soy un const con ámbito de bloque";
}
// Alcance global
console.log(globalVar); // Salida: "Soy una variable global"
console.log(globalLet); // Salida: "También soy global, pero con alcance de let"
console.log(globalConst); // Salida: "Soy una constante global"