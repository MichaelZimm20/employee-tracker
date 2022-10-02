// packages and connections 
const dbConnection = require('../db/connection');


// ES6 class
class viewAllQueries {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    // get and return all departments 
    allDepartments() {
        const sql = "SELECT * FROM department";
        return this.dbConnection.promise().query(sql);
    }

    // get all Roles 
    allRoles() {
        const sql = "SELECT * FROM role";
        return this.dbConnection.promise().query(sql);
    }

    // get all employees 
    allEmployees() {
        const sql = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary AS salary, CONCAT(employee.first_name, ' ', employee.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON department.id = role.department_id LEFT JOIN employee emp ON emp.id = employee.manager_id";

        return this.dbConnection.promise().query(sql);
    }
}



// Exports queries that View all departments, roles, employees
module.exports = new viewAllQueries(dbConnection);


