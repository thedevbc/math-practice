import {MathProblem} from './models/mathproblem.js';

let problem = new MathProblem;
const app = Vue.createApp({
    data() {
        return {
            problem: problem,
            answer: '',
            isCorrect: false,
            correctCount: 0,
            incorrectMessage: '',
        };
    },
    methods: {
        getNewProblem() {
            this.problem = new MathProblem();
            this.answer = '';
            this.isCorrect = false;
            this.incorrectMessage = '';
        },
        checkAnswer() {
            this.isCorrect = this.problem.checkAnswer(reverseString(this.answer));
            if (this.isCorrect) {
                this.correctCount++;
            } else {
                this.incorrectMessage = 'Please try again.'
            }
        },
        onAnswerKeydown(event) {
            let regEx = new RegExp(/\d/);
            if (event.key != 'Backspace' && event.key != 'Enter' && event.key != 'Tab' && !regEx.test(event.key)) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (event.key == 'Enter') {
                this.checkAnswer();
            }
        },
    },
});

app.mount('#app')

function reverseString(str) {
    return str.split("").reverse().join("");
}