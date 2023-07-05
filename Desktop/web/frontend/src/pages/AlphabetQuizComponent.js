import React from 'react';

class AlphabetQuizComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: null,
    };
  }

  componentDidMount() {
    this.fetchQuizData();
  }

  fetchQuizData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/quiz');
      const quizData = await response.json();
      this.setState({ quizData });
    } catch (error) {
      console.log('Error fetching quiz data:', error);
    }
  };

  render() {
    const { quizData } = this.state;

    return (
      <div>
        <h2>Alphabet Quiz</h2>
        {quizData ? (
          <div>
            {/* Render the quiz UI using the quizData */}
            <p>{quizData.question}</p>
            {/* Additional quiz components */}
          </div>
        ) : (
          <p>Loading quiz data...</p>
        )}
        <button onClick={() => this.props.setScreen('home')}>Back to Home</button>
      </div>
    );
  }
}

export default AlphabetQuizComponent;
