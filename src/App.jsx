import './App.css';
// Iteration 1: Import Data & Use State Hook
import companiesData from './companies.json';
import technologiesData from './technologies.json';
import { useState } from 'react';

// Iteration 2: Create components and import them
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';

// Iteration 3: Setup React Router and Create Routes
import { Routes, Route } from 'react-router-dom';

function App() {
  const [companies, setCompanies] = useState(companiesData);
  const [technologies, setTechnologies] = useState(technologiesData);

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage companies={companies} />} />
        <Route
          path='/company/:companySlug'
          element={<CompanyPage companies={companies} />}
        />
        <Route
          path='/tech/:slug'
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
