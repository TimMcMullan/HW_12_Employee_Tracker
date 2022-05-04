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
                name: 'View All Employees',
                value: 'VIEW_ALL_EMPLOYEES'
            }, 
            {
                name: 'Add Employee',
                value: 'ADD_EMPLOYEE'
            }, 
            {
                name: 'View All Roles',
                value: 'VIEW_ALL_ROLES'
            }, 
            {
                name: 'Add Role',
                value: 'ADD_ROLE'
            }, 
            {
                name: 'View All Departments',
                value: 'VIEW_ALL_DEPARTMENTS'
            }, 
            {
                name: 'Add Department',
                value: 'ADD_DEPARTMENT'
            }],
        },
    ]).then(res => {
        let choice = res.choice;
        switch(choice) {
            case "VIEW_ALL_EMPLOYEES": 
            db.findEmployees().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());;
            break;
            case "ADD_EMPLOYEE": 
            db.XXXXXXXXX().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());;
            db.removeEmployee();
            break;
            case "VIEW_ALL_EMPLOYEES": 
            db.XXXXXXXXX().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());;
            db.findEmployees();
            break;
            case "VIEW_ALL_EMPLOYEES": 
            db.XXXXXXXXX().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());;
            db.findEmployees();
            break;
            case "VIEW_ALL_EMPLOYEES": 
            db.XXXXXXXXX().then(([rows]) => {
                let employees = rows;
                console.log("\n");
                console.table(employees);
              })
              .then(() => promptuser());;
            db.findEmployees();
            break;
            case "VIEW_ALL_EMPLOYEES": 
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
// SELECT role.title, role.role_id, department.dept_name, role.salaryFROM roleJOIN department ON role.department_id = department.dept_id;
// then my function:
// const findRoles = () => {
//     db.query(`SELECT role.title, role.role_id, department.dept_name, role.salary
//     FROM role
//     JOIN department ON role.department_id = department.dept_id;`, function(err, results){
//         console.table(results);
//     }) ;
// }

// const params = [req.body.review, req.params.id];
// db.query(findEmp, (err, result) => {
//     if (err) {
//         res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//         res.json({
//             message: 'Unexecutable'
//         });
//     } else {
//         res.json({
//             message: 'success',
//             data: req.body
//         });
//         console.log(results);
//     }
// });