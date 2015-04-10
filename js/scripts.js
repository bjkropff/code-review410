function triTest(side1, side2, side3) {
  var equalCount = 0;
  var result;
  if(side1 === 0 || side2 === 0 || side3 === 0){
    result = false;
  } else {
    if(side1 === side2 ){
      equalCount ++
    }

    if(side2 === side3 ){
      equalCount ++
    }

    if(side1 === side3 ){
      equalCount ++
    }

  }//closes first if

    if(equalCount === 1){
      result = 'isosceles';

    }else if(equalCount === 3){
      result = 'equilateral';;
    }
    return result;

}//close function
