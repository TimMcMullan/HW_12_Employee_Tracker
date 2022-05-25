INSERT INTO 
    department (dept_name, dept_id)
VALUES
    ("Accounting", 1),
    ("Engineering", 2),
    ("Human Resources", 3),
    ("Operations", 4),
    ("Sales", 5);

INSERT INTO 
    role (title, salary, department_id, e_role)
VALUES  
    ("Padawan", 40000, 1),
    ("Apprentice", 35000, 2),
    ("Hinchman", 60000, 2),
    ("Journeyman", 55000, 1),
    ("OG", 80000, 1),
    ("KingPen", 85000, 2);

INSERT INTO 
    employee (first_name, last_name, erole_id, e_manager)
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
    ("Freddy", "Krueger", 1)
    -- **TM - keep for future useII
    -- ON DUPLICATE KEY UPDATE
    --     employee_id=VALUES(first_name, last_name, erole_id, e_manager)
