const topicSelect = document.getElementById('topicSelect');
const startQuizBtn = document.getElementById('startQuizBtn');
const quizContainer = document.getElementById('quizContainer');
const questionText = document.getElementById('questionText');
const answerOptions = document.getElementById('answerOptions');
const scoreText = document.getElementById('scoreText');

let currentQuestionIndex = 0;
let score = 0;

const quizData = {
  general: [
    { question: 'What is the capital of France?', answers: ['Paris', 'London', 'Berlin', 'Madrid'], correctAnswer: 0 },
    { question: 'What is the largest planet in our solar system?', answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correctAnswer: 2 },
    { question: 'Who painted the Mona Lisa?', answers: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'], correctAnswer: 2 }
  ],
  science: [
    { question: 'What is the chemical symbol for gold?', answers: ['Au', 'Ag', 'Cu', 'Fe'], correctAnswer: 0 },
    { question: 'What is the theory that states that all living things are made up of cells?', answers: ['Cell theory', 'Atomic theory', 'Germ theory', 'Plate tectonic theory'], correctAnswer: 0 },
    { question: 'What is the process by which plants convert light energy into chemical energy?', answers: ['Photosynthesis', 'Respiration', 'Transpiration', 'Osmosis'], correctAnswer: 0 }
  ],
  history: [
    { question: 'In what year did World War II end?', answers: ['1939', '1945', '1950', '1955'], correctAnswer: 1 },
    { question: 'Who was the first president of the United States?', answers: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'James Madison'], correctAnswer: 1 },
    { question: 'What event marked the beginning of the Renaissance?', answers: ['The fall of Constantinople', 'The Crusades', 'The invention of the printing press', 'The discovery of America'], correctAnswer: 0 }
  ],
  geography: [
    { question: 'What is the largest ocean on Earth?', answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], correctAnswer: 3 },
    { question: 'What is the highest mountain in the world?', answers: ['K2', 'Everest', 'Kangchenjunga', 'Lhotse'], correctAnswer: 1 },
    { question: 'What is the largest desert in the world?', answers: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Antarctic Desert'], correctAnswer: 3 }
  ]
};

startQuizBtn.addEventListener('click', () => {
  const selectedTopic = topicSelect.value;
  if (selectedTopic) {
    currentQuestionIndex = 0;
    score = 0;
    scoreText.textContent = '0';
    displayQuestion(selectedTopic);
  } else {
    alert('Please select a quiz topic.');
  }
});

function displayQuestion(topic) {
  const currentQuestion = quizData[topic][currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  answerOptions.innerHTML = '';
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => handleAnswer(index, topic));
    answerOptions.appendChild(button);
  });
}

function handleAnswer(selectedAnswer, topic) {
  const currentQuestion = quizData[topic][currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
    scoreText.textContent = score;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData[topic].length) {
    displayQuestion(topic);
  } else {
    alert(`Quiz completed! Your score: ${score}/${quizData[topic].length}`);
    currentQuestionIndex = 0;
  }
}