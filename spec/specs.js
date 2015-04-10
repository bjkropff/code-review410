describe('triTest', function(){
  it("will return false", function(){
      expect(triTest(0,0,0)).to.equal(false);
  });

  it("will take (4,4,1) and return 'isosceles'", function(){
  expect(triTest(4,4,1)).to.equal("isosceles");
  });

  it("will take (4,1,1) and return 'isosceles'", function(){
  expect(triTest(4,1,1)).to.equal("isosceles");
  });

  // it("will take (4,4,4) and return 'equilateral'", function(){
  // expect(triTest(4,4,4)).to.equal("equilateral");
  // });
});
