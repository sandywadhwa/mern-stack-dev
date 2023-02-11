function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "/" + quiz.questions.length + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Which command defines the author email to be used for all commits by the current user.",
        ["git clean -f", "git config --global user.email", "git merge --no-ff", "git email--amend"],
        "git config --global user.email"),
    new Question("What's the git command that downloads your repository from GitHub to your computer?",
        ["git push", "git fork", "git clone", "git commit"],
        "git clone"),
    new Question("How do you create a copy of a someone else's repo under your own GitHub account?",
        ["Forking it via the GitHub interface.", "git fork", "git clone", "git pull-request"],
        "Forking it via the GitHub interface."),
    new Question("What's the opposite of git clone, instead of downloading your code from GitHub, uploads your changes and code back to GitHub?",
        ["git push", "git add", "git upload", "git status"],
        "git push"),
    new Question("How do you check the state of your local git repository since your last commit?",
        ["git check", "git status", "git commit", "git diff"],
        "git status"),
    new Question("Which command do we use to stage files before a commit?",
            ["git stage", "git commit", "git add", "git reset"],
            "git add"),
    new Question("How do you supply a commit message to a commit?",
            ["git message \"I'm coding\"", "git add \"I'm coding\"", "git commit \"I'm coding\"", "git commit -m \"I'm coding\""],
            "git commit -m \"I'm coding\"")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();