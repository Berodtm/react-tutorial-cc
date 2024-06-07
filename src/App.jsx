import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import FlexContainer from './components/FlexContainer';
import { robImage, sarahImage, tootsieImage } from './assets/images'; 

function App() {
  const [role, setRole] = useState('Strawberry Nose Lover');
  const [employees, setEmployees] = useState();
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
            <Employee name='Rob Dunn' role='Director' pay='£15,000.00' img={robImage} />
            <Employee name='Toby Dunn' role={role} pay='£500,000.00' />
            <Employee name='Sarah Dunn' role='Chocolate Eater' pay='50p' img={sarahImage} />
            <Employee name='Alfie Dunn' role='Strawberry Nose Killer' pay='£1,000.00' />
            <Employee name='Tootsie The Cat' role='Pet' pay='Freeloader' img={tootsieImage} />
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
