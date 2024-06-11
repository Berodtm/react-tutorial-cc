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

  
  function updateEmployee(id, newName, newRole, newPay) {
    console.log('updateEmployee inside of the app.jsx');
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole, pay: newPay };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }
  return (
    <>
      <h1 className='text-center'>React Tutorial</h1>
      <h2 className='text-center'>List of Employees</h2>

      {showEmployees ? (
        <>
          
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  pay={employee.pay}
                  img={employee.img}
                  updateEmployee={updateEmployee}
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
