
import { useState } from 'react';

const Employee = () => {

  // Employee Details
  const [employees] = useState([
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Bala", salary: 45000 },
    { id: 3, name: "Kumar", salary: 60000 },
    { id: 4, name: "Vijay", salary: 35000 },
    { id: 5, name: "Priya", salary: 55000 }
  ]);

  // Button State
  const [showFiltered, setShowFiltered] = useState(false);

  // Filter Salary Above 40000
  const filteredEmployees = employees.filter(
    (emp) => emp.salary > 40000
  );

  // Display Employees
  const displayEmployees = showFiltered
    ? filteredEmployees
    : employees;

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Employee Salary Dashboard
        </h1>

        <p className="text-center text-gray-500 mb-8">
          View and manage employee salary details
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">

          <button
            onClick={() => setShowFiltered(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Show All Employees
          </button>

          <button
            onClick={() => setShowFiltered(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Salary Above ₹40,000
          </button>

        </div>

        {/* Employee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {displayEmployees.map((emp) => (

            <div
              key={emp.id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >

              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {emp.name}
              </h2>

              <p className="text-gray-600">
                Employee ID: {emp.id}
              </p>

              <p className="text-green-600 font-bold text-lg mt-3">
                Salary: ₹{emp.salary.toLocaleString("en-IN")}
              </p>

            </div>

          ))}

        </div>

        {/* Total Employees */}
        <div className="text-center mt-8 text-gray-600 font-semibold">
          Total Employees: {displayEmployees.length}
        </div>

      </div>

    </div>
  );
};

export default Employee;
