import React from 'react';
import './Loader.css';
import ScrambleText from './ScrambleText'; // Import the ScrambleText component

interface LoaderProps {
  hidden: boolean;
}

const Loader: React.FC<LoaderProps> = ({ hidden }) => {
  return (
    <div className={`loader loader-text ${hidden ? 'loader--hidden' : ''}`}>
      <ScrambleText text="Chris' Portfolio" component="h1" />{' '}
      {/* Use h2 for this example */}
    </div>
  );
};

export default Loader;
