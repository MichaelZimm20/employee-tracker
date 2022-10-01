DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;

-- creating table for departments
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
); 

-- creating table for employee role 
CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INTEGER NOT NULL
);

-- creating table for employee
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NULL,
    manager_id INTEGER NULL, 
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id)
);