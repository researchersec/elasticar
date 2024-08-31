import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Ensure these imports are correct
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import Compare from './components/Compare';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <Filters />
                <CarList />
              </>
            }
          />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
