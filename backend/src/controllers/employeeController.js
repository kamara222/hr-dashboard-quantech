const employeeModel = require('../models/employeeModel');

module.exports = {
  getAll: (req, res) => {
    res.json(employeeModel.findAll());
  },
  getById: (req, res) => {
    const employee = employeeModel.findById(parseInt(req.params.id));
    employee ? res.json(employee) : res.status(404).json({ error: 'Employee not found' });
  },
  create: (req, res) => {
    const employee = employeeModel.create(req.body);
    res.status(201).json(employee);
  },
  update: (req, res) => {
    const employee = employeeModel.update(parseInt(req.params.id), req.body);
    employee ? res.json(employee) : res.status(404).json({ error: 'Employee not found' });
  },
  delete: (req, res) => {
    const deleted = employeeModel.delete(parseInt(req.params.id));
    deleted ? res.json({ message: 'Employee deleted' }) : res.status(404).json({ error: 'Employee not found' });
  }
};