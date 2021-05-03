const inquirer = require("inquirer");
const express = require("express");
const mysql2 = require("mysql2");
const cTable = require("console.table");

const options = require("../data/options.json");
const employees = require("../data/employees.json");
const option = options.options[0];
////////////////////////////////////////////////////////////////
// TESTING GROUNDS

console.table(employees.employees[0].choices);

////////////////////////////////////////////////////////////////
async function choices() {
  console.log("@choices");
  try {
    const response = await inquirer.prompt(options.options[0]);
    return response;
  } catch (err) {
    console.log(err);
  }
}
async function main() {
  console.log("@main");
  let myChoice = await choices();
  myChoice = myChoice.All;

  if (myChoice === option.choices[0]) {
    console.log(option.choices[0]);
    viewAllDepartments();
  } else if (myChoice === option.choices[1]) {
    console.log(option.choices[1]);
    viewAllRoles();
  } else if (myChoice === option.choices[2]) {
    console.log(option.choices[2]);
    viewAllEmployees();
  } else if (myChoice === option.choices[3]) {
    console.log(option.choices[3]);
    addDepartment();
  } else if (myChoice === option.choices[4]) {
    console.log(option.choices[4]);
    addEmployee();
  } else if (myChoice === option.choices[5]) {
    console.log(option.choices[5]);
    updateEmployee();
  } else if (myChoice === option.choices[6]) {
    console.log(option.choices[6]);
    removeEmployee();
  } else if (myChoice === option.choices[7]) {
    console.log(option.choices[7]);
    updateEmployeeRole();
  } else if (myChoice === option.choices[8]) {
    console.log(option.choices[8]);
    updateEmployeeManager();
  } else if (myChoice === option.choices[9]) {
    console.log(option.choices[9]);
    addRole();
  } else if (myChoice === option.choices[10]) {
    console.log(option.choices[10]);
    removeRole();
  }
}

function viewAllDepartments(table) {}
function viewAllRoles(table) {}
function viewAllEmployees(table) {}
function addDepartment(table) {}
function addEmployee(table) {}
function updateEmployee(table) {}
function removeEmployee(table) {}
function updateEmployeeRole(table) {}
function updateEmployeeManager(table) {}
function addRole(table) {}
function removeRole(table) {}

main();
