$(document).ready(function(){
  $("form#grocery").submit(function(event) {
    event.preventDefault();
    var grocery = ["item1", "item2", "item3", "item4"];

    grocery.forEach(function(groc) {

      var userInput = $("input#" + groc).val();
      $("." + groc).text(userInput);
      console.log(groc);
    });

  });
});
