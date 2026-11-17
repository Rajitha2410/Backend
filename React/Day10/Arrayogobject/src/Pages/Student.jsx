

import { useState } from 'react';

const Student = () => {

  // Initial Student Details
  const [students, setStudents] = useState([
    { id: 1, name: "Arun", marks: 75 },
    { id: 2, name: "Bala", marks: 85 },
    { id: 3, name: "Kumar", marks: 65 }
  ]);

  // Add Student
  const addStudent = () => {

    const newStudent = {
      id: 4,
      name: "Priya",
      marks: 90
    };

    // Prevent Duplicate ID
    const exists = students.some(
      (student) => student.id === newStudent.id
    );

    if (exists) {
      alert("Student ID already exists!");
      return;
    }

    setStudents([...students, newStudent]);
  };

  // Update Student Marks
  const updateStudent = () => {

    setStudents(
      students.map((student) =>
        student.id === 2
          ? { ...student, marks: 95 }
          : student
      )
    );

  };

  // Delete Student
  const deleteStudent = () => {

    setStudents(
      students.filter((student) => student.id !== 3)
    );

  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Student Records Management
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Add, Update and Delete Student Details
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">

          <button
            onClick={addStudent}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add Student
          </button>

          <button
            onClick={updateStudent}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Update Marks
          </button>

          <button
            onClick={deleteStudent}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Delete Kumar
          </button>

        </div>

        {/* Total Students */}
        <div className="bg-blue-600 text-white p-5 rounded-xl shadow-md mb-6 text-center">

          <h2 className="text-lg">
            Total Students
          </h2>

          <p className="text-3xl font-bold mt-2">
            {students.length}
          </p>

        </div>

        {/* Student List */}
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Student Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {students.map((student) => (

            <div
              key={student.id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {student.name}
              </h3>

              <p className="text-gray-600">
                Student ID: {student.id}
              </p>

              <p className="text-green-600 font-bold text-lg mt-3">
                Marks: {student.marks}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Student;
