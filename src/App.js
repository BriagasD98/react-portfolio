import React, { useEffect, useState } from 'react';
// import './App.css';
import Nav from './components/Nav';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';

function App() {

  const [pages] = useState([
    { name : 'About' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' }
  ]);

  const [ currentPage, setCurrentPage ] = useState(pages[0]);

  useEffect(() => {
    document.title = `David Briagas - ${currentPage.name}`
  });

  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        />
      <main>
        {currentPage.name === 'About' && <About />}
        {currentPage.name === 'Portfolio' && <Project />}
        {currentPage.name === 'Contact' && <Contact />}
        {currentPage.name === 'Resume' && <Resume />}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
