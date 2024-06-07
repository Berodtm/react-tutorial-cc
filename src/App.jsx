import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import FlexContainer from './components/FlexContainer';
import { robImage, sarahImage, tootsieImage } from './assets/images';
import { v4 as uuidv4 } from 'uuid';
import employeeData from './data/employees';

function App() {
  const [role, setRole] = useState('');
  const [employees, setEmployees] = useState(employeeData);
  let showEmployees = true;

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    const updatedEmployees = employees.map((employee) => {
      if (employee.name === 'Toby Dunn') {
        return { ...employee, role: e.target.value };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  return (
    <>
      <h1>React Tutorial</h1>
      <h2>List of Employees</h2>

      {showEmployees ? (
        <>
          <input
            type='text'
            placeholder="Set Toby's Job"
            onChange={handleRoleChange}
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              console.log(employee, uuidv4());
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  pay={employee.pay}
                  img={employee.img}
                />
              );
            })}
            <Employee />
          </div>
        </>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </>
  );
}

export default App;
