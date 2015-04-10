function triTest(side1, side2, side3) {
  var equalCount = 0;
  var result;
  if(side1 === 0 || side2 === 0 || side3 === 0){
    result = false;
  }else if( side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side2 + side1){
    result = "Not a triangle";
  }else{
    if(side1 === side2 ){
      equalCount ++
    }

    if(side2 === side3 ){
      equalCount ++
    }

    if(side1 === side3 ){
      equalCount ++
    }

    if(equalCount === 0){
      result = 'scalene';

    }else if(equalCount === 1){
      result = 'isosceles';

    }else if(equalCount === 3){
      result = 'equilateral';;
    }

  }//closes first if

  return result;

}//close function

$(document).ready(function() {
  $("form#side-input").submit(function(event) {
    var a = parseInt($("input#side1").val());
    var b = parseInt($("input#side2").val());
    var c = parseInt($("input#side3").val());

    var triangle = triTest(a,b,c);
    $("#result").text(triangle);

    $("#result").show();

    event.preventDefault();

  });
});
