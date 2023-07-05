from flask import Flask, jsonify

app = Flask(__name__)

# Define a route for the root URL
@app.route('/')
def home():
    return 'Welcome to SLearning!'

# Define your API endpoint for the quiz
@app.route('/', methods=['GET'])
def get_quiz_data():
    # Retrieve quiz data from your data source (e.g., database, file)
    quiz_data = {
        'question': 'What is the capital of France?',
        'options': ['London', 'Paris', 'Berlin', 'Rome'],
        'answer': 'Paris'
    }

    return jsonify(quiz_data)

if __name__ == '__main__':
    app.run()
