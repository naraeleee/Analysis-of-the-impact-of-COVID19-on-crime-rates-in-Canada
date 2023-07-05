import React from 'react';
import { Link } from 'react-router-dom';

class AlphabetLearningComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Learn Alphabets</h2>
        {/* Render the learning UI */}
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

export default AlphabetLearningComponent;
