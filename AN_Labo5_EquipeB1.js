/***********************************************************/
/*  Authors : Axel Rieben, Maël Pedretti, Quentin Vaucher  */
/*  Date : 9 mai 2017                                   */
/***********************************************************/

/*******************************************************/
/*  Tools                                              */
/*******************************************************/

function $(id) {
    return document.getElementById(id);
}

function $name(name) {
    return document.getElementsByName(name);
}

/*******************************************************/
/*  Web Worker                                         */
/*******************************************************/

function initWorkers() {
    if (typeof(Worker) === "undefined") {
        console.log("Sorry, your browser does not support Web Workers...");
    } else {
        console.log("Browser supported");

        if (typeof(workerFunction) == "undefined")
            workerFunction = new Worker("AN_Labo4_EquipeB1_Worker.js");
        if (typeof(workerPrime) == "undefined")
            workerPrime = new Worker("AN_Labo4_EquipeB1_Worker.js");
        if (typeof(workerSecond) == "undefined")
            workerSecond = new Worker("AN_Labo4_EquipeB1_Worker.js");

        workerFunction.onmessage = function(event) {};

        workerPrime.onmessage = function(event) {};

        workerSecond.onmessage = function(event) {};

        let errorFct = function(event) {
            console.log(event.message);
        };

        workerFunction.onerror = workerPrime.onerror = workerSecond.onerror = errorFct;
    }
}

/*******************************************************/
/*  HTML/User interactions                             */
/*******************************************************/

function main() {
    //Theads
    // initWorkers();
    // workerFunction.postMessage(['cos', interval]);

}
