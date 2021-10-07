const { expect } = require('chai');
const isOddOrEven = require('../evenOrOdd.js');

describe('even or odd', () => {
    it('isOdd', () => {
        expect(isOddOrEven('Petar')).to.equal('odd');
    });

    it('isEven', () => {
        expect(isOddOrEven('Ivan')).to.equal('even');
    });

    it('toBeUndefined', () => {
        expect(isOddOrEven(2)).to.be.undefined;
    });
});