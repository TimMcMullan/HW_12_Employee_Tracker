INSERT INTO 
    department (dept_name, dept_id)
VALUES
    ("Accounting", 1),
    ("Engineering", 2),
    ("Human Resources", 3),
    ("Operations", 4),
    ("Sales", 5);

INSERT INTO 
    role (title, salary, department_id)
VALUES  
    ("Padawan", 40000, 1),
    ("Hinchman", 60000, 2),
    ("OG", 80000, 3),
    ("KingPen", 85000, 4);

INSERT INTO 
    employee (first_name, last_name, erole_id)
VALUES
    ("Darth", "Vader", 3),
    ("The", "Joker", 1),
    ("Hans", "Gruber", 1),
    ("Hannibal", "Lector", 2),
    ("Hans", "Landa", 4),
    ("Keyser", "Soze", 3),
    ("Jason", "Vorhees", 2),
    ("Tyler", "Durden", 4),
    ("Norman", "Bates", 3),
    ("Michael", "Myers", 2),
    ("Freddy", "Krueger", 1);

-- INSERT INTO
--     manager (first_name, last_name, mdept_id)
-- VALUES
--     ("Hans", "Landa", 4),
--     ("Tyler", "Durden", 5),
