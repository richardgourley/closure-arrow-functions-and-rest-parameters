
let prepareMessage = (name, res) => {
    return () => {
        let nameUpper = name.toUpperCase();
        let message = res>75 ? "passed" : "did't pass";
        let extraMessage = ". What an achievement!!!";
        let printedMessage = `${nameUpper} ${message} the test with a score of ${res}`;
        if(res > 89){printedMessage += extraMessage;}
        console.log(printedMessage);
    }
    
}


var frank = prepareMessage("Frank", 67);
var paul = prepareMessage("Paul", 81);
var jenny = prepareMessage("Jenny", 96);

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

//PREPARE MESSAGE RE-WRITTEN WITHOUT ARROW FUNCTIONS
/*
let prepareMessage = function(name, res){
    function functionToReturn(){
        let nameUpper = name.toUpperCase();
        let message = res>75 ? "passed" : "did't pass";
        let extraMessage = ". What an achievement!!!";
        let printedMessage = `${nameUpper} ${message} the test with a score of ${res}`;
        if(res > 89){printedMessage += extraMessage;}
        console.log(printedMessage);
    }
    return functionToReturn;    
}

*/





