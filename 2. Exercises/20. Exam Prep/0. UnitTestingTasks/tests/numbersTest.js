const { expect } = require('chai');
const testNumbers = require('../testNumbers');


describe('numbersTest', () => {
    describe('sumNumbers tests', () => {
        it('returns undefined when a non number is given', () => {
            expect(testNumbers.sumNumbers('a', 5)).to.equal(undefined);
            expect(testNumbers.sumNumbers(5, 'a')).to.equal(undefined);
            expect(testNumbers.sumNumbers('a', 'a')).to.equal(undefined);
        });

        it('returns correct sum', () => {
            expect(testNumbers.sumNumbers(5, 5)).to.equal('10.00');
            expect(testNumbers.sumNumbers(-5, 5)).to.equal('0.00');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
            expect(testNumbers.sumNumbers(1, -5)).to.equal('-4.00');
            expect(testNumbers.sumNumbers(1.5, 5)).to.equal('6.50');
            expect(testNumbers.sumNumbers(1, 5.5)).to.equal('6.50');
            expect(testNumbers.sumNumbers(1.5, 1.5)).to.equal('3.00');
        });
    });

    describe('numberChecker tests', () => {
        it('returns correct when is odd number', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(13)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('13')).to.equal('The number is odd!');
        });

        it('returns correct when is even number', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(10)).to.equal('The number is even!');
            expect(testNumbers.numberChecker('10')).to.equal('The number is even!');
        });

        it('throws when is not a number', () => {
            expect(() => testNumbers.numberChecker([1, 2, 3])).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker('sdasd')).to.throw('The input is not a number!');
        });

    });

    describe('averageSumArray tests', () => {

        it('returns correct average of an array', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([1, 8, 5])).to.equal(4.666666666666667);
        });

    });
});