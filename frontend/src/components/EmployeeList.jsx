import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
  return (
    <ul style={{ marginTop: "20px" }}>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} emp={emp} />
      ))}
    </ul>
  );
}

export default EmployeeList;
