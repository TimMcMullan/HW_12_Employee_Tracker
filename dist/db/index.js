
const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    viewDepartments() {
        return this.connection.promise().query(
            "SELECT dept_id AS 'Dept ID', dept_name AS Department FROM department"
        );
    }
    viewRoles() {
        return this.connection.promise().query(
            // Need to adjust schema so different roles are associated with different departments 
            "SELECT title AS 'Job Title', salary AS salary, role_id AS 'Role ID' FROM role"
        );
    }
    viewEmployees() {
        // Need to add manager
        return this.connection.promise().query(
            "SELECT employee.employee_id AS ID, employee.first_name AS First, employee.last_name AS Last, role.title AS 'Job Title', department.dept_name AS 'Dept',role.salary AS 'Salary' FROM employee LEFT JOIN role ON (employee.erole_id = role.role_id) LEFT JOIN department ON(department.dept_id = role.department_id)"
        );
    }
    addDepartment(newdept) {
        var query = `INSERT INTO department (dept_name) VALUES ("${newdept}")`
        return this.connection.promise().query(query
        );
    }
    viewManagers() {
        return this.connection.promise().query(
            "SELECT dept_id, first_name, last_name, FROM role WHERE dept_id = 4"
        );
    }
    createEmployee() {
        return this.connection.promise().query(
            "SELECT * FROM employee e LEFT JOIN role r ON(e.erole_id = r.role_id) LEFT JOIN department d ON(d.dept_id = r.department_id)"
        );
    }
    deleteEmployee (employee_id) {
        return this.connection.promise().query(
            "DELETE FROM employee WHERE employee_id =?",employee_id
        );
    }
    updateEmployeeManager() {
        return this.connection.promise().query(
            "SELECT * FROM employee e LEFT JOIN role r ON(e.erole_id = r.role_id) LEFT JOIN department d ON(d.dept_id = r.department_id)"
        );
    }
    viewbullshit() {
        return this.connection.promise().query(
            "SELECT * FROM employee e LEFT JOIN role r ON(e.erole_id = r.role_id) LEFT JOIN department d ON(d.dept_id = r.department_id)"
        );
    }
    addNewRole(newJobName, newJobSalary, deptOfNewRole) {
            var query = `INSERT INTO role (title, salary, department_id) VALUES ("${newJobName}","${newJobSalary}","${deptOfNewRole}")`;
            console.log(query);
            return this.connection.promise().query(query
            );
    }
    removeRole() {
        return this.connection.promise().query(
            "SELECT * FROM employee e LEFT JOIN role r ON(e.erole_id = r.role_id) LEFT JOIN department d ON(d.dept_id = r.department_id)"
        );
    }
    removeDepartment() {
        return this.connection.promise().query(
            "SELECT * FROM employee e LEFT JOIN role r ON(e.erole_id = r.role_id) LEFT JOIN department d ON(d.dept_id = r.department_id)"
        );
    }
    updateEmployeeRole(roleId, employeeId) {
        return this.connection.promise().query(
            "UPDATE employee SET erole_id = ? WHERE employee_id = ?", [roleId, employeeId]
        )
    }
}

module.exports = new DB(connection);
