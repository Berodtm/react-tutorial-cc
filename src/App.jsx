import { useState } from 'react';
import './App.css';
import Employee from './components/Employee';

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
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value)
            }}
          />
          <Employee name='Rob Dunn' role='Director' pay='£15,000.00' />
          <Employee name='Toby' role={role} />
          <Employee name='Sarah' />
          <Employee name='Alfie' />
          <Employee name='Tootsie' />
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
