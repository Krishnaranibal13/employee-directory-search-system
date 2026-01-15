// function EmployeeTable({ employees }) {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Department</th>
//           <th>Designation</th>
//           <th>Date of Joining</th>
//         </tr>
//       </thead>

//       <tbody>
//         {employees.map((emp) => (
//           <tr key={emp.id}>
//             <td>{emp.id}</td>
//             <td>{emp.name}</td>
//             <td>{emp.email}</td>
//             <td>{emp.department}</td>
//             <td>{emp.designation}</td>
//             <td>{emp.date_of_joining}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default EmployeeTable;


function EmployeeTable({ employees }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Email</th>
          <th>Department</th><th>Designation</th><th>Date of Joining</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>{emp.designation}</td>
            <td>{emp.date_of_joining}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
