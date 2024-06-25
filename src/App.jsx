import './index.css';
import Employees from './pages/Employees';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './pages/Customers';
import Dictionary from './components/Dictionary';

function App() {
  return (
    <BrowserRouter >
      {/* I had to add basename in to make it work as I changed it to make it work in GH pages */}
      <Header>
        <Routes>
          <Route path='/' element={<Employees />} />
          <Route path='/react-tutorial-cc/employees' element={<Employees />} />
          <Route path='/react-tutorial-cc/customers' element={<Customers />} />
          <Route path='/react-tutorial-cc/dictionary' element={<Dictionary />} />
          <Route path='*' element={<Employees />} /> {/* Catch-all route */}
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
