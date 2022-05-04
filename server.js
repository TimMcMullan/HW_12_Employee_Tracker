const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require("inquirer");
const res = require('express/lib/response');

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
            name: 'userInput'
        },
    ])
        .then(() => {
            if (data = "View All Employees") {
                console.log("This is the if statement");
            } else if 
                (data = "Add Employee") {
                    console.log = ("Add Employee statement");
                } else {
                    console.log = ("out of options");
                };
            });
};

            //         else if (userInput != "View All Employees") {
            //             res.json({
            //                 message: 'Option not available'
            //             });
            //           }  else {
            //                 allEmployees();
            //             };
            //         }
            //     );
            // };


//             someVar = [];

//             var allEmployees = function () {
//                 db.query(`SELECT *
// FROM employee e
// LEFT JOIN role r ON (e.erole_id = r.role_id)
// LEFT JOIN department d ON (d.dept_id = r.department_id)`, function (err, results) {
//                     allEmployeesOutput(results);
//                 })
//             };
//             function allEmployeesOutput(value) {
//                 someVar = value;
//                 // console.log(someVar[0]);
//                 console.log("it worked!");
//                 return;
//             };


            const init = () => {
                promptuser()
                    // .then((answers) => {
                    .then((userInput) => {
                        console.log("function invoked");
                        // answer.userInput = "View All Employees";
                        // allEmployees();
                    }
                    );
                };
            init();