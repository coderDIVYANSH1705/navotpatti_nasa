const questions = [
    {
        question: "What is an exoplanet?",
        answers: [
            { text: "A) A planet that orbits our Sun", correct: false },
            { text: "B) A planet that orbits another star outside our solar system", correct: true },
            { text: "C) A moon of another planet", correct: false },
            { text: "D) A theoretical planet that has not been observed", correct: false },
        ]
    },
    {
        question: "Which method is primarily used to detect most exoplanets?",
        answers: [
            { text: "A) Direct imaging", correct: false },
            { text: "B) Astrometry", correct: false },
            { text: "C) Transit method", correct: true },
            { text: "D) Radio waves", correct: false },
        ]
    },
    {
        question: "What is the term for the 'habitable zone' around a star?",
        answers: [
            { text: "A) Goldilocks zone", correct: true },
            { text: "B) Frost line", correct: false },
            { text: "C) Radiation zone", correct: false },
            { text: "D) Exoplanet belt", correct: false },
        ]
    },
    {
        question: "Which of the following is the first confirmed exoplanet discovered around a Sun-like star?",
        answers: [
            { text: "A) HD 209458 b", correct: false },
            { text: "B) 51 Pegasi b", correct: true },
            { text: "C) WASP-17b", correct: false },
            { text: "D) Proxima Centauri b", correct: false },
        ]
    },
    {
        question: "What type of exoplanets are known as 'hot Jupiters'?",
        answers: [
            { text: "A) Gas giants orbiting close to their stars", correct: true },
            { text: "B) Rocky planets with high temperatures", correct: false },
            { text: "C) Ice giants located far from their stars", correct: false },
            { text: "D) Small terrestrial planets", correct: false },
        ]
    },
    {
        question: "Which space telescope has made significant contributions to the discovery of exoplanets?",
        answers: [
            { text: "A) Hubble Space Telescope", correct: false },
            { text: "B) James Webb Space Telescope", correct: false },
            { text: "C) Kepler Space Telescope", correct: true },
            { text: "D) Chandra X-ray Observatory", correct: false },
        ]
    },
    {
        question: "What is the significance of the 'Transit Method'?",
        answers: [
            { text: "A) It measures the gravitational effects of a planet on its star.", correct: false },
            { text: "B) It detects the light spectrum of a star.", correct: true },
            { text: "C) It observes the dimming of a star's light as a planet passes in front of it.", correct: false },
            { text: "D) It captures direct images of the planet.", correct: false },
        ]
    },
    {
        question: "Which of the following exoplanets is known to have the potential for liquid water?",
        answers: [
            { text: "A) Jupiter", correct: false },
            { text: "B) HD 209458 b", correct: false },
            { text: "C) Proxima Centauri b" , correct: true },
            { text: "D) Venus", correct: false },
        ]
    },
    {
        question: "What does the term 'microlensing' refer to in the context of exoplanet detection?",
        answers: [
            { text: "A) A technique that involves analyzing the atmospheres of exoplanets", correct: false },
            { text: "B) A method that uses light from distant stars to detect exoplanets", correct: true },
            { text: "C) A way to measure the distance between stars", correct: false },
            { text: "D) A method to directly image exoplanets", correct: false },
        ]
    },
    {
        question: "Which of the following statements about exoplanets is true?",
        answers: [
            { text: "A) All exoplanets are gas giants.", correct: false },
            { text: "B) Exoplanets cannot have moons", correct: false },
            { text: "C) Exoplanets can have a variety of sizes and compositions.", correct: true},
            { text: "D) There is only one known exoplanet in our galaxy.", correct: false },
        ]
    },
    {
        question: "What is the primary reason that many exoplanets have been found in binary star systems?",
        answers: [
            { text: "A) They are more stable in such environments", correct: false },
            { text: "B) They have more resources", correct: false },
            { text: "C) The detection methods are more effective", correct: true },
            { text: "D) There are more stars to observe", correct: false },
        ]
    },
    {
        question: "Which exoplanet is known as the 'Earth's twin' due to its similar size and composition?",
        answers: [
            { text: "A) Kepler-452b", correct: false },
            { text: "B) Venus", correct: true },
            { text: "C) Proxima Centauri b", correct: false },
            { text: "D) Kepler-186f", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'radial velocity method' in exoplanet detection?",
        answers: [
            { text: "A) To observe transits", correct: false },
            { text: "B) To measure the star's wobble due to gravitational pull from a planet", correct: true },
            { text: "C) To capture images of exoplanets", correct: false },
            { text: "D) To analyze the chemical composition of planets", correct: false },
        ]
    },
    {
        question: "What is the term for planets that form outside the traditional habitable zone of their stars?",
        answers: [
            { text: "A) Super-Earths", correct: true },
            { text: "B) Ice giants", correct: false },
            { text: "C) Rogue planets", correct: false },
            { text: "D) Tidal planets", correct: false },
        ]
    },
    {
        question: "Which of the following factors can make an exoplanet more likely to support life?",
        answers: [
            { text: "A) High atmospheric pressure", correct: false },
            { text: "B) A stable climate", correct: false },
            { text: "C) A strong magnetic field", correct: false },
            { text: "D) Both B and C", correct: true },
        ]
    },
    {
        question: "What are 'super-Earths'?",
        answers: [
            { text: "A) Planets larger than Earth but smaller than gas giants", correct: true },
            { text: "B) Planets that are smaller than Earth", correct: false },
            { text: "C) Planets with supermassive atmospheres", correct: false },
            { text: "D) Exoplanets located in the habitable zone", correct: false },
        ]
    },
    {
        question: "Which exoplanet was the first to be imaged directly?",
        answers: [
            { text: "A) 51 Pegasi b", correct: false },
            { text: "B) Beta Pictoris b", correct: true },
            { text: "C) HR 8799 b", correct: false },
            { text: "D) WASP-121b", correct: false },
        ]
    },
    {
        question: "What is the significance of the exoplanet 'TRAPPIST-1'?",
        answers: [
            { text: "A) It has the most moons", correct: false },
            { text: "B) It has seven Earth-sized planets in its system", correct: true },
            { text: "C) It is the closest exoplanet to Earth", correct: false },
            { text: "D) It is the largest known exoplanet", correct: false },
        ]
    },
    {
        question: "Which atmospheric component is often searched for in exoplanets as a potential biosignature?",
        answers: [
            { text: "A) Methane", correct: false },
            { text: "B) Carbon dioxide", correct: false },
            { text: "C) Oxygen", correct: false },
            { text: "D) All of the above", correct: true },
        ]
    },
    {
        question: "What challenge do astronomers face when trying to study the atmospheres of distant exoplanets?",
        answers: [
            { text: "A) Distance from Earth", correct: false },
            { text: "B) Lack of light", correct: true },
            { text: "C) The brightness of the host star", correct: false },
            { text: "D) All of the above", correct: false },
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct; // Add data attribute
        answerButtons.appendChild(button);
        button.addEventListener("click", () => selectAnswer(answer));
    });
}



function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    const correct = answer.correct;

    // Increment score if the answer is correct
    if (correct) {
        score++;
    }

    // Disable all buttons and add classes for visual feedback
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true; // Disable all buttons

        // Highlight the selected answer in black
        if (button.innerHTML === answer.text) {
            button.classList.add("selected"); // Highlight selected option
        } 
        
        // Show correct answer in green and incorrect ones in red
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Highlight correct answer
        } else {
            button.classList.add("incorrect"); // Highlight incorrect answer
        }
    });

    nextButton.style.display = "block"; // Show the next button
}



    

    nextButton.style.display = "block"; // Show the next button


nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();

    // Determine grade based on score
    let grade = "";
    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {
        grade = "Diamond Knight";
    } else if (percentage >= 80) {
        grade = "Platinum Knight";
    } else if (percentage >= 60) {
        grade = "Gold Knight";
    } else if (percentage >= 40) {
        grade = "Silver Knight";
    } else  if(percentage >= 20) {
        grade = "Bronze Knight"; // Default grade for below 40%
    } else {
        grade = "Better luck next time";
    }
    const resultElement = document.createElement("div");
    resultElement.classList.add("result");
    resultElement.innerHTML = `You scored ${score} out of ${questions.length}!<br>Your grade: ${grade}`;
    
    // Add result element to questionElement
    questionElement.appendChild(resultElement);

    // Trigger reflow to reset the animation
    resultElement.offsetHeight; // This forces a reflow

    // Add the visible class to start the animation
    resultElement.classList.add("visible");

    nextButton.style.display = "none"; 
}



startQuiz();