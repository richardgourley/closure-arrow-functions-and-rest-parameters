**CLOSURE, ARROW FUNCTIONS AND REST PARAMETERS

This is a Javascript example with some fairly advanced topics for intermediate level or above Javascript students.

The example takes the NAMES and RESULTS of 3 students and assesses their exam results and prints out a message for each student.

The best way to explain what is happening in the example is to talk you through the process of one of the variables (one of the students).

Open up 'main.js' and take a look at Jenny!

- We create a variable called Jenny and assign the prepareMessage() function to the variable with her name (jenny) and score (96) added as parameters.
- At this point the variable Jenny corresponds to the outer function of prepareMessage().  We will call the INNER function later on the variable Jenny.  This is CLOSURE in action!
- I've re-written the prepareMessage() function at the bottom without ARROW FUNCTIONS to demonstrate how the function would look WITHOUT ARROW FUNCTIONS.
- The printResults() function is where we use what is called REST PARAMETERS. Basically, it's a function that can take any number of parameters and puts them into an array.  You can then perform any actions on this array of parameters within the function.

- So, after we have assigned the prepareMessage() function to Jenny, we then pass Jenny the variable into our printResults() function! 
- Inside the printResults() function, we assess if the type of each parameter in our array is a function, and if so, we call the INNER FUNCTION of our prepareMessage() function on each variable.  This concept of assigning an OUTER FUNCTION and subsequently calling the INNER FUNCITON later on said variable is a key part of closure in JS!

I hope this example helps students get their head around some fairly complex topics.
Arrow functions and rest parameters are really useful and far easier to explain and understand than closure.
The best thing to understand all of these topics, specifically closure, is to try it out with your own example using a really simple scenario such as his one.

