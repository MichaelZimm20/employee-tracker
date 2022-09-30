// packages and connections 
const dbConnection = require('./db/connection');
const inquirer = require('inquirer');
require('console.table');
const viewAll = require('./lib/viewAll');

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
            
                default:
                    break;
            }
        })
}


function viewAllDepartments() {
    // const department = `${all.allDepartments()}`;
    const dept = viewAll.allDepartments();
    console.table(dept);
    initialPrompt();
};

function viewAllRoles() {
    // const department = `${all.allDepartments()}`;
    const role = viewAll.allRoles();
    console.table(role);
    initialPrompt();
};


initialPrompt();