import React from 'react';

class HomeScreen extends React.Component {
  handleClick() {
    // Call the setScreen function to navigate to another screen
    this.props.setScreen('desiredScreen');
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Home Screen!</h1>
        <button onClick={this.handleClick.bind(this)}>Alphabet Quiz</button>
      </div>
    );
  }
}

export default HomeScreen;
