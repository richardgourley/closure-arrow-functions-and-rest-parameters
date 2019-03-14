/* EXAMPLE OF PREPARE MESSAGE WITHOUT ARROW FUNCTIONS
let prepareMessage = function(name, res){
    function functionToReturn(){
        ...code
    }
    return functionToReturn;    
} */

/*
* @params 'name' and 'result'
* return - function returned.  Function called later (closure)
*/

let prepareMessage = (name, result) => {
    return () => {
        let nameUpper = name.toUpperCase();
        let message = result>75 ? "passed" : "did't pass";
        let extraMessage = ". What an achievement!!!";
        let printedMessage = `${nameUpper} ${message} the test with a score of ${result}`;
        if(result > 89){printedMessage += extraMessage;}
        return printedMessage;
    }
    
}

var frank = prepareMessage("Frank", 67);
var paul = prepareMessage("Paul", 81);
var jenny = prepareMessage("Jenny", 96);

/*
* @params - rest parameters. Unspecified number of functions.
* return - nothing but activates the 'inner function' of the functions passed in.
*/

let printResults = function(...theArgs){
     for(i=0; i<theArgs.length; i++){
         let res = typeof(theArgs[i]);
         if(res === 'function'){
             theArgs[i]();
         }
     }
}

printResults(frank, paul, jenny);

//Output:
//SALLY failed the test with a score of 67. 
//PAUL passed the test with a score of 81. 
//JENNY passed the test with a score of 96. What an achievement!!!







