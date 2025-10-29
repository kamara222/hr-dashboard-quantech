// frontend/src/services/api.js
export const API_URL = 'http://localhost:5001/api';

export const api = {
  getEmployees: () => fetch(`${API_URL}/employees`).then(res => res.json()),
  createEmployee: (data) => fetch(`${API_URL}/employees`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),
  updateEmployee: (id, data) => fetch(`${API_URL}/employees/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),
  deleteEmployee: (id) => fetch(`${API_URL}/employees/${id}`, { method: 'DELETE' })
};