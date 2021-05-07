const inquirer = require("inquirer");
const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");

const option = require("../data/options.json");
const employees = require("../data/employees.json");
const options = option.options[0];
////////////////////////////////////////////////////////////////
// TESTING GROUNDS
const db = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "HOTdog123456",
  database: "department",
});

db.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
});

//console.log(options);

////////////////////////////////////////////////////////////////
async function choices() {
  console.log("@choices");
  try {
    const response = await inquirer.prompt(option.options[0]);
    return response;
  } catch (err) {
    console.log(err);
  }
}
async function main() {
  console.log("@main");
  let myChoice = await choices();
  myChoice = myChoice.All;

  // View all departments
  if (myChoice === options.choices[0]) {
    db.query("SELECT * FROM department", (err, rows) => {
      console.table(rows);
    });
    one();
    // View all Roles
  }

  if (myChoice === options.choices[1]) {
    db.query("SELECT * FROM role", (err, rows) => {
      console.table(rows);
    });
    one();
  }

  // View all employees
  if (myChoice === options.choices[2]) {
    db.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee INNER JOIN role ON employee.role_id = role.role_id INNER JOIN department ON role.department_id = department.id",
      (err, rows) => {
        console.table(rows);
        if (err) {
          console.log(err);
        }
      }
    );
    one();
  }

  // Add department
  if (myChoice === options.choices[3]) {
    let nameToBe;
    try {
      const name = await inquirer.prompt(option.ad[0]);
      nameToBe = name.AD;
    } catch (err) {
      console.log(err);
    }

    const sql = "INSERT INTO department (name) VALUES (?);";
    const params = [nameToBe];
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
    one();
  }
  // Add employee
  if (myChoice === options.choices[4]) {
    let firstName, lastName, roleId, managerId;
    try {
      const fName = await inquirer.prompt(option.ae[0]);
      firstName = fName.AEfn;
      const lName = await inquirer.prompt(option.ae[1]);
      lastName = lName.AEln;
      const rId = await inquirer.prompt(option.ae[2]);
      roleId = rId.AErn;
      const mId = await inquirer.prompt(option.ae[3]);
      managerId = mId.AEmn;
    } catch (err) {
      console.log(err);
    }

    const sql =
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);";
    const params = [firstName, lastName, roleId, managerId];
    db.query(sql, params, (err, rows) => {
      if (err) {
        console.log(err);
      }
    });
    one();
  }

  // Update employee
  if (myChoice === options.choices[5]) {
    let employeeNum, firstName, lastName;
    try {
      const employee1 = await inquirer.prompt(option.ue[0]);
      employeeNum = employee1.UE;
      const fName = await inquirer.prompt(option.ae[0]);
      firstName = fName.AEfn;
      const lName = await inquirer.prompt(option.ae[1]);
      lastName = lName.AEln;
    } catch (err) {
      console.log(err);
    }

    let sql = "UPDATE employee SET first_name = (?) WHERE id = (?)";
    let params = [firstName, employeeNum];

    db.query(sql, params, (err, rows) => {
      if (err) {
        console.log(err);
      }
    });

    sql = "UPDATE employee SET last_name = (?) WHERE id = (?)";
    params = [lastName, employeeNum];

    db.query(sql, params, (err, rows) => {
      if (err) {
        console.log(err);
      }
    });
    one();
  }

  // Remove employee
  if (myChoice === options.choices[6]) {
    let person;
    try {
      let person1 = await inquirer.prompt(option.ae[0]);
      person = person1.AEfn;
      console.log(person);
    } catch (e) {
      console.log(e);
    }
    const sql = `DELETE FROM employee WHERE first_name = (?)`;
    const params = [person];
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
    one();
  }

  // Update employee role
  if (myChoice === options.choices[7]) {
    let employeeNum;
    let roleId;
    try {
      const employee1 = await inquirer.prompt(option.ue[0]);
      employeeNum = employee1.UE;

      const roleNum = await inquirer.prompt(option.ue[1]);
      roleId = roleNum.UErn;
    } catch (err) {
      console.log(err);
    }

    const sql = "UPDATE employee SET role_id = (?) WHERE id = (?)";
    const params = [roleId, employeeNum];

    db.query(sql, params, (err, rows) => {
      if (err) {
        console.log(err);
      }
    });
    one();
  }

  // Update employee manager
  if (myChoice === options.choices[8]) {
    let employeeNum;
    let managerId;
    try {
      const employee1 = await inquirer.prompt(option.ue[0]);
      employeeNum = employee1.UE;

      const roleNum = await inquirer.prompt(option.ue[2]);
      managerId = roleNum.UErn;
    } catch (err) {
      console.log(err);
    }

    const sql = "UPDATE employee SET manager_id = (?) WHERE id = (?)";
    const params = [managerId, employeeNum];

    db.query(sql, params, (err, rows) => {
      if (err) {
        console.log(err);
      }
    });
    one();
  }

  // Add role
  if (myChoice === options.choices[9]) {
    let title, salary, departmentId;
    try {
      const titleRole = await inquirer.prompt(option.ar[0]);
      title = titleRole.AR;
      const salaryOfRole = await inquirer.prompt(option.ar[1]);
      salary = salaryOfRole.ARs;
      const depId = await inquirer.prompt(option.ar[2]);
      departmentId = depId.ARd;
    } catch (err) {
      console.log(err);
    }

    const sql =
      "INSERT INTO role (title, salary, department_id) VALUES (?,?,?);";
    const params = [title, salary, departmentId];
    db.query(sql, params, (err, rows) => {
      if (err) {
        console.log(err);
      }
    });
    one();
  }

  // Remove role
  if (myChoice === options.choices[10]) {
    let role;
    try {
      let roleDel = await inquirer.prompt(option.rr[0]);
      role = roleDel.RR;
    } catch (err) {
      console.log(err);
    }

    const sql = `DELETE FROM role WHERE role_id = (?)`;
    const params = [role];

    db.query(sql, role, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
    one();
  }
}

main();

function one() {
  setTimeout(main, 1000);
}
