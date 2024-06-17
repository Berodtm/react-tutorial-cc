import { useState } from 'react';
import '../index.css';
import Employee from '../components/Employee';
import { v4 as uuidv4 } from 'uuid';
import employeeData from '../data/employees';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';


function Employees() {
  const [employees, setEmployees] = useState(employeeData);
  let showEmployees = true;

  function updateEmployee(id, newName, newRole, newPay, newImg) {
    console.log('Debugging: updateEmployee inside of the app.jsx');
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return {
          ...employee,
          name: newName,
          role: newRole,
          pay: newPay,
          img: newImg,
        };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, pay, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      pay: pay,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className='App bg-purple-50 min-h-screen'>
      


      {showEmployees ? (
        <>
          <div className='flex flex-wrap justify-center my-2'>
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  pay={employee.pay}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  pay={employee.pay}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
            {/* <Employee /> */}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </div>
  );
}

export default Employees;
