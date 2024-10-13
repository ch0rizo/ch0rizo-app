import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader';

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

  return (
    <>
      {/* Loader remains in the DOM but is hidden with the loader--hidden class */}
      <Loader hidden={!isLoading} />
      {!isLoading && (
        <div>
          <h1>Welcome to my website!</h1>
        </div>
      )}
    </>
  );
}

export default App;
