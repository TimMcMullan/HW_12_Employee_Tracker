
const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    viewDepartments() {
        return this.connection.promise().query(
            "SELECT `Dept Name` FROM department"
        );
    }
    viewRoles() {
        return this.connection.promise().query(
            "SELECT title, salary FROM role"
        );
    }
    viewEmployees() {
        return this.connection.promise().query(
            "SELECT * FROM employee e LEFT JOIN role r ON(e.erole_id = r.role_id) LEFT JOIN department d ON(d.dept_id = r.department_id)"
        );
    }
    addDepartment(newdept) {
        console.log("addDepartment function invoked");
        console.log(newdept);
        console.log(typeof newdept);
        var query = `"INSERT INTO department (dept_name) VALUES (${newdept})"`
        return this.connection.promise().query(query
            // "INSERT INTO department (dept_name) VALUES (" + newdept + ")"
            // "INSERT INTO department SET ?", department
            // "INSERT INTO department (dept_name) VALUES (')"
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
    removeEmployee() {
        return this.connection.promise().query(
            console.log("this is the end of functionality")
            // "SELECT * FROM employee e LEFT JOIN role r ON(e.erole_id = r.role_id) LEFT JOIN department d ON(d.dept_id = r.department_id)"
        );
    }
    updateEmployeeRole() {
        return this.connection.promise().query(
            "SELECT * FROM employee e LEFT JOIN role r ON(e.erole_id = r.role_id) LEFT JOIN department d ON(d.dept_id = r.department_id)"
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
    createRole() {
        return this.connection.promise().query(
            "SELECT * FROM employee e LEFT JOIN role r ON(e.erole_id = r.role_id) LEFT JOIN department d ON(d.dept_id = r.department_id)"
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
}

module.exports = new DB(connection);
