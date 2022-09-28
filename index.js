// packages and connections 
const db = require('./db/connection');
const inquirer = require('inquirer');
require('console.table');

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
        .then((answers) => {
            // Switch statement to handle if user selects from initialPrompt choices
            switch (answers.employment) {
                case 'View All Departments':
                    viewAllDepartments();
                    break;
            
                default:
                    break;
            }
        })
}

initialPrompt();