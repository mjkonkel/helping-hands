import React, { useState } from 'react';
import Nav from './components/NavBar';
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../src/pages/Home'



function App() {
  const [categories] = useState([
    {
      name: 'Updates',
      description: 'Get updates and stay informed of the people you are caring for!',
    },
    {
      name: 'Photos',
      description: 'Photos of the people you how they are doing!',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <Home />
      </main>
      

    </div>
  );
};

export default App;