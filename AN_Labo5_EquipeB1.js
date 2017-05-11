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
/* PI Calculation                                      */
/*******************************************************/

// The integration of this function between 0 and 1 = pi/4
function piOverFourPrime(x) {
    return 1 / (1 + x * x);
}


function calculatePI()
{
    let start = performance.now();
    
    var a = 0;
    var b = 1;
    var n = 500;

    var fa = piOverFourPrime(a)
    var fb = piOverFourPrime(b);

    h = (b - a) / n;
    j = fa

    for (i = 1; i <= n - 2; i = i + 2) {
        x = a + i * h;
        j = j + 4 * piOverFourPrime(x) + 2 * piOverFourPrime(x + h)
    }
    j = j + 4 * piOverFourPrime(b - h) + piOverFourPrime(b);
    
    let time = performance.now() - start;
    $('time').value = time + " ms";
    $('result').value = j * h / 3 * 4;
}
