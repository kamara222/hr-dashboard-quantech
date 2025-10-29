// src/components/EmployeeTable.jsx
import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
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
              <td>{emp.department}</td>
              <td className="actions">
                <button onClick={() => onEdit(emp)} className="icon-btn">
                  <Edit2 size={16} />
                </button>
                <button onClick={() => onDelete(emp.id)} className="icon-btn delete">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;