-- Adding Department table data
INSERT INTO department (name) 
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

-- Adding role table data
INSERT INTO role (title, salary, department_id) 
VALUES 
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

-- Adding employees table data
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, null),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, null),
    ('Kevin', 'Tupik', 4, 3),
    ('Kunal', 'Singh', 5, null),
    ('Malia', 'Brown', 7, null),
    ('Sarah', 'Lourd', 6, 5),
    ('Tom', 'Allen', 8, 6);
