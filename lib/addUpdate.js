// packages and connections 
const dbConnection = require('../db/connection');

// ES6 class
class addUpdateQueries {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    addDepartment(dept) {
        const sql = "INSERT INTO department SET ?";
        return this.dbConnection.promise().query(sql, dept);
    }

    addRole(role) {
        const sql = 'INSERT INTO role set ?';
        const params = [role.title, role.salary, role.department_id]
        return this.dbConnection.promise().query(sql, params, (err,res) => {
            if (err) throw err;
        })
    }
}


// Exports queries that add departments, roles, employees and updates employees role
module.exports = new addUpdateQueries(dbConnection);
