CREATE DATABASE company;
USE company;

-- create tables

CREATE TABLE employee (EmployeeID INT PRIMARY KEY,Name VARCHAR(100),department VARCHAR(10),Salary DECIMAL(10 , 0 ));

CREATE TABLE departments (DepartmentID INT PRIMARY KEY,DepartmentName VARCHAR(100));

-- inserting data into table

SELECT * FROM employee;

INSERT INTO employee (EmployeeID,Name,department,salary) VALUES
(1,'john','IT',60000),
(2,'jane smith','HR',50000),
(3,'james willis','IT',60000);

SELECT * FROM employee;

INSERT INTO departments (DepartmentID,DepartmentName) VALUES (1,'IT'),(2,'HR');
-- alter table

ALTER TABLE employee RENAME COLUMN Name TO EmployeeName;

SELECT EmployeeName ,salary FROM Employee WHERE department = 'IT';

UPDATE Employee SET salary=62000 WHERE EmployeeID =1;

CREATE INDEX  idx_department ON employee(Department);
CREATE INDEX idx_name ON employee(EmployeeName);

SHOW INDEXES FROM employee;

CREATE INDEX idx_delete ON employee(salary);
SHOW INDEXES FROM employee;

ALTER TABLE employee DROP INDEX idx_delete;

SELECT * FROM employee WHERE department = 'IT' AND salary>50000;
SELECT * FROM employee;

	INSERT INTO employee VALUES (2,'kishor','ceo',100000);
	INSERT INTO employee VALUES (5,'junaid','sales',50000);
	INSERT INTO employee VALUES (6,'jesvin','ba',30000);

	SELECT * FROM employee ORDER BY department ASC,Salary DESC;


INSERT INTO employee VALUES
  (7, 'Aisha', 'Engineer', 45000),
  (8, 'John', 'Manager', 5000),
  (9, 'Maria', 'HR', 38000),
  (10, 'David', 'Sales', 35000),
  (11, 'Emily', 'Accountant', 32000),
  (12, 'Frank', 'Designer', 40000),
  (13, 'Grace', 'Developer', 42000),
  (14, 'Henry', 'Tester', 37000),
  (15, 'Isabella', 'Analyst', 36000),
  (16, 'Jack', 'Architect', 50000),
  (17, 'Kate', 'Consultant', 48000),
  (18, 'Liam', 'Coordinator', 34000),
  (19, 'Maya', 'Operator', 31000),
  (20, 'Noah', 'Programmer', 39000),
  (21, 'Olivia', 'Supervisor', 44000),
  (22, 'Penelope', 'Secretary', 33000),
  (23, 'Quentin', 'Technician', 35000),
  (24, 'Riley', 'Trainer', 41000),
  (25, 'Sophia', 'Writer', 38000);

ALTER TABLE employee MODIFY department VARCHAR(15);

SELECT * FROM employee ORDER BY EmployeeID LIMIT 3 OFFSET 2;

SELECT count(*) AS TOTAL_EMPLOYEES FROM employee;

SELECT SUM(Salary) AS TOTAL_EMPLOYEES FROM employee;

SELECT SUM(Salary) AS TOTAL_EMPLOYEES FROM employee WHERE department ='IT';

SELECT AVG(Salary) AS AVERAGE_SALARY FROM employee;

SELECT MIN(Salary) AS MINIMUM_SALARY FROM employee;

SELECT MAX(Salary) AS MAXIMUM_SALARY FROM employee;

SELECT department, AVG(Salary) AS AVERAGE_SALARY FROM employee GROUP BY department;

SELECT department, COUNT(*) FROM employee GROUP BY department HAVING COUNT(*) > 1;

INSERT INTO employee (EmployeeID,EmployeeName,department,salary) VALUES (26,'Name4','Admin',40000);
INSERT INTO employee (EmployeeID,EmployeeName,department,salary) VALUES (27,'Name5',NULL,62500);

SELECT employee.EmployeeName,departments.DepartmentName FROM employee INNER JOIN departments on employee.department = departments.DepartmentName;

select employee.EmployeeName,departments.DepartmentName from employee left join departments on employee.department=departments.DepartmentName;

select employee.EmployeeName,departments.DepartmentName from employee right join departments on employee.department=departments.DepartmentName;

select EmployeeName,(select AVG(salary) FROM employee) AS average_salary FROM employee;
