// Array para almacenar los libros
const books = [];

// Función para agregar un libro
function addBook() {
    // Obtiene los valores de los campos de entrada
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;

    // Verifica que todos los campos estén completos
    if (bookName && authorName && bookDescription && pagesNumber) {
        // Crea un objeto libro con los valores ingresados
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        // Agrega el libro al array de libros
        books.push(book);
        // Muestra todos los libros actualizados
        showBooks();
        // Limpia los campos de entrada
        clearInputs();
    } else {
        // Muestra una alerta si algún campo está incompleto
        alert('Por favor, complete todos los campos correctamente.');
    }
}

// Función para mostrar todos los libros
function showBooks() {
    // Mapea los libros a una cadena HTML que muestra sus detalles
    const booksDiv = books.map((book, index) => `
        <h1>Número de libro: ${index + 1}</h1>
        <p><strong>Nombre del libro: </strong>${book.name}</p>
        <p><strong>Nombre del autor:</strong> ${book.authorName}</p>
        <p><strong>Descripción del libro:</strong> ${book.bookDescription}</p>
        <p><strong>Número de páginas:</strong> ${book.pagesNumber} página(s)</p>
        <button onclick="deleteBook(${index})">Eliminar</button>
    `);
    // Inserta la cadena HTML en el elemento con el ID 'books'
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Función para eliminar un libro
function deleteBook(index) {
    // Elimina el libro del array en el índice especificado
    books.splice(index, 1);
    // Muestra todos los libros actualizados
    showBooks();
}

// Función para limpiar los campos de entrada
function clearInputs() {
    // Limpia el valor de cada campo de entrada
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}