import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeServices from "../services/employeeServices";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    refreshEmployeeTable();
  });

  const refreshEmployeeTable = () => {
    EmployeeServices.getEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => {
        console.log("something went wrong");
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeServices.deleteEmployee(employeeId)
      .then((response) => {
        console.log("successfully deleted the employee");
        refreshEmployeeTable();
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  return (
    <div id="employee">
      <h3 className="d-flex p-2 bd-highlight justify-content-center">
        List of employees
      </h3>
      <table
        className="container table table-hover table-dark table-striped"
        border="2"
      >
        <thead>
          <tr className="table table-primary">
            <td>Name</td>
            <td>Department</td>
            <td>Location</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.location}</td>
              <td>
                <div>
                  <Link
                    className="btn btn-primary"
                    to={`/edit/${employee.employeeId}`}
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => deleteEmployee(employee.employeeId)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
