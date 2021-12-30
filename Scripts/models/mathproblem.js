export class MathProblem {
    operand1 = 0;
    operand2 = 0;
    operator = '+';
    correctAnswer = 0;

    constructor() {
        let operands = this.generateOperands();
        this.operand1 = operands[0];
        this.operand2 = operands[1];
        this.operator = this.generateOperator();
        this.correctAnswer = this.calculateAnswer();
    }

    generateOperands = () => {
        let nbr1 = Math.floor((Math.random() * 899) + 100);
        let nbr2 = Math.floor((Math.random() * 899) + 100);
        return [nbr1, nbr2].sort((a, b) => b - a);
    }

    generateOperator = () => {
        let operatorNbr = Math.round((Math.random()));
        let operator = "";
        if (operatorNbr == 0) {
            operator = "+";
        }
        if (operatorNbr == 1) {
            operator = "-";
        }

        return operator;
    }

    checkAnswer(userProvidedAnswer) {
        return +userProvidedAnswer == this.correctAnswer;
    }

    calculateAnswer() {
        if (this.operator == '+') {
            return this.operand1 + this.operand2;
        }

        if (this.operator == '-') {
            return this.operand1 - this.operand2;
        }
    }
}