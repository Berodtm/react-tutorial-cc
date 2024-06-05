import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import FlexContainer from './components/FlexContainer';
import { robImage } from './assets/images'; 

function App() {
  const [count, setCount] = useState(0);
  const [role, setRole] = useState('Dev');
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
            <Employee name='Toby Dunn' role={role} />
            <Employee name='Sarah Dunn' role='Chocolate Eater' pay='£50p' />
            <Employee name='Alfie Dunn' role='Teddy Game Designer' />
            <Employee name='Tootsie The Cat' role='Pet' pay='Freeloader' />
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
