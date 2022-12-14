// packages and connections 
const dbConnection = require('../db/connection');

// ES6 class
class addUpdateQueries {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    // class function adds a new department to database
    addDepartment(dept) {
        const sql = "INSERT INTO department SET ?";
        return this.dbConnection.promise().query(sql, dept);
    }
    // class function adds a new employee role to database
   async addRole(role) {
        const sql = 'INSERT INTO role SET ?';
        const params = [role.title, role.salary, role.department_id];
        // console.log("params", params);
        return this.dbConnection.promise().query(sql, role, (err,res) => {
            if (err) throw err;
        })
    }

    // class function adds a new employee to database
    async addEmployee(employee) {
        const sql = 'INSERT INTO employee SET ?';
        const params = [employee.first_name, employee.last_name];
        // console.log("employee params",params);
        return this.dbConnection.promise().query(sql, employee, (err,res) => {
            if (err) throw err;
        })
    }

    // class function updates an existing employee's role to database
    async updateRole(role) {
        const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
        const params = [role.title, role.employee];
        // console.log("role", role);
        return this.dbConnection.promise().query(sql, params, (err,res) => {
            if (err) throw err;
        })
    }
}


// Exports queries that add departments, roles, employees and updates employees role
module.exports = new addUpdateQueries(dbConnection);
