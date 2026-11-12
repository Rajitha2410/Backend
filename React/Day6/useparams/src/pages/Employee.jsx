

const Employee = () => {
    const emp={ID:"EMP101", Name: "Priya", Designation: "React Developer", Salary: "₹35,000", Company: "TCS"}
    
     return (
    <>
    <div className="bg-green-400 p-10 text-center">
        <h2>EmployeeID: {emp.ID}</h2>
        <h2>Name: {emp.Name}</h2>
        <h2>Designation: {emp.Designation}</h2>
        <h2>Salary: {emp.Salary}</h2>
        <h2>Company: {emp.Company}</h2>
    </div>
    </>
  )
}

export default Employee