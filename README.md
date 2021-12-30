# math-practice
a Vue.js version of my web app to practice 3-digit addition and subtraction,

To demo, you need the following:
Content (folder containing CSS files)
Scripts (folder containing js files)
index.html

the functionality is in the mathpractice.js

My son needed a way to practice his math, and I was working & attending school, so I came up with this.

It generates two random 3-digit numbers as arguments for the equation.
It also randomly generates the addition (+) or subtraction (-) operator.
If the operator is subtraction, then it makes sure that the second number in the equation is less than the first
because my son hasn't learned negative numbers yet.
Once the problem is written to the HTML document, the user can input an answer and check that answer.
If the answer is incorrect, the user can try again.
If the answer is correct, the score is updated and displayed. The user also gets a button for a new problem to solve.
When the "Get new problem" button is pressed, a new problem is displayed on the page, and the score persists.

Planned Features:
- an opening menu where user can select Add, Subtract, or Both; menu should disappear once a selection is made;
    then an option to Go Back to the Menu should appear.
- better styling
- a way to limit a session: either by time, or number of problems, or number of correct answers. These could be called "Modes"
