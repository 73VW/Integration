/***********************************************************/
/*  Authors : Axel Rieben, Maël Pedretti, Quentin Vaucher  */
/*  Date : 14 mai 2017                                     */
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


// Calculate PI using the Simpson Method
// source: http://serge.mehl.free.fr/anx/meth_simpson.html
function calculatePI() {
    let start = performance.now();

    let a = 0;
    let b = 1;
    let n = 752;

    let fa = piOverFourPrime(a);
    let fb = piOverFourPrime(b);

    let h = (b - a) / n;
    let j = fa;

    let x;

    for (let i = 1; i < n - 2; i = i + 2) {
        x = a + i * h;
        j = j + 4 * piOverFourPrime(x) + 2 * piOverFourPrime(x + h);
    }
    j = j + 4 * piOverFourPrime(b - h) + piOverFourPrime(b);

    let time = performance.now() - start;

    $('time').value = time.toFixed(4) + " ms";
    $('result').value = (4 * j * h / 3).toFixed(17);
    $('realPI').value = Math.PI.toFixed(17);
}
