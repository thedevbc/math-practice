//provides random addition and subtraction math problems to be solved; once an answer is entered, it is checked to see if it's correct.
var nbr1;
var nbr2;
var tempNbr;
var operatorNbr;
var score = 0;

function generateProblem() {
    document.getElementById('response').textContent = "";
    document.getElementById('refresh').innerHTML = "";
    document.getElementById('answer').value = "";

    nbr1 = Math.floor((Math.random() * 899) + 100);
    tempNbr = Math.floor((Math.random() * 899) + 100);

    operatorNbr = Math.round((Math.random()));
    var operator = "";
    if (operatorNbr == 0) {
        operator += "+";
    }
    if (operatorNbr == 1) {
        operator += "-";
    }


    while (tempNbr > nbr1 && operatorNbr == 1) {
        tempNbr = Math.floor((Math.random() * 899) + 100);
    }

    nbr2 = tempNbr;
    //if (tempNbr < nbr1) {
    //    nbr2 = tempNbr;
    //}

    document.getElementById('nbr1').textContent = " " + nbr1;
    document.getElementById('operator').textContent = operator + " ";
    document.getElementById('nbr2').textContent = nbr2;
    
}
/**********END Number generator*******/
function checkAnswer() {
    var answer = document.getElementById('answer').value;

    if (operatorNbr == 0) {
        solution = nbr1 + nbr2;
        console.log(solution);
        if (answer == solution) {
            document.getElementById('response').textContent = "RIGHT! GOOD JOB!";
            document.getElementById('refresh').innerHTML = '<input id="newProb" type="button" class="btn btn-success" value="Get a new problem." onclick="generateProblem()" />';
            score++;
        }//end if
        else {
            document.getElementById('response').textContent = "Try Again."
        }//end else
    }//end if add

    if (operatorNbr == 1) {
        solution = nbr1 - nbr2;
        console.log(solution);
        if (solution != answer) {
            document.getElementById('response').textContent = "Try Again."
        }//end if
        else {
            document.getElementById('response').textContent = "RIGHT! GOOD JOB!";
            document.getElementById('refresh').innerHTML = '<input id="newProb" type="button" class="btn btn-success" value="Get a new problem" onclick="generateProblem()" />';
            score++;
        }//end else
    }
    document.getElementById('score').textContent = score;
}

var btnChkAnswer = document.getElementById('chkAnswer');
btnChkAnswer.addEventListener('click', function () { checkAnswer() });