import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import FlexContainer from './components/FlexContainer';
import { robImage, sarahImage, tootsieImage } from './assets/images';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('Strawberry Nose Lover');
  const [employees, setEmployees] = useState([
    { 
      id: 1,
      name: 'Rob Dunn',
      role: 'Director',
      pay: '£15,000.00',
      img: robImage,
    },
    {
      id: 2,
      name: 'Sarah Dunn',
      role: 'Chocolate Eater',
      pay: '50p',
      img: sarahImage,
    },
    {
      id: 3,
      name: 'Alfie Dunn',
      role: 'Strawberry Nose Killer',
      pay: '£1,000.00',
    },
    {
      id: 4,
      name: 'Tootsie The Cat',
      role: 'Pet',
      pay: 'Freeloader',
      img: tootsieImage,
    },
    { 
      id: 5,
      name: 'Toby Dunn',
      role: 'Strawberry Nose Lover',
      pay: '£500,000.00',
    },
  ]);
  let showEmployees = true;

  return (
    <>
      <h1>React Tutorial</h1>
      <h2>List of Employees</h2>

      {showEmployees ? (
        <>
          <input
            type='text'
            placeholder="Set Toby's Job"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
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
          </div>
        </>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </>
  );
}

export default App;
