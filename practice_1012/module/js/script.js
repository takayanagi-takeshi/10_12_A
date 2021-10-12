
let outPutField = document.getElementById('outPutField');

import {clock} from 'mdl_clock.js';

let outClock = () => {
  outPutField.innerHTML = clock();
}

console.log(clock());

setInterval(outClock, 500);
