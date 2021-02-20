// log what someone's answers are, as well as high scores
// make scoring system of some kind, ex. 5 points for correct answer and 1 point for each second left in timer, 5seconds off for wrong answer
// popup if answer is right or wrong
// MAYBE MAKE CSS ELEMENTS THEN CALL THEM IN JS? maybe html elemnts, then "for" statement to create elements

var startButton = document.querySelector("#startButton");
var timeSpot = document.querySelector("#Timeleft");
var main = document.querySelector("main");
var body = document.body;
var H1 = document.querySelector("h1");
var p = document.querySelector("#Mainp");
var ol = document.querySelector("ol");
var ScoreSpot = document.querySelector("#score");
var score = 0;
ScoreSpot.textContent = score;
timeSpot.textContent = 60;
// variables to creates elements for questions
var li0 = document.createElement("button");
var li1 = document.createElement("button");
var li2 = document.createElement("button");
var li3 = document.createElement("button");

var Timeleft= 60;

var timeInterval = setInterval(function(){
    if (Timeleft > 0){
        Timeleft--;
        timeSpot.textContent = Timeleft;
    } else {
        timeSpot.textContent = '0';
        clearInterval(timeInterval);
        displayMessage()
    }

}, 1000); //end of timeInterval


startButton.addEventListener("click", function(){
    timeInterval;
    console.log("start click")
    createQuestion1();
});

//Begin Question 1
function createQuestion1(){
    p.textContent = question1.Q;
    li0.textContent = question1.A.a;
    li1.textContent = question1.A.b;
    li2.textContent = question1.A.c;
    li3.textContent = question1.A.d;
    li0.setAttribute("id", "a");
    li1.setAttribute("id", "b");
    li2.setAttribute("id", "c");
    li3.setAttribute("id", "d");
    ol.appendChild(li0);
    ol.appendChild(li1);
    ol.appendChild(li2);
    ol.appendChild(li3);

    var a = document.querySelector("#a");
    var b = document.querySelector("#b");
    var c = document.querySelector("#c");
    var d = document.querySelector("#d");
    
    document.querySelector("button").setAttribute("style", "display: flex;");
    startButton.setAttribute("style", "display: none;");

    ol.addEventListener("click", function (event) {
            ol.removeEventListener("click", event.target);  //test
        if (p.textContent == question1.Q) {
            Answer = (event.target);
            if (Answer == c) {
                score++;
                ScoreSpot.textContent = score;
                Question2();
                } else {
                Timeleft = Timeleft - 5;
                timeSpot.textContent = Timeleft;
                Question2();
            };
        }  
    });   
    
}; //end of question 1

//Begin Question 2
function Question2 () {
    p.textContent = question2.Q;
    li0.textContent = question2.A.a;
    li1.textContent = question2.A.b;
    li2.textContent = question2.A.c;
    li3.textContent = question2.A.d;

    ol.addEventListener("click", function (event) {
        ol.removeEventListener("click", event.target); //test
        if (p.textContent == question2.Q) {
            Answer = (event.target);
            if (Answer == b) {
                score++;
                ScoreSpot.textContent = score;
                Question3();
            } else {
                Timeleft = Timeleft - 5;
                timeSpot.textContent = Timeleft;
                Question3();
            };
        }  
    });   
};//end of question 2

//Begin Question 3
function Question3 () {
    p.textContent = question3.Q;
    li0.textContent = question3.A.a;
    li1.textContent = question3.A.b;
    li2.textContent = question3.A.c;
    li3.textContent = question3.A.d;

    ol.addEventListener("click", function (event) {
        ol.removeEventListener("click", event.target);
    if (p.textContent == question3.Q) {
        Answer = (event.target);
        if (Answer == d) {
            score++;
            ScoreSpot.textContent = score;
            Question4();
            } else {
            Timeleft = Timeleft - 5;
            timeSpot.textContent = Timeleft;
            Question4();
        };
        } 
    });   
}; //end of question 3

//Begin Question 4
function Question4 () {
    p.textContent = question4.Q;
    li0.textContent = question4.A.a;
    li1.textContent = question4.A.b;
    li2.textContent = question4.A.c;
    li3.textContent = question4.A.d;

    ol.addEventListener("click", function (event) {
        ol.removeEventListener("click", event.target);
    if (p.textContent == question4.Q) {
        Answer = (event.target);
        if (Answer == d) {
            score++;
            ScoreSpot.textContent = score;
            Question5();
            } else {
            Timeleft = Timeleft - 5;
            timeSpot.textContent = Timeleft;
            Question5();
        };
        } 
    });   
}; //end of question 4

//Begin Question 5
function Question5 () {
    p.textContent = question5.Q;
    li0.textContent = question5.A.a;
    li1.textContent = question5.A.b;
    li2.textContent = question5.A.c;
    li3.textContent = question5.A.d;

    ol.addEventListener("click", function (event) {
        ol.removeEventListener("click", event.target);
        if (p.textContent == question5.Q) {
            Answer = (event.target);
            if (Answer == a) {
                score++;
                ScoreSpot.textContent = score;
                ScorePage();
            } else {
                Timeleft = Timeleft - 5;
                timeSpot.textContent = Timeleft;
                ScorePage();
            };
        }  
    });
}; //end of question 5

//Begin Score Page
function ScorePage (){ 
    var scoreTotal = score + Timeleft;
    console.log(score);
    console.log(Timeleft);
    H1.textContent = "Congratulations!";
    p.textContent = "Your score is " + scoreTotal + "!";
    clearInterval(timeInterval);
    li0.remove();
    li1.remove(); //
    li2.remove();
    li3.remove();

    ol.setAttribute("style", "flex-direction: row;");

    li0 = document.createElement("input");
    li0.setAttribute("type", "text");
    li0.setAttribute("placeholder", "Enter your initials here to save your score!");
    ol.appendChild(li0);
    li1 = document.createElement("button");
    li1.setAttribute("id", "highscore");
    li1.textContent = "Submit Score";
    ol.appendChild(li1);

    //need to make a button to save input, and move to High Scores
    li1.addEventListener("click", function(event) {
        //save to local file here
        li1.removeEventListener("click", event.target);
        var scoreInitials = li0.value;
        var scoreDetails = {scoreInitials, scoreTotal};
        var AllScores = JSON.parse(localStorage.getItem("Scores")) || [];
        AllScores.push(scoreDetails);
        AllScores.sort((a, b) => b.scoreTotal - a.scoreTotal); // For descending sort
        localStorage.setItem("Scores", JSON.stringify(AllScores));
        console.log(scoreTotal + " " + scoreInitials);
        HighScores();
    });
}; //end Score Page

//Begin Highscores page
function HighScores () {
    var AllScores = JSON.parse(localStorage.getItem("Scores")) || [];
    H1.textContent = "High Scores!";
    p.textContent = "Here are the top 10 scores!";
    li0.remove();
    li1.remove();
    ol.setAttribute("style", "flex-direction: column;");
    console.log(AllScores.length);

    // for loop to create list of scores
    for (var i=0; i < AllScores.length; i++ ) {
        if (i > 9){
            break;
        };
        var liEl = document.createElement("li");
        liEl.textContent = AllScores[i].scoreInitials + ": " + AllScores[i].scoreTotal;
        ol.appendChild(liEl);
    };
    
    // Restart quiz button
    var Rstart = document.createElement("button");
    Rstart.textContent = "Restart Quiz!";
    Rstart.setAttribute("id", "ReStartButton");
    Rstart.addEventListener("click", function(event) {
        location.reload();
    });
    main.appendChild(Rstart);
    
    // Reset Button
    var resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset Scores";
    resetBtn.setAttribute("id", "ResetButton");
    resetBtn.addEventListener("click", function(event) {
        resetBtn.removeEventListener("click", event.target);
        localStorage.clear();
        HighScores();
    });
    main.appendChild(resetBtn);
}




function displayMessage() {
    window.alert("Times up!")
    ScorePage();
}


// need a list of questions, with multiple choice answers, can be in objects
var question1 = {
        Q: "Commonly used data types DO NOT include:",
        A : {
            a: "string",
            b: "boolean",
            c: "alerts",//
            d: "numbers",
        },
    };
var question2 = {
        Q: "String values must be enclosed within ____ when being assigned to variables.",
        A : {
            a: "commas",
            b: "quotes",//
            c: "parenthesis",
            d: "brackets",
        },
    };
var question3 = {
        Q: "The condition in an if/else statement is enclosed within:",
        A : {
            a: "quotes",
            b: "parenthesis",
            c: "brackets",
            d: "braces {these curly ones!}",//
        },
    };
var question4 = {
        Q: "Arrays in Javascript can be used to store:",
        A : {
            a: "numbers & strings",
            b: "other arrays",
            c: "booleans",
            d: "(all of the above)",//
        },
    };
var question5 = {
        Q: "A very useful tool during development & debugging for printing content to the debugger is:",
        A : {
            a: "Javascript <console.log>",//
            b: "Terminal/Bash",
            c: "for loops",
            d: "CSS style sheets",
        },
    };


// ANSWERS
console.log(question1.A.c);
console.log(question2.A.b);
console.log(question3.A.d);
console.log(question4.A.d);
console.log(question5.A.a);