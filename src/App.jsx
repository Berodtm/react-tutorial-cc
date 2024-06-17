import './index.css';
import Employees from './pages/Employees';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './pages/Customers';

function App() {
  return (
    <BrowserRouter basename='/react-tutorial-cc/'>
      {/* I had to add basename in to make it work as I changed it to make it work in GH pages */}
      <Header>
        <Routes>
          <Route path='/' element={<Employees />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='*' element={<Employees />} /> {/* Catch-all route */}
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
