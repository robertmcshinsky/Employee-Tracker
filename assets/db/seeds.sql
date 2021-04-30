INSERT INTO department (name) 
VALUES ('Sales'), ('Engineering'), ('Finance'), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES  ('Sales Lead', '100000', 'd_ID'), 
        ('Salesperson', '80000', 'd_ID'), 
        ('Lead Engineer', '150000', 'd_ID'), 
        ('Accountant', '125000', 'd_ID'), 
        ('Legal Team Lead', '250000', 'd_ID'), 
        ('Lawyer', '190000', 'd_ID'), 
        ('Software Engineer', '120000', 'd_ID');

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES  ('John', 'Doe', 'r_ID', 'm_ID'),
        ('Mike', 'Chan', 'r_ID', 'm_ID'),
        ('Ashley', 'Rodriguez', 'r_ID', 'm_ID'),
        ('Kevin', 'Tupik', 'r_ID', 'm_ID'),
        ('Malia', 'Brown', 'r_ID', 'm_ID'),
        ('Sarah', 'Lourd', 'r_ID', 'm_ID'),
        ('Tom', 'Allen', 'r_ID', 'm_ID'),
        ('Tanner', 'Galal', 'r_ID', 'm_ID');

