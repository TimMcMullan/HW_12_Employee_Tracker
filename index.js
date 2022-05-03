// Packages 
const inquirer = require("inquirer");
const mySQL2 = require("mySQL2");
const employees = [];
const cTable = require('console.table');
const db = require("./db");
const { inherits } = require("util");
const connection = require("./connection");

// find employee function
const findEmp = `SELECT *
FROM employee e
LEFT JOIN role r ON (e.erole_id = r.role_id)
LEFT JOIN department d ON (d.dept_id = r.department_id)`;
const params = [req.body.review, req.params.id];
db.query(findEmp, (err, result) => {
    if (err) {
        res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
        res.json({
            message: 'Unexecutable'
        });
    } else {
        res.json({
            message: 'success',
            data: req.body
        });
        console.log(results);
    }
});

// SELECT role.title, role.role_id, department.dept_name, role.salaryFROM roleJOIN department ON role.department_id = department.dept_id;
// then my function:
// const findRoles = () => {
//     db.query(`SELECT role.title, role.role_id, department.dept_name, role.salary
//     FROM role
//     JOIN department ON role.department_id = department.dept_id;`, function(err, results){
//         console.table(results);
//     }) ;
// }