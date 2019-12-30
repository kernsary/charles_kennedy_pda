var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // it('orig can add two numbers', function(){
  //    calculator.numberClick(1);
  //    calculator.operatorClick('+');
  //    calculator.numberClick(4);
  //    calculator.operatorClick('=');
  //    assert.equal(calculator.previousTotal, 5)
  // })

  it('can add a number', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  })

  it('can subtract a number', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  it('can multiply numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  })

  it('can divide numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

  it('can concatenate entered numbers', function(){
    calculator.numberClick(4);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 45)
  })

  it('can chain operations', function(){
     calculator.numberClick(1);
     calculator.operatorClick('+');
     calculator.numberClick(4);
     calculator.operatorClick('-');
     calculator.numberClick(2);
     calculator.operatorClick('=');
     assert.equal(calculator.runningTotal, 3)
  })

});
