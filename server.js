const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

console.log("What would you like to do?");

const promptuser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        }
    ])
}




someVar = [];

let allEmployees = db.query(`SELECT *
FROM employee e
LEFT JOIN role r ON (e.erole_id = r.role_id)
LEFT JOIN department d ON (d.dept_id = r.department_id)`, function (err, results) {
    allEmployeesOutput(results);
});
function allEmployeesOutput(value) {
    someVar = value;
    console.log(someVar);
    return;
}
// console.log(someVar);
