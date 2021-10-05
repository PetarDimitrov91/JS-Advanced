const sum = require('./sum');
const { expect } = require('chai');

describe('Demo Test', () => {
    // it('passing test', () => {
    //     'do nothing';
    // });

    // it('failing test', () => {
    //     throw Error('on purpose');
    // });

    it('works with 5 and 3', () => {
        expect(sum(5, 3)).to.equal(8);
    });
});