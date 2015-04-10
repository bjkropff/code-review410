describe('triTest', function(){
  it("will return false", function(){
      expect(triTest(0,0,0)).to.equal(false);
  });

  it("will take (4,4,1) and return 'isosceles'", function(){
  expect(triTest(4,4,1)).to.equal("isosceles");
  });

  it("will take (4,1,1) and return 'isosceles'", function(){
  expect(triTest(4,3,3)).to.equal("isosceles");
  });

  it("will take (4,4,4) and return 'equilateral'", function(){
  expect(triTest(4,4,4)).to.equal("equilateral");
  });

  it("will take (1,1,4) and return 'Not a triangle'", function(){
  expect(triTest(1,1,4)).to.equal("Not a triangle");
  });

  it("will take (3,4,5) and return 'scalene'", function(){
  expect(triTest(3,4,5)).to.equal("scalene");
  });
});
