function EmployeeCard({ emp }) {
  return (
    <li style={{ marginBottom: "8px" }}>
      <b>{emp.name}</b> — {emp.designation} ({emp.department})
    </li>
  );
}

export default EmployeeCard;
