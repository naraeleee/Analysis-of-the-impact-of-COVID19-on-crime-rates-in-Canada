import React from 'react';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'home',
    };
  }

  setScreen = (screen) => {
    this.setState({ currentScreen: screen });
  };

  render() {
    return (
      <div className="App">
        {this.state.currentScreen === 'home' && (
          <HomeScreenComponent setScreen={this.setScreen} />
        )}
        {this.state.currentScreen === 'alphabetQuiz' && (
          <AlphabetQuizComponent setScreen={this.setScreen} />
        )}
        {this.state.currentScreen === 'alphabetLearning' && (
          <AlphabetLearningComponent setScreen={this.setScreen} />
        )}
        {this.state.currentScreen === 'textToSign' && (
          <TextToSignComponent setScreen={this.setScreen} />
        )}
        {this.state.currentScreen === 'signToText' && (
          <SignToTextComponent setScreen={this.setScreen} />
        )}
      </div>
    );
  }
}

class HomeScreenComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to SLearning</h1>
        <button onClick={() => this.props.setScreen('alphabetQuiz')}>
          Alphabet Quiz
        </button>
        <button onClick={() => this.props.setScreen('alphabetLearning')}>
          Learn Alphabets
        </button>
        <button onClick={() => this.props.setScreen('textToSign')}>
          Text To Sign
        </button>
        <button onClick={() => this.props.setScreen('signToText')}>
          Sign to Text
        </button>
      </div>
    );
  }
}

class AlphabetQuizComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Alphabet Quiz</h2>
        {/* Render the quiz UI */}
        <button onClick={() => this.props.setScreen('home')}>Back to Home</button>
      </div>
    );
  }
}

class AlphabetLearningComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Learn Alphabets</h2>
        {/* Render the learning UI */}
        <button onClick={() => this.props.setScreen('home')}>Back to Home</button>
      </div>
    );
  }
}

class TextToSignComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Text To Sign</h2>
        {/* Render the text to sign UI */}
        <button onClick={() => this.props.setScreen('home')}>Back to Home</button>
      </div>
    );
  }
}

class SignToTextComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Sign to Text</h2>
        {/* Render the sign to text UI */}
        <button onClick={() => this.props.setScreen('home')}>Back to Home</button>
      </div>
    );
  }
}

export default HomeScreen;
