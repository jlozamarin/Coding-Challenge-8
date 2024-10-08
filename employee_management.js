
//Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
            return `${this.name} - Position: ${this.position}, Salary: $${this.salary}, Department: ${this.department}`; 
        }
    }

// Task 2: Create a Department Class
class Department {
    constructor(name) {
        this.name = name; 
        this.employees = []; 
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getDepartmentSalary() {
        //return the total salary of all employees in the department
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }

    // Task 4: Handle Bonuses for Managers
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => 
            total + employee.salary + (employee.bonus || 0), 0
        );
    }  
}


// Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }
    getDetails() {
        return `${super.getDetails()} - Bonus: $${this.bonus}`;
    }
}

// Task 5: Create and Manage Departments and Employees

// Departments
let finance = new Department("Finance");
let marketing = new Department("Marketing");

// New Employees & Managers
let isabella = new Manager("Isabella Moore", 100000, "Finance Manager", "Finance", 10000);
let jesenia = new Employee("Jesenia Chatman", 80000, "Digital Marketing Associate", "Marketing");
let brianna = new Employee("Brianna Deaubler", 70000, "Marketing Researcher", "Marketing");

// Add employees to departments
finance.addEmployee(isabella);
marketing.addEmployee(jesenia);
marketing.addEmployee(brianna);

// Total salary of the department
console.log(`Total salary for Finance department: $${finance.getDepartmentSalary()}`); //Output: Total salary for Finance department: $100000
console.log(`Total salary with bonuses for Finance: $${finance.calculateTotalSalaryWithBonus()}`); //Output: Total salary with bonuses for Finance: $110000

console.log(`Total salary for Marketing Department: $${marketing.getDepartmentSalary()}`); //Output: Total salary for Marketing Department: $150000
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`); //Output: Total salary with bonuses for Marketing: $150000
