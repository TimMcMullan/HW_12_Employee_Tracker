// Packages 
const inquirer = require("inquirer");
const db = require("./dist/db");

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
                name: 'Update Employee',
                value: 'UPDATE_EMPLOYEE'
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
            // db.adddept().then(([rows]) => {
            //     let employees = rows;
            //     console.log("\n");
            //     console.table(employees);
            //   })
            //   .then(() => promptuser());
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
            case "**#VIEW_ALL_ROLES1": 
            db.viewRoles().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());;
            db.findEmployees();
            break;
            case "VIEW_ALL_EMPLOYEES1": 
            db.XXXXXXXXX().then(([rows]) => {
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
            console.log(res);
            db.addDepartment(res.adddept).then(promptuser => {
                console.log(promptuser);
                promptuser();
            })
        })
    }
