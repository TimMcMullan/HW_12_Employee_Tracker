DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    dept_name VARCHAR(250) NOT NULL,
    dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE role (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    department_id INT NOT NULL,
    salary DECIMAL NOT NULL,
    FOREIGN KEY(department_id)
    REFERENCES department(dept_id)
);

CREATE TABLE employee (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    erole_id INT NOT NULL,
    FOREIGN KEY(erole_id)
    REFERENCES role(role_id)
);

