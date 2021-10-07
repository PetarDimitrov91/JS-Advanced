const { expect } = require('chai');
const lookupChar = require('../charLookup');

describe('lookupChar Main Condition Tests', () => {
    it('is Undefined string', () => {
        expect(lookupChar(2, 2)).to.be.undefined;
    });

    it('is Undefined index', () => {
        expect(lookupChar('Petar', '2')).to.be.undefined;
    });

    it('is Undefined index', () => {
        expect(lookupChar('s')).to.be.undefined;
    });

    it('is Undefined index', () => {
        expect(lookupChar(2)).to.be.undefined;
    });

    it('index < 0', () => {
        expect(lookupChar('Petar', -1)).to.equal('Incorrect index');
    });

    it('index > str.length', () => {
        expect(lookupChar('Petar', 5)).to.equal('Incorrect index');
    });

    it('index > str.length', () => {
        expect(lookupChar('Petar', 25)).to.equal('Incorrect index');
    });

    it('index is floating point number', () => {
        expect(lookupChar('Petar', 3.3)).to.be.undefined;
    });

    it('returns the exact char', () => {
        expect(lookupChar('Petar', 0)).to.equal('P');
    });

    it('for empty string returns undefind', () => {
        expect(lookupChar('', 1)).to.equal('Incorrect index');
        expect(lookupChar('', 0)).to.equal('Incorrect index');
    });

    it('should return "o" on lookupChar("hello", 4)', () => {
        expect(lookupChar("hello", 4)).to.equal('o');
    });

});