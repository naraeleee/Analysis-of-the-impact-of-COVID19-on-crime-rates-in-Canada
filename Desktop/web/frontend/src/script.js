function startQuiz() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    // Additional logic for the quiz screen
  }
  
  function startLearning() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("learning-screen").style.display = "block";
    // Additional logic for the learning screen
  }
  
  function textToSign() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("text-to-sign-screen").style.display = "block";
    // Additional logic for the text to sign screen
  }
  
  function signToText() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("sign-to-text-screen").style.display = "block";
    // Additional logic for the sign to text screen
  }
  
  function backToHome() {
    document.getElementById("home-screen").style.display = "block";
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("learning-screen").style.display = "none";
    document.getElementById("text-to-sign-screen").style.display = "none";
    document.getElementById("sign-to-text-screen").style.display = "none";
  }
  