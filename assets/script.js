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


// need a timer that counts (only?) for each question, not overall time(?)
startButton.addEventListener("click", function(){
    Countdown();
    console.log("clicked")
    createQuestion1();
});

// add here for correct/wrong answers, and for loop to make next question or make createQuestions() a "for" loop that makes all questions



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
            event.stopPropagation;
            console.log("click 2.0");
        if (p.textContent == question1.Q) {

            console.log("while");
            Answer = (event.target);
            console.log(Answer);
            console.log(c);

            if (Answer == c) {
                console.log("that's correct");
                score++;
                ScoreSpot.textContent = score;
                Question2();
                } else {
                console.log("wrong");
                Question2();
            };
        }  else {
            console.log("maybve no work")
        }  
    });   
    
};





function Question2 () {
    p.textContent = question2.Q;
    li0.textContent = question2.A.a;
    li1.textContent = question2.A.b;
    li2.textContent = question2.A.c;
    li3.textContent = question2.A.d;

    ol.addEventListener("click", function (event) {
        event.stopPropagation;
        console.log("click 2.0");
    if (p.textContent == question2.Q) {

        console.log("while");
        Answer = (event.target);
        console.log(Answer);
        console.log(c);

        if (Answer == b) {
            console.log("that's correct");
            score++;
            ScoreSpot.textContent = score;
            Question3();
            } else {
            console.log("wrong");
            Question3();
        };
    }  else {
        console.log("maybve no work")
    }  
});   
}

function Question3 () {
    p.textContent = question3.Q;
    li0.textContent = question3.A.a;
    li1.textContent = question3.A.b;
    li2.textContent = question3.A.c;
    li3.textContent = question3.A.d;

    ol.addEventListener("click", function (event) {
        event.stopPropagation;
        console.log("click 2.0");
    if (p.textContent == question3.Q) {

        console.log("while");
        Answer = (event.target);
        console.log(Answer);
        console.log(c);

        if (Answer == d) {
            console.log("that's correct");
            score++;
            ScoreSpot.textContent = score;
            Question4();
            } else {
            console.log("wrong");
            Question4();
        };
    }  else {
        console.log("maybve no work")
    }  
});   
}

function Question4 () {
    p.textContent = question4.Q;
    li0.textContent = question4.A.a;
    li1.textContent = question4.A.b;
    li2.textContent = question4.A.c;
    li3.textContent = question4.A.d;

    ol.addEventListener("click", function (event) {
        event.stopPropagation;
        console.log("click 2.0");
    if (p.textContent == question4.Q) {

        console.log("while");
        Answer = (event.target);
        console.log(Answer);
        console.log(c);

        if (Answer == d) {
            console.log("that's correct");
            score++;
            ScoreSpot.textContent = score;
            Question5();
            } else {
            console.log("wrong");
            Question5();
        };
    }  else {
        console.log("maybve no work")
    }  
});   
}

function Question5 () {
    p.textContent = question5.Q;
    li0.textContent = question5.A.a;
    li1.textContent = question5.A.b;
    li2.textContent = question5.A.c;
    li3.textContent = question5.A.d;
}



function Countdown(){
    var Timeleft= 60;

    var timeInterval = setInterval(function(){
        // console.log("started") remove before final upload
        if (Timeleft > 0){
            timeSpot.textContent = Timeleft;
            Timeleft--;
        } else {
            timeSpot.textContent = '0';
            clearInterval(timeInterval);
            displayMessage()
        }

    }, 1000); //end of timeInterval

}//end of Countdown

function displayMessage() {
window.alert("Times up!")
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