$(document).ready(function(){
  $("form#grocery").submit(function(event) {
    event.preventDefault();
    var groceries = ["item1", "item2", "item3", "item4"];
    var inputs = [];
    var i = 0;
    groceries.forEach(function(groc) {
      var userInput = $("input#" + groc).val();
      var withoutFirst = userInput.slice(1);
      userInput = userInput.charAt(0).toUpperCase();
      userInput = (userInput + withoutFirst);
      inputs[i] = userInput;
      i = i + 1;


      console.log(groc);
    });
    inputs.sort();
    var one = inputs[0];
    var two = inputs[1];
    var three = inputs[2];
    var four = inputs[3];
    $(".item1").text(one);
    $(".item2").text(two);
    $(".item3").text(three);
    $(".item4").text(four);
  });
});
