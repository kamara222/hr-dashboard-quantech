// src/pages/Employees.jsx
import EmployeeTable from '../components/EmployeeTable';

const Employees = () => {
  return (
    <div className="employees-page">
      <div className="page-header">
        <h2>Liste des employés</h2>
        <button className="btn-add">+ Ajouter un employé</button>
      </div>
      <EmployeeTable />
    </div>
  );
};

export default Employees; // CETTE LIGNE MANQUAIT