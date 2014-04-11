(function() {
  'use strict';

  $(document).ready(initialize);

  function initialize() {
    $('#add').click(add);
    $('#sub').click(sub);
    $('#mul').click(mul);
    $('#div').click(div);
    $('#exp').click(exp);
    $('#sqrt').click(sqrt);
    $('#fact').click(fact);
  }

  function add() {
    var values = getNums();
    var answer = values[0]+values[1];
    display(answer);
  }

  function sub() {
    var values = getNums();
    var answer = values[0]-values[1];
    display(answer);
  }

  function mul() {
    var values = getNums();
    var answer = values[0]*values[1];
    display(answer);
  }

  function div() {
    var values = getNums();
    var answer = values[0]/values[1];
    display(answer);
  }

  function exp() {
    var values = getNums();
    var answer = Math.pow(values[0], values[1]);
    display(answer);
  }

  function sqrt() {
    var values = getNums();
    var answer = Math.pow(values[0], 0.5);
    display(answer);
  }

  function fact() {
    var values = getNums();
    debugger;
    var answer = calcFact(values[0]);
    display(answer);
  }

  function calcFact(num) {
    var x = num;
    while(x>1) {
      num = num*(x-1);
      x--;
    }
    return num;
  }

  function getNums() {
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    return [x,y];
  }

  function display(answer) {
    $('#answer').text(answer);
  }

})();
