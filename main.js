const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElements = document.getElementById("answer-buttons");
let currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = answer.text;
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElements.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonElements.firstChild) {
    answerButtonElements.removeChild(answerButtonElements.firstChild);
  }
}

function selectAnswer(e) {
  console.log(e.target);
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElements.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (currentQuestionIndex < questions.length - 1)
    nextButton.classList.remove("hide");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("btn-correct");
  } else {
    element.classList.add("btn-wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What Data Does FaceBook Collect",
    answers: [
      {
        text: "BioMetrics,Location,ChatHistory",
        correct: false,
      },
      {
        text: "FacialRecognition,PaymentsHistory,DeviceInfo",
        correct: true,
      },
      {
        text: "ChatHistory,FacialRecognition,PaymentHistory",
        correct: false,
      },
      {
        text: "DeviceInfo,PhysicalDetails,SearchHistory",
        correct: false,
      },
    ],
  },
  {
    question:
      "How Much revenue does Facebook targeted ads generate in US Dollars?",
    answers: [
      {
        text: "108.6 Billion",
        correct: true,
      },
      {
        text: "203.1 Billion",
        correct: false,
      },
      {
        text: "93.4 Billion",
        correct: false,
      },
      {
        text: "21.5 Billion",
        correct: false,
      },
    ],
  },
  {
    question:
      "What Other Companies are Involved in Meta?",
    answers: [
      {
        text: "MicroSoft,Nvidia",
        correct: true,
      },
      {
        text: "apple,MicroSoft",
        correct: false,
      },
      {
        text: "Dell,apple",
        correct: false,
      },
      {
        text: "Samsung,Instagram",
        correct: false,
      },
    ],
  },{
    question:
      "What SDK's are Introduced for Meta?",
    answers: [
      {
        text: "PresencePlatform",
        correct: false,
      },
      {
        text: "Interaction, Cambria",
        correct: true,
      },
      {
        text: "Monterey, Guestier",
        correct: false,
      },
      {
        text: "Hand Signels,Wave",
        correct: false,
      },
    ],
  },{
    question:
      "What the Name of Main Project with Augmented reality from Meta?",
    answers: [
      {
        text: "Multi Verse",
        correct: false,
      },
      {
        text: "Beta",
        correct: false,
      },
      {
        text: "Zeus",
        correct: false,
      },
      {
        text: "Azure",
        correct: true,
      },
    ],
  },
];
