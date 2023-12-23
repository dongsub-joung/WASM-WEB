import { initSync, clicked_btn_then_counting, Btn } from './wasmFunctions.js';

const bigButton = document.getElementById('Btn');


bigButton.addEventListener('click', function() {
//   alert('Button clicked!');
  var btn_obj= clicked_btn_then_counting(self);
  console.log(btn_obj);
});
