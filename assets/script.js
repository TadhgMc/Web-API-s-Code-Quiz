// log what someone's answers are, as well as high scores
// make scoring system of some kind, ex. 5 points for correct answer and 1 point for each second left in timer
// popup if answer is right or wrong
//if answer is wrong, deduct time (maybe 5 seconds)
// MAYBE MAKE CSS ELEMENTS THEN CALL THEM IN JS?


// need a timer that counts (only?) for each question, not overall time(?)
startButton.addEventListener("click", function(){
    Countdown();
    console.log("clicked")
});

function Countdown(){
    var Timeleft= 30;

    var timeInterval = setInterval(function(){
        console.log("started")
        if (Timeleft > 0){
            timeDiv.textContent = Timeleft;
            Timeleft--;
        } else {
            timeDiv.textContent = '0';
            clearInterval(timeInterval);
            displayMessage()
        }

    }, 1000); //end of timeInterval

}//end of Countdown

function displayMessage() {

}


// need a list of questions, with multiple choice answers, can be in objects
var Questions = {
    question1 = {
        Q: "Commonly used data types DO NOT include:",
        A= {
            a: "string",
            b: "boolean",
            c: "alerts",//
            d: "numbers",
        },
    },
    question2 = {
        Q: "String values must be enclosed within ____ when being assigned to variables.",
        A= {
            a: "commas",
            b: "quotes",//
            c: "parenthesis",
            d: "brackets",
        },
    },
    question3 = {
        Q: "The condition in an if/else statement is enclosed within:",
        A= {
            a: "quotes",
            b: "parenthesis",
            c: "brackets",
            d: "braces {these curly ones!}",//
        },
    },
    question4 = {
        Q: "Arrays in Javascript can be used to store:",
        A= {
            a: "numbers & strings",
            b: "other arrays",
            c: "booleans",
            d: "(all of the above)",//
        },
    },
    question5 = {
        Q: "A very useful tool during development & debugging for printing content to the debugger is:",
        A= {
            a: "Javascript <console.log>",//
            b: "Terminal/Bash",
            c: "for loops",
            d: "CSS style sheets",
        },
    },
}