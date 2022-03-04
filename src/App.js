import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchPage from './SearchPage';
import { RemoveCircleOutlineSharp } from '@mui/icons-material';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
            <Route path="/search" element={<SearchPage />} /> 
            <Route path="/" element={<Home />} />  
        </Routes>
        

        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
