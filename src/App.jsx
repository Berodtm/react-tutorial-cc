import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import FlexContainer from './components/FlexContainer';

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
          <FlexContainer >
            <Employee name='Rob Dunn' role='Director' pay='£15,000.00' />
            <Employee name='Toby Dunn' role={role} />
            <Employee name='Sarah Dunn' role='Chocolate Eater' pay='£50,000.00'/>
            <Employee name='Alfie Dunn' role='Teddy Game Designer'/>
            <Employee name='Tootsie The Cat' role='Pet' pay='Freeloader' />
            <Employee />
          </FlexContainer>
        </>
      ) : (
        <p>You cannot see the employees!</p>
      )}
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
