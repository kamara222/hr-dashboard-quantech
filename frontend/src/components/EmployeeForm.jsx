// src/components/EmployeeForm.jsx
import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ employee, onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    department: ''
  });

  useEffect(() => {
    if (employee) {
      setForm(employee);
    }
  }, [employee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input
        name="name"
        placeholder="Nom complet"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="role"
        placeholder="Poste"
        value={form.role}
        onChange={handleChange}
        required
      />
      <select
        name="department"
        value={form.department}
        onChange={handleChange}
        required
      >
        <option value="">Département</option>
        <option value="IT">IT</option>
        <option value="RH">Ressources Humaines</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
      </select>
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {employee ? 'Mettre à jour' : 'Ajouter'}
        </button>
        <button type="button" onClick={onCancel} className="btn-secondary">
          Annuler
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;