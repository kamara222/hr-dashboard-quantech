// Données mock
let employees = [
  { id: 1, name: 'Jean Dupont', email: 'jean@quantech.com', role: 'Développeur', department: 'IT' },
  { id: 2, name: 'Marie Curie', email: 'marie@quantech.com', role: 'RH', department: 'Ressources Humaines' },
];

// CRUD
module.exports = {
  findAll: () => employees,
  findById: (id) => employees.find(emp => emp.id === id),
  create: (employee) => {
    const newId = Math.max(...employees.map(e => e.id)) + 1;
    const newEmployee = { id: newId, ...employee };
    employees.push(newEmployee);
    return newEmployee;
  },
  update: (id, employee) => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      employees[index] = { ...employees[index], ...employee };
      return employees[index];
    }
    return null;
  },
  delete: (id) => {
    employees = employees.filter(emp => emp.id !== id);
    return true;
  }
};