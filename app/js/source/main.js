(function() {
  'use strict';

  $(document).ready(initialize);

  function initialize() {
    $('#add').click(add);
    $('#sub').click(sub);
    $('#mul').click(mul);
    $('#div').click(div);
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

  function getNums() {
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    return [x,y];
  }

  function display(answer) {
    $('#answer').text(answer);
  }

})();
