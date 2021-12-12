import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import employeeServices from "../services/employeeServices";

const AddEmployees = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    if (employeeId) {
      employeeServices
        .getEmployee(employeeId)
        .then((response) => {
          setName(response.data.name);
          setLocation(response.data.department);
          setDepartment(response.data.location);
        })
        .catch((err) => {
          console.log("error!");
        });
    }
  }, []);

  const SaveEmployee = (e) => {
    e.preventDefault();
    if (name && location && department) {
      setError("");

      if (employeeId) {
        //update
        const employee = { employeeId, name, department, location };
        employeeServices
          .putEmployee(employee) //promise
          .then((response) => {
            console.log("Updated an employee!", response.data);
            navigate("/myfirstreact/employee");
          })
          .catch((error) => {
            console.error("something went wrong!");
          });
      } else {
        //add employee
        const employee = { name, department, location };
        employeeServices
          .postEmployee(employee) //promise
          .then((response) => {
            console.log("added new employee!", response.data);
            navigate("/myfirstreact/employee");
          })
          .catch((error) => {
            console.error("something went wrong!");
          });
      }
    } else {
      console.error("Please fill up all details");
      setError("Please fill up all details");
    }
  };

  return (
    <div className="container">
      <h3>Add Employees</h3>
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            id="name"
            placeholder="Add employee name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label for="department" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            value={department}
            id="department"
            placeholder="Add department"
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label for="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            value={location}
            id="location"
            placeholder="Add Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>

        <button
          type="save"
          className="btn btn-primary"
          onClick={(e) => SaveEmployee(e)}
        >
          Save
        </button>
        <p id="error">
          {error && <p className="error text-danger">{error}</p>}
        </p>
      </form>
    </div>
  );
};

export default AddEmployees;
