function performOperation(operation) {
    // Obtiene los valores de los campos de entrada
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Verifica si las entradas son números válidos
    if (!isNaN(num1) && !isNaN(num2)) {
        let result;
        // Realiza la operación según el parámetro
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            default:
                result = 'Operación no válida';
        }
        // Muestra el resultado
        displayResult(result);
    } else {
        displayResult('Por favor, ingrese números válidos');
    }
}

function add(a, b) {
    // Introduce una declaración de depuración para pausar la ejecución
    debugger;
    // Suma los números
    return a + b;
}

function multiply(a, b) {
    // Introduce una declaración de depuración para pausar la ejecución
    debugger;
    // Multiplica los números
    return a * b;
}

function divide(a, b) {
    // Introduce una declaración de depuración para pausar la ejecución
    debugger;
    // Divide los números
    if (b !== 0) {
        return a / b;
    } else {
        return 'No se puede dividir por cero';
    }
}

function displayResult(result) {
    // Muestra el resultado en el elemento de párrafo
    const resultElement = document.getElementById('result');
    resultElement.textContent = `El resultado es: ${result}`;
}