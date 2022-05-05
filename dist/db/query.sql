SELECT role.title, role.role_id, department.dept_name, role.salaryFROM roleJOIN department ON role.department_id = department.dept_id;
then my function:
const findRoles = () => {
    db.query(`SELECT role.title, role.role_id, department.dept_name, role.salary
    FROM role
    JOIN department ON role.department_id = department.dept_id;`, function(err, results){
        console.table(results);
    }) ;
}