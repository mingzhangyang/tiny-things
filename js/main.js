/**
 * Created by yangm11 on 8/31/2018.
 */
'use strict';

(function () {
  let r5c2 = document.getElementById('row-5-col-2');
  let bg = r5c2.getElementsByClassName('background')[0];
  bg.addEventListener('click', function () {
    r5c2.classList.toggle('paused');
  })
})();


if (typeof module !== 'undefined' && module.parent) {
  // Node environment, required as module
} else if (typeof window === 'object') {
  // Browser environment
} else {
  // Node environment, run directly
  // test code go here
}