// Write your solution in this file!
// Want array with this info:
   // name: Sam;
    //Address: 11 Broadway;
//
const employee = {
    name: "Sam",
    address: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employees = {... employee};
employees[key] = value;
return employees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const employees = {... employee};
    delete employees[key];
    return employees;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}