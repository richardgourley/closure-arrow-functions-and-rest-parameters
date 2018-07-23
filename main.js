
let myFunc = (name, res) => {
    return () => {
        let nameUpper = name.toUpperCase();
        let message = res>75 ? "passed" : "did't pass";
        let extraMessage = ". What an achievement!!!";
        let printedMessage = `${nameUpper} ${message} the test with a score of ${res}`;
        if(res > 89){printedMessage += extraMessage;}
        console.log(printedMessage);
    }
    
}

var frank = myFunc("Frank", 67);
var paul = myFunc("Paul", 81);
var jenny = myFunc("Jenny", 96);

let printResults = function(...theArgs){
     for(i=0; i<theArgs.length; i++){
         let res = typeof(theArgs[i]);
         if(res === 'function'){
             theArgs[i]();
         }
     }
}

printResults(sally, paul, jenny);

//Output:
//SALLY failed the test with a score of 67.
//PAUL passed the test with a score of 81.
//JENNY passed the test with a score of 96. What an achievement!!!





