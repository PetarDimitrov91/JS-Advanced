const { expect, closeTo } = require('chai');
const mathEnforcer = require('../math');

describe('Math Enforcer Tests', () => {
    describe('addFive tests', () => {
        it('should add 5 to a number', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });

        it('should return undefind for not a number input', () => {
            expect(mathEnforcer.addFive('2')).to.be.undefined;
        });

        it('should return undefind for not a number input 2', () => {
            expect(mathEnforcer.addFive('SH')).to.be.undefined;
        });

        it('should adds correctly to a negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('test with floating point number', () => {
            expect(mathEnforcer.addFive(10.5)).to.be.closeTo(15.5, 0);
        });

    });

    describe('subtractTen tests', () => {

        it('shold subtract 10 from a number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });

        it('shold subtract 10 from a number second test', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        });

        it('shold subtract 10 from a number third test', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });

        it('should return undefind for not a number input', () => {
            expect(mathEnforcer.subtractTen('2')).to.be.undefined;
        });

        it('should return undefind for not a number input second test', () => {
            expect(mathEnforcer.subtractTen('fsdf')).to.be.undefined;
        });

        it('test with floating point number', () => {
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0);
        });

    });

    describe('sum tests', () => {
        it('returns undefined for not a number input', () => {
            expect(mathEnforcer.sum('2', 2)).to.be.undefined;
        });

        it('returns undefined for not a number input second', () => {
            expect(mathEnforcer.sum(2, '2')).to.be.undefined;
        });

        it('returns undefined for not a number input third', () => {
            expect(mathEnforcer.sum('2', '2')).to.be.undefined;
        });
        it('returns undefined for not a number input fourth', () => {
            expect(mathEnforcer.sum('sda', 2)).to.be.undefined;
        });

        it('returns undefined for not a number input fifth', () => {
            expect(mathEnforcer.sum(2, 'sdfs')).to.be.undefined;
        });

        it('returns undefined for not a number input sixth', () => {
            expect(mathEnforcer.sum('dsds', 'dsds')).to.be.undefined;
        });

        it('sum correctly to positive numbers', () => {
            expect(mathEnforcer.sum(1, 2)).to.equal(3);
        });

        it('sums correctly with first nagative number', () => {
            expect(mathEnforcer.sum(-1, 2)).to.equal(1);
        });

        it('sums correctly with second negative number', () => {
            expect(mathEnforcer.sum(1, -5)).to.equal(-4);
        });

        it('sums correctly with two negative numbers', () => {
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
        });

        it('test with floating point number', () => {
            expect(mathEnforcer.sum(1.5, 2)).to.be.closeTo(3.5, 0);
        });

        it('test with floating point number', () => {
            expect(mathEnforcer.sum(1.5, 1.5)).to.equal(3);
        });

        it('test with floating point number', () => {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
        });
    });

});