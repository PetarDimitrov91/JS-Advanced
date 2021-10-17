const { expect } = require('chai');
const numberOperations = require('../03. Number Operations_Resources');

describe('number operatin tests', () => {

    describe('powNumber tests', () => {
        it('return the corect number powed', () => {
            expect(numberOperations.powNumber(5)).to.equal(Number(25));
            expect(numberOperations.powNumber(0)).to.equal(Number(0));
            expect(numberOperations.powNumber(1.5)).to.equal(Number(2.25));

        });
    });

    describe('numberChecker tests', () => {
        it('return the correct output number < 100', () => {
            expect(numberOperations.numberChecker(10)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
        });

        it('return the correct output number >= 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(1000)).to.equal('The number is greater or equal to 100!');

        });

        it('throws when is not a number', () => {
            expect(() => numberOperations.numberChecker('asdasda')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker([1, 2, 3, 4])).to.throw('The input is not a number!');
        });

    });

    describe('returns correct sum with positive Nubers', () => {
        it('retturns correct', () => {
            expect(JSON.stringify(numberOperations.sumArrays([10, 10, 10, 10, 10], [10, 10, 10, 10, 10]))).to.equal(JSON.stringify([20, 20, 20, 20, 20]));
            expect(JSON.stringify(numberOperations.sumArrays([10, 10, 10, 10, 10], [10, 10, 10, 10]))).to.equal(JSON.stringify([20, 20, 20, 20, 10]));
            expect(JSON.stringify(numberOperations.sumArrays([10, 10, 10, 10, ], [10, 10, 10, 10, 10]))).to.equal(JSON.stringify([20, 20, 20, 20, 10]));
        });
    });
});