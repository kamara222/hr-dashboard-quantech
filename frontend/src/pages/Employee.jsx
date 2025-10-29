// frontend/src/pages/Employee.jsx
import React, { useState, useEffect } from 'react';
import { Search, Plus, ArrowLeft} from 'lucide-react';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeForm from '../components/EmployeeForm';
import Modal from '../components/Modal';
import { api } from '../services/api';

const Employee = ({ onBack }) => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await api.getEmployees();
      setEmployees(data);
    } catch (err) {
      console.error("Erreur API:", err);
    }
  };

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = async (data) => {
    try {
      if (editingEmployee) {
        await api.updateEmployee(editingEmployee.id, data);
      } else {
        await api.createEmployee(data);
      }
      setModalOpen(false);
      setEditingEmployee(null);
      loadEmployees();
    } catch (err) {
      alert("Erreur lors de la sauvegarde");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Supprimer cet employé ?')) {
      try {
        await api.deleteEmployee(id);
        loadEmployees();
      } catch (err) {
        alert("Erreur suppression");
      }
    }
  };

  return (
    <div className="employee-page">
      <div className="page-header">
        <button className="btn-back" onClick={onBack}>
          <ArrowLeft size={20} /> Retour
        </button>
        <h2>Employee</h2>
        <button className="btn-add" onClick={() => { setEditingEmployee(null); setModalOpen(true); }}>
          <Plus size={20} /> Add Employee
        </button>
      </div>

      <div className="search-bar">
        <Search size={18} />
        <input
          type="text"
          placeholder="Rechercher un employé..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <EmployeeTable
        employees={filtered}
        onEdit={(emp) => { setEditingEmployee(emp); setModalOpen(true); }}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditingEmployee(null); }}
        title={editingEmployee ? 'Modifier l’employé' : 'Ajouter un employé'}
      >
        <EmployeeForm
          employee={editingEmployee}
          onSubmit={handleSubmit}
          onCancel={() => { setModalOpen(false); setEditingEmployee(null); }}
        />
      </Modal>
    </div>
  );
};

export default Employee;