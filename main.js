
//ARROW FUNCTIONS
//Line 5 is an example of arrow functions in use.  We could have written it as:
// let prepareMessage = function(name, res){.....}
let prepareMessage = (name, res) => {
    //CLOSURE
    //In line 9 we set an inner function.  The inner function can be called later on our script (see line 40).
    //Line 9 also has another example of arrow functions in use.  Could have been written as: return function(){....}
    return () => {
        //TERNARY OPERATOR - check if the score is over 75 or not, assign var to "pass" or "didn't pass".
        let message = res>75 ? "passed" : "didn't pass";
        //TEMPLATE STRINGS - A way to format strings and add variables to string output.  Less concatenation required.
        let printedMessage = `${name} ${message} the test with a score of ${res}`;
        console.log(printedMessage);
    }
}

let dave = prepareMessage("Dave", 78);
console.log(dave); //Output: dave is a function.
//When we call 'dave' as a function, we will invoke the inner function inside our prepareMessage function.

//Create some more students...
let daphne = prepareMessage("Daphne", 89);
let john = prepareMessage("John", 68);

//REST PARAMETERS - This means a function can take any number of parameters as its arguments.
//We use ...theArgs as a parameter and then perform a loop on our unspecified number of arguments.
let printResults = function(...theArgs){
    for(i=0; i<theArgs.length; i++){
        //'dave', 'daphne' and 'john' are functions to be passed in.  It's good practice to check args are functions before invoking them.
        if(typeof(theArgs[i]) == 'function'){
            //invoke each parameter in our Args array.
            theArgs[i]();
        }
    }
}

//Pass in our functions 'dave', 'daphne', 'john'.  
//When printResults invokes the above functions, the INNER function (see line 9) of prepareMesaage will be invoked.
printResults(dave, daphne, john);

//OUTPUT
//Dave passed the test with a score of 78 
//Daphne passed the test with a score of 89 
//John didn't pass the test with a score of 68




