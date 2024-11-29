let questions = [
    {
        prompt: `What is Decomposition?`,
        options: [
            "Willy Wonka's chocolate river",
            "Breaking some really annoying kids back",
            "Breaking a problem into smaller problems",
            "Breking a solution into smaller problems",
        ],
        answer: "Breaking a problem into smaller problems",
    },

    {
        prompt: `What is Abstraction?`,
        options: [
            "Taking the neccessary details out",
            "Taking out the unneccassary details",
            "Taking something into the body disposal bag because the police will never know about the annoying kid.",
            "Wenamechainasuma widmahobesaun, wifeliluftildaleftornbraun",
        ],
        answer: "Taking out the unneccassary details",
    },

    {
        prompt: `What is Pattern Recognition?`,
        options: [
            "the task of assigning a class to an observation based on patterns extracted from data",
            "seeing sumthing that luks like sumthing",
            "Your knee surgery which is tommorow",
            "The realisation of the blood drooling out of the body bag as it was not air tight, the sirens are getting louder",
        ],
        answer: "the task of assigning a class to an observation based on patterns extracted from data",
    },

    {
        prompt: `What is Algorithms?`,
        options: [
            "Beep Boop Bap stuf", 
            "a procedure used for solving a problem or performing a computation.",
             "The way the police drag my half battered body across the floor to the police station, I barely can make out that stupid boy's parents crying by the bag, I made it out this time.", 
             "Keith"],
        answer: "a procedure used for solving a problem or performing a computation.",
    },

    {
        prompt: `What is SIS`,
        options: [
            "A member of your family",
            "Gregory, do you see that small vent on the floor, have you ever heard of among us gregory. I need you to vent gregory, then you will be sus.",
            "Selection, Sequence, Iteration",
            "Sequence, Iteration, Sequence",
        ],
        answer: "Selection, Sequence, Iteration",
    },
];

// Get Dom Elements

let questionsEl =
    document.querySelector(
        "#questions"
    );
let timerEl =
    document.querySelector("#timer");
let choicesEl =
    document.querySelector("#options");
let submitBtn = document.querySelector(
    "#submit-score"
);
let startBtn =
    document.querySelector("#start");
let nameEl =
    document.querySelector("#name");
let feedbackEl = document.querySelector(
    "#feedback"
);
let reStartBtn =
    document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
    timerId = setInterval(
        clockTick,
        1000
    );
    timerEl.textContent = time;
    let landingScreenEl =
        document.getElementById(
            "start-screen"
        );
    landingScreenEl.setAttribute(
        "class",
        "hide"
    );
    questionsEl.removeAttribute(
        "class"
    );
    getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
    let currentQuestion =
        questions[currentQuestionIndex];
    let promptEl =
        document.getElementById(
            "question-words"
        );
    promptEl.textContent =
        currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(
        function (choice, i) {
            let choiceBtn =
                document.createElement(
                    "button"
                );
            choiceBtn.setAttribute(
                "value",
                choice
            );
            choiceBtn.textContent =
                i + 1 + ". " + choice;
            choiceBtn.onclick =
                questionClick;
            choicesEl.appendChild(
                choiceBtn
            );
        }
    );
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
    if (
        this.value !==
        questions[currentQuestionIndex]
            .answer
    ) {
        time -= 20;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textContent = `Wrong!`;
        feedbackEl.style.color = "red";
    } else {
        feedbackEl.textContent =
            "Oh well dooooone! (Sarcasm)";
        feedbackEl.style.color =
            "green";
    }
    feedbackEl.setAttribute(
        "class",
        "feedback"
    );
    setTimeout(function () {
        feedbackEl.setAttribute(
            "class",
            "feedback hide"
        );
    }, 2000);
    currentQuestionIndex++;
    if (
        currentQuestionIndex ===
        questions.length
    ) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
    clearInterval(timerId);
    let endScreenEl =
        document.getElementById(
            "quiz-end"
        );
    endScreenEl.removeAttribute(
        "class"
    );
    let finalScoreEl =
        document.getElementById(
            "score-final"
        );
    finalScoreEl.textContent = time;
    questionsEl.setAttribute(
        "class",
        "hide"
    );
}

// End quiz if timer reaches 0

function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
    let name = nameEl.value.trim();
    if (name !== "") {
        let highscores =
            JSON.parse(
                window.localStorage.getItem(
                    "highscores"
                )
            ) || [];
        let newScore = {
            score: time,
            name: name,
        };
        highscores.push(newScore);
        window.localStorage.setItem(
            "highscores",
            JSON.stringify(highscores)
        );
        alert(
            "Your Score has been Submitted"
        );
    }
}

// Save users' score after pressing enter

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
        alert(
            "Your Score has been Submitted"
        );
    }
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;