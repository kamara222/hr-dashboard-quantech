const EmployeeTable = () => {
  const employees = [
    { id: 1, name: 'Jean Dupont', email: 'jean@quantech.com', role: 'Développeur', dept: 'IT' },
    { id: 2, name: 'Marie Curie', email: 'marie@quantech.com', role: 'RH', dept: 'Ressources Humaines' },
    { id: 3, name: 'Paul Martin', email: 'paul@quantech.com', role: 'Manager', dept: 'IT' },
  ];

  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Poste</th>
            <th>Département</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.role}</td>
              <td>{emp.dept}</td>
              <td>
                <button className="btn-edit">Modifier</button>
                <button className="btn-delete">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;