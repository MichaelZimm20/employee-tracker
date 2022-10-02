// packages and connections 
const dbConnection = require('./db/connection');
const inquirer = require('inquirer');
require('console.table');
const viewAll = require('./lib/viewAll');
const addUpdate = require('./lib/addUpdate');

// Initial prompt for app
function initialPrompt() {
    inquirer
        .prompt({
            type: 'list',
            name: 'employment',
            message: 'What would you like to do?',
            choices: [
                'View All Departments', 
                'View All Roles', 
                'View All Employees', 
                'Add a Department', 
                'Add a Role',
                'Add a Employee',
                'Update an Employee Role'
            ]
        })
        .then(answers => {
            // Switch statement to handle if user selects from initialPrompt choices
            switch (answers.employment) {
                case 'View All Departments':
                    // console.log('answers', answers);
                    viewAllDepartments();
                    break;
                case 'View All Roles':
                    // console.log('answers', answers);
                    viewAllRoles();
                    break;
                case 'View All Employees':
                    // console.log('answers', answers);
                    viewAllEmployees();
                    break;
                case 'Add a Department':
                    // console.log('answers', answers);
                    newDepartment();
                    break;
                default:
                    break;
            }
        })
}

//--------------------------- START: SHOW ALL DEPARTMENTS, ROLES, EMPLOYEES-----------------------//

// function to display all the departments
function viewAllDepartments() {
     const dept = viewAll.allDepartments();
   
        dept.then((res) => {
            console.log(`

            =======================
                All Departments
            =======================
            `);
            console.table(res[0]);
            initialPrompt();
        })
    };
   
//function to display all the roles 
function viewAllRoles() {
    const role = viewAll.allRoles();
    role.then((res) => {
        console.log(`

        =================
            All Roles
        =================
        `);
        console.table(res[0]);
        initialPrompt();
    })
    
};

function viewAllEmployees() {
    const employee = viewAll.allEmployees();
    employee.then((res) => {
        console.log(`

        =================
          All Employees
        =================
        `);
        console.table(res[0]);
        initialPrompt();
    })
}
//--------------------------- END: SHOW ALL DEPARTMENTS, ROLES, EMPLOYEES-----------------------//


//--------------------------- START: ADD DEPARTMENT, ROLE, EMPLOYEE. UPDATE EMPLOYEE ROLE -----------------------//

function newDepartment() {
    const dept = inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the department?'
        }
    ])
    
    addUpdate.addDepartment(dept);
    console.log(`Added ${dept.name} to the database!\n`);
    initialPrompt();
   
    // const add = addUpdate.addDepartment();
//    add.then((res) => {
//        console.log(`Added ${dept.name} to the database!\n`);
//    })
}




initialPrompt();