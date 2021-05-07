INSERT INTO department (name) 
VALUES ('Sales'), ('Engineering'), ('Finance'), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES  ('Sales Lead', '100000', "1"), 
        ('Salesperson', '80000', '1'), 
        ('Lead Engineer', '150000', '2'), 
        ('Accountant', '125000', '3'), 
        ('Legal Team Lead', '250000', '3'), 
        ('Lawyer', '190000', '3'), 
        ('Software Engineer', '120000', '2');

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES  ('John', 'Doe', '1', '3'),
        ('Mike', 'Chan', '2', '3'),
        ('Ashley', 'Rodriguez', '1', '1'),
        ('Kevin', 'Tupik', '3', '1'),
        ('Malia', 'Brown', '3', '1'),
        ('Sarah', 'Lourd', '4', null),
        ('Tom', 'Allen', '2', null),
        ('Tanner', 'Galal', '4', '3');

