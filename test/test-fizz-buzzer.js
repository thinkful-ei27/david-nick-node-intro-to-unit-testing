 const expect = require('chai').expect;

//  const should = chai.should();

 const fizzBuzz = require('../fizzBuzzer.js');

 describe('fizzBuzz', function(){
     it('should return true', function(){
        const inputResults = [[1,1], [3, 'fizz'], [5, 'buzz'], [15, 'fizz-buzz']];
        inputResults.forEach(function(input){
            const answer = fizzBuzz(input[0]);
            const result = (answer === input[1]);
            expect(result).to.be.true;
            console.log(`function is running ${input[0]} ${input[1]}`);
        });
     });
     it('should not accept NaN',function(){
        const input = 'one';
        console.log(`second it is running ${input}`);
        expect(function(){
            fizzBuzz(input);
        }).to.throw();
     });
     


 });



