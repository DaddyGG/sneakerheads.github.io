class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
let questions = [
    new Question("How many Sneaker Heads will be available ?", ["8888", "TBA", "7777", "11111"], "TBA"),
    new Question("In which category can we place the Sneaker Heads' NFTs ?", ["P2E Game", "Art", "Collectibles", "Metaverse"], "Art"),
    new Question("On which blockchain will we be able to mint the Sneaker Heads' NFTs ?", ["Solana", "BSC", "ETH", "AVAX"], "ETH"),
    new Question("What is the planned release date ?", ["Early April", "Early May", "TBA", "Late April"], "TBA"),
    new Question("Who is the artist behind the project ?", ["Ali Dawood", "Farzam Dawood", "Ash Dawood", "Paul Dawood"], "Ali Dawood"),
    new Question("What is the required level on the Sneaker Heads's Discord to be whitelisted ?", ["10", "30", "20", "WL are handpicked"], "WL are handpicked"),
    new Question("What is the date of the first Twitter post ?", ["Sep 1, 2021", "Jan 1, 2022", "Feb 1, 2022", "March 1, 2022"], "March 1, 2022"),
    new Question("How old is the artist ?", ["22", "30", "50", "38"], "22"),
    new Question("Where does the artist live ?", ["New York", "Los Angeles", "Paris", "London"], "Los Angeles"),
    new Question("How much will cost 1 Sneaker Heads NFT ?", ["0.5 ETH", "0.1 ETH", "0.08 ETH", "TBA"], "TBA"),
    new Question("According to the roadmap, which one is not a pillar of the project ?", ["Community", "Brand", "Metaverse", "Money"], "Money"),
    new Question("What are the 2 main passions of the artist ?", ["Football and hiphop", "Street culture and hipop", "Dance and football", "Street culture and dance"], "Street culture and hipop"),
    new Question("When does the artist obtained his certificate in production for movies and animation ?", ["2021", "2010", "2018", "He doesn't have one"], "2021"),
    new Question("How many followers are there on Sneaker Heads' Twitter ?", ["50k", "100k", "500k", "200k"], "200k"),
    new Question("How many projects is the artist working on right now ?", ["10", "5", "100", "1 (Sneaker Heads)"], "1 (Sneaker Heads)"),

];

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

const display = {
    elementShown: function (id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function () {
        endQuizHTML = `
      <h1>Congratulation !</h1>
        
        <h1>Mission accomplished</h1>
      <h3> Your score is : ${quiz.score} / ${quiz.questions.length}</h3>

        <div class="choices">
            <button onclick="location.href = 'https://sneakerheads.xyz/';" style="font-size:150%" id="continueMission" class="btn">
                Continue your missions !
            </button>
        </div>

`;
        this.elementShown("quiz", endQuizHTML);
    },
    question: function () {
        this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function () {
        let choices = quiz.getCurrentQuestion().choices;

        guessHandler = (id, guess) => {
            document.getElementById(id).onclick = function () {
                quiz.guess(guess);
                quizApp();
            }
        }
        // affichage choix + prise en compte du choix
        for (let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i, choices[i]);
            guessHandler("guess" + i, choices[i]);
        }
    },
    progress: function () {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown("progress", "Question " + currentQuestionNumber + " / " + quiz.questions.length);
    },



};

// Game logic
quizApp = () => {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.progress();
    }
}
// Create Quiz
let quiz = new Quiz(questions);
quizApp();
