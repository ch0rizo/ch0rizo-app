import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate the window load event (2-second delay for demo purposes)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const links = [
    {
      icon: "fa-brands fa-square-github fa-sm",
      href: 'https://github.com',
      key: 'github',
    },
    {
      icon: 'fa-brands fa-square-linkedin fa-sm',
      href: 'https://linkedin.com',
      key: 'linkedin',
    },
    { icon: '', text: 'Contact', href: '/contact', key: 'contact' }, // Text link for Contact
  ];

  return (
    <>
      {/* Loader remains in the DOM but is hidden with the loader--hidden class */}
      <Loader hidden={!isLoading} />
      {!isLoading && (
        <div>
          <Navbar links={links} />
          <h1>Welcome to my website!</h1>
        </div>
      )}
    </>
  );
}

export default App;
