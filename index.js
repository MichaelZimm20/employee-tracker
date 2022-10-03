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
                case 'Add a Role':
                    // console.log('answers', answers);
                    newRole();
                    break;
                case 'Add a Employee':
                    // console.log('answers', answers);
                    newEmployee();
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

// Add new Department
async function newDepartment() {
    const dept = await inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the name of the department?'
        }
    ])
    
    addUpdate.addDepartment(dept);
    console.log(`Added ${dept.name} to the database!\n`);
    initialPrompt();
}

// Add new role
async function newRole() {
    const departments = await viewAll.allDepartments();
    console.log(departments);
    const validDepartments = departments[0].map(department => { 
       return { name: department.name, 
        value: department.id}});

    console.log(validDepartments)
    const role = await inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the name of the role?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the role?'
        },
        {
            name: 'department_id',
            type: 'list',
            message: 'Which department does the role belong to?',
            choices: validDepartments
        }
    ]);
    console.log(role)
    await addUpdate.addRole(role);
    console.log(`Added ${role.title} to the database!\n`);
    initialPrompt();
}

// Add new employee
async function newEmployee() {
    const roles = await viewAll.allRoles();
    const employees = await viewAll.allEmployees();

   
    const validRoles = roles[0].map(role => { 
       return { name: role.title, 
        value: role.id}});


    const validEmployees = employees[0].map(employee => {
        return {
            name: employee.first_name + ' ' + employee.last_name,
            value: employee.id
        }
    })    


   
    const employee = await inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: "What is the employee's first name?"
        },
        {
            name: 'last_name',
            type: 'input',
            message: "What is the employee's last name?"
        },
        {
            name: 'role_id',
            type: 'list',
            message: "What is the employee's role?",
            choices: validRoles
        },
        {
            name: 'manager_id',
            type: 'list',
            message: "Who is the employee's manager?",
            choices: validEmployees
        }
        
    ]);
    console.log(employee)
    await addUpdate.addEmployee(employee);
    console.log(`Added ${employee.first_name} ${employee.last_name} to the database!\n`);
    initialPrompt();
}



// Update employee role
async function upRole() { 
    
}


initialPrompt();