import React, { useEffect, useState } from "react";
import EmployeeServices from "../services/employeeServices";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeServices.getEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => {
        console.log("something went wrong");
      });
  });
  return (
    <div id="employee">
      <h2>List of employees</h2>
      <table border="2">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Department</td>
            <td>Location</td>
          </tr>
        </tbody>
        {employees.map((employee) => (
          <tbody>
            <tr>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.location}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Employee;
