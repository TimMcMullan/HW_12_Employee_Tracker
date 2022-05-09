// Packages 
const inquirer = require("inquirer");
const db = require("./dist/db");
require("console.table");

const promptuser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [{
                name: 'View All Departments',
                value: 'VIEW_ALL_DEPARTMENTS'
            }, 
                {
                name: 'View All Roles',
                value: 'VIEW_ALL_ROLES'
            }, 
                { 
                name: 'View All Employees',
                value: 'VIEW_ALL_EMPLOYEES'
            }, 
            {
                name: 'Add Department',
                value: 'ADD_DEPARTMENT'
            },
            {
                name: 'Add Role',
                value: 'ADD_ROLE'
            },             
            {
                name: 'Add Employee',
                value: 'ADD_EMPLOYEE'
            },
            {
                name: 'Update Employee Role',
                value: 'UPDATE_EMPLOYEE_ROLE'
            }],
        },
    ]).then(res => {
        let choice = res.choice;
        switch(choice) {
            case "VIEW_ALL_DEPARTMENTS": 
            db.viewDepartments().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());
            break;
            case "VIEW_ALL_ROLES": 
            db.viewRoles().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());
            break;            
            case "VIEW_ALL_EMPLOYEES": 
            db.viewEmployees().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());;
            break;
            
            case "ADD_DEPARTMENT": 
            adddept();
            break;
            
            case "ADD_ROLE":
            addRole();
            break;

            case "ADD_EMPLOYEE": 

            db.XXXXXXXXX().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());;
            db.viewRole();
            break;
            
            case "**#ADD_ROLES": 
            db.viewRoles().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());;
            db.findEmployees();
            break;
            case "UPDATE_EMPLOYEE_ROLE": 

            db.updateEmployeeRole().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());;
            db.findEmployees();
            break;


        }
    })
  
};

promptuser();

const adddept = () => {
    inquirer.prompt([
        {
        type: 'input',
        name: 'adddept',
        message: 'What is the name of the new department?'
        }]).then(res => {
            db.addDepartment(res.adddept).then(() => {
                console.log("Department added");
                promptuser();
            })
        })
    }

const updateErole = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'updateErole',
            message: 'Enter employee ID'
        }
    ])
}

const addRole = () => {
    inquirer.prompt([
    {
        type: 'input',
        name: 'newJobName',
        message: 'Enter the name or title for the new role: ',
        value: 'NEW_ROLE'
    },
    {
        type: 'integer',
        name: 'newJobSalary',
        message: 'Enter the salary of the new position: ',
        value: 'NEW_SALARY'
    },
    {
        type: 'integer',
        name: 'deptOfNewRole',
        message: 'Enter the department where the new job will be assigned: ',
        value: 'NEW_DEPT'
    }]).then(res => {
        db.addNewRole(res.addRole).then(() => {
            console.log("New Role added");
            promptuser();
        })
    })
}
