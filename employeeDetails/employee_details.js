// Array de objetos que contiene los detalles de los empleados
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    //... Se pueden añadir más registros de empleados aquí
];

// Función para mostrar todos los empleados
function displayEmployees() {
    // Mapea los empleados a una cadena HTML que muestra sus detalles
    const totalEmployees = employees.map((employee) => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    
    // Inserta la cadena HTML en el elemento con el ID 'employeesDetails'
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Función para calcular el total de los sueldos de todos los empleados
function calculateTotalSalaries() {
    // Reduce el array de empleados para sumar todos los sueldos
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    
    // Muestra una alerta con el total de los sueldos
    alert(`Total Salaries: $${totalSalaries}`);
}

// Función para mostrar los empleados del departamento de RRHH
function displayHREmployees() {
    // Filtra los empleados que pertenecen al departamento de RRHH
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    
    // Mapea los empleados filtrados a una cadena HTML que muestra sus detalles
    const hrEmployeesDisplay = hrEmployees.map((employee) => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    
    // Inserta la cadena HTML en el elemento con el ID 'employeesDetails'
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Función para buscar un empleado por su ID
function findEmployeeById(employeeId) {
    // Encuentra el empleado con el ID especificado
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    
    // Si se encuentra el empleado, muestra sus detalles
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = 
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        // Si no se encuentra el empleado, muestra un mensaje de error
        document.getElementById('employeesDetails').innerHTML = 'No se ha encontrado ningún empleado con este ID';
    }
}

// Función para buscar empleados por su especialización
function findEmployeeSpecialization(specialization) {
    // Filtra los empleados que tienen la especialización especificada
    const specializedEmployees = employees.filter(employee => employee.specialization === specialization);
    
    // Mapea los empleados filtrados a una cadena HTML que muestra sus detalles
    const specializedEmployeesDisplay = specializedEmployees.map((employee) => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`
    ).join('');
    
    // Inserta la cadena HTML en el elemento con el ID 'employeesDetails'
    document.getElementById('employeesDetails').innerHTML = specializedEmployeesDisplay;
}