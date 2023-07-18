import GenericFunctions from "../support/GenericFunctions";

describe('Calculator App', function() {
    const generic = new GenericFunctions()
    const operators = ["+", "-", "*", "/", "%"]


  beforeEach(function() {
    //not defining baseURL since I want to write api tests here too
    cy.visit('http://juliemr.github.io/protractor-demo/');
   
  });

  it('validate navigation and calculator', function(){
    cy.url().should('eq', 'http://juliemr.github.io/protractor-demo/')
    cy.title().should('eq', 'Super Calculator')
    cy.get('h3').should('be.visible').and('have.text', 'Super Calculator')
  })

  it('validate all components', function(){   
    cy.get('h3').should('be.visible').and('have.text', 'Super Calculator')
    cy.get('form').find('input').should('be.visible').and('have.length', 2)
    cy.get('form').find('select').should('be.visible').and('have.length', 1)
    cy.get('form').find('#gobutton').should('be.visible').and('have.text', 'Go!')
    //initial count is zero
    cy.get('form').find('h2').should('be.visible').and('have.text', 0)
    cy.get('[ng-controller="CalcCtrl"]').find('h4').should('be.visible').and('have.text', 'History')
    cy.get('[ng-controller="CalcCtrl"]').find('table').should('be.visible')
    cy.get('tr > :nth-child(1)').should('be.visible').and('have.text', "Time")
    cy.get('tr > :nth-child(2)').should('be.visible').and('have.text', "Expression")
    cy.get('tr > :nth-child(3)').should('be.visible').and('have.text', "Result")
  })

  //calculator functional tests
  operators.forEach(operator=>{
  it(`positive numbers with operator ${operator}`, function() {
    cy.calculate(3, 5, operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(3, 5, operator))
     cy.calculate(60, 700, operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(60, 700, operator))
  });

  it(`negative numbers with operator ${operator}`, function() {
    cy.calculate(-30000, -400000, operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(-30000, -400000, operator))
    cy.calculate(-999, -444, operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(-999, -444, operator))
  });

it(`positive and a negative number with operator ${operator}`, function() {
    cy.calculate(400000, -3, operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(400000, -3, operator))
    cy.calculate(-500, 3, operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(-500, 3, operator))
  });


  it(`number and zero with operator ${operator}`, function() {
    cy.calculate(2, 0, operator)
    cy.get('form').find('[class="ng-binding"]').should('contain.text', generic.calculateResult(2, 0, operator))
     cy.calculate(0, 888, operator)
    cy.get('form').find('[class="ng-binding"]').should('contain.text', generic.calculateResult(0, 888, operator))

  });

  it(`zero and number with operator  ${operator}`, function() {
     cy.calculate(0, 899, operator)
    cy.get('form').find('[class="ng-binding"]').should('contain.text', generic.calculateResult(0, 899, operator))
    cy.calculate(999, 0, operator)
    cy.get('form').find('[class="ng-binding"]').should('contain.text', generic.calculateResult(999, 0, operator))
  });

it(`an integer and a decimal with operator  ${operator}`, function() {
    cy.calculate(799, 0.0003, operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(799, 0.0003, operator))
    cy.calculate(0.08, 599, operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(799, 0.0003, operator))
  });
  it(`two decimals with operator  ${operator}`, function() {
    cy.calculate(0.4, 0.009, operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(0.4, 0.009, operator))
  });
   it(`empty characters with operator  ${operator}`, function() {
    cy.calculate(" ", " ", operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(" ", " ", operator))
  });
   it(`two strings with operator  ${operator}`, function() {
    cy.calculate("test", "test1", operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult("test", "test", operator))
  });
   it(`a string and a number with operator  ${operator}`, function() {
    cy.calculate("test2", 999, operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult("test", 30000, operator))
    cy.calculate(776, "test3", operator)
    cy.get('form').find('[class="ng-binding"]').should('have.text', generic.calculateResult(776, "test3", operator))
  });

  
})

//this test case fails at some edge case scenerios where the minute is changing but cy.clock() can not used here. 
// this does bother me but this is the best that can be done at this time 
   it('verify history additions in table',function(){
    const input1 = Number(generic.getRandomNumbersofLength(1))
    const input2 = Number(generic.getRandomNumbersofLength(3))
    const resultAdd = generic.calculateResult(input1, input2, operators[0])
    const resultSub = generic.calculateResult(input1, input2, operators[1])
    const resultMul = generic.calculateResult(input1, input2, operators[2])
    const resultDiv = generic.calculateResult(input1, 0, operators[3])
    const resultAmp = generic.calculateResult(input1, input2, operators[4])


    cy.calculate(input1, input2, operators[0])
     const time = new Date()
    cy.get('form').find('[class="ng-binding"]').should('have.text', resultAdd)
    cy.verifyHistory(input1, input2, operators[0], 0, resultAdd, time)

    //history 1st and second line
    cy.calculate(input1, input2, operators[1])
    const time1 = new Date()
    cy.get('form').find('[class="ng-binding"]').should('have.text', resultSub)
    cy.verifyHistory(input1, input2, operators[1], 0, resultSub,time1)
    cy.verifyHistory(input1, input2, operators[0], 1, resultAdd, time)

    //history 1,2, 3 line
    cy.calculate(input1, input2, operators[2])
    const time2 = new Date()
    cy.get('form').find('[class="ng-binding"]').should('have.text', resultMul)
    cy.verifyHistory(input1, input2, operators[2], 0, resultMul, time2)
    cy.verifyHistory(input1, input2, operators[1], 1, resultSub, time1)
    cy.verifyHistory(input1, input2, operators[0], 2, resultAdd, time)

    //history 4 calculations
    cy.calculate(input1, 0, operators[3])
    const time3 = new Date()
    cy.get('form').find('[class="ng-binding"]').should('contain.text', resultDiv)
    cy.verifyHistory(input1, 0, operators[3], 0, resultDiv, time3)
    cy.verifyHistory(input1, input2, operators[2], 1, resultMul, time2)
    cy.verifyHistory(input1, input2, operators[1], 2, resultSub, time1)
    cy.verifyHistory(input1, input2, operators[0], 3, resultAdd, time)

    //history 5 calculations
     cy.calculate(input1, input2, operators[4])
     const time4 = new Date()
    cy.get('form').find('[class="ng-binding"]').should('contain.text', resultAmp)
    cy.verifyHistory(input1, input2, operators[4], 0, resultAmp, time4)
    cy.verifyHistory(input1, 0, operators[3], 1, resultDiv, time3)
    cy.verifyHistory(input1, input2, operators[2], 2, resultMul, time2)
    cy.verifyHistory(input1, input2, operators[1], 3, resultSub, time1)
    cy.verifyHistory(input1, input2, operators[0], 4, resultAdd, time)   
  } )


});

