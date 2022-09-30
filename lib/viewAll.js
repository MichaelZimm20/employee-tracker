// packages and connections 
const dbConnection = require('../db/connection');


// ES6 class
class viewAllQueries {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    // get and return all departments 
    allDepartments() {
        const sql = "SELECT department.*, name AS Departments FROM department";
        return this.dbConnection.promise().query(sql);
    }

    // get all Roles 
    allRoles() {
        const sql = "SELECT * FROM role";
        return this.dbConnection.promise().query(sql);
    }
}



// Exports queries that View all departments, roles, employees
module.exports = new viewAllQueries(dbConnection);


