import React, { Component } from 'react';
import './WorkHours.css';

class EmployeeList extends Component {
  state = {
    employees: [
      {
        id: 1,
        name: 'John Doe',
        role: 'Developer',
        workHours: 120,
        online: true,
      },
      {
        id: 2,
        name: 'Jane Smith',
        role: 'Designer',
        workHours: 95,
        online: false,
      },
      {
        id: 3,
        name: 'Alice Johnson',
        role: 'Manager',
        workHours: 140,
        online: true,
      },
      {
        id: 4,
        name: 'Bob Brown',
        role: 'Designer',
        workHours: 110,
        online: false,
      },
      // Add more employees
    ],
  };

  render() {
    const { employees } = this.state;

    return (
      <div className="employee-list">
        <h2>Employee Work Hours</h2>
        <div className="attribute-row">
          <p >Name</p>
          <p >ID</p>
          <p >Role</p>
          <p >Work Hours</p>
          <p >Status</p>
        </div>
        <ul>
          {employees.map((employee) => (
            <li key={employee.id} className="employee-item">
              <div className="attribute">{employee.name}</div>
              <div className="attribute">{employee.id}</div>
              <div className="attribute">{employee.role}</div>
              <div className="attribute">{employee.workHours}</div>
              <div className="attribute">
                {employee.online ? 'Online' : 'Offline'}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
