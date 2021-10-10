const {expect, assert} = require('chai');
const PaymentPackage = require('../testing/payment');

describe('Testing the PaymentPackage Class', () => {
    let newInstance = null;

    describe('Name tests', () => {
        it('constructor', () => {
            let instance = new PaymentPackage('payment', 100);

            expect(instance._name).to.equals('payment');
            assert.equal(instance._value, 100, 'test passed');
            assert.equal(instance._VAT, 20, 'vat is not correct');
            assert.equal(instance._active, true, 'is not active');
        });

        it('should throw when name is not a string', () => {
            expect(() => new PaymentPackage(2, 3)).to.throw('Name must be a non-empty string');
        });

        it('should throw when name is empty string', () => {
            expect(() => new PaymentPackage('', 3)).to.throw('Name must be a non-empty string');
        });

        it('get should return a correct name', () => {
            let instance = new PaymentPackage('new Payment', 10);
            expect(instance.name).to.equals('new Payment');
        });
    });

    describe('Value tests', () => {
        it('Set value to null', () => {
            let instance = new PaymentPackage('Name', 100);
            assert.doesNotThrow(() => { instance.value = 0 })
        });

        it('should throw when the value is not a number', () => {
            expect(() => new PaymentPackage('payment', '9')).to.throw('Value must be a non-negative number');
        });

        it('should throw when the value is < 0', () => {
            expect(() => new PaymentPackage('payment', -1)).to.throw('Value must be a non-negative number');
        });

        it('get should return a correct value', () => {
            let instance = new PaymentPackage('new Payment', 10);
            expect(instance.value).to.equals(Number(10));
        });
    });

    describe('VAT Tests', () => {
        let instance = new PaymentPackage('payment', 100);
        it('should throw when we set a non number value', () => {
            expect(() => instance.VAT = 'false').to.throw('VAT must be a non-negative number');
        });

        it('should throw when we set a number < 0 ', () => {
            expect(() => instance.VAT = -1).to.throw('VAT must be a non-negative number');
        });

        it('should return a correct value', () => {
            expect(instance.VAT).to.equals(20);
        });

        it('should set a correct new value', () => {
            instance.VAT = 10;
            expect(instance.VAT).to.equal(10);
        });
    });

    describe('active tests', () => {
        beforeEach(() => {
            newInstance = new PaymentPackage('pay', 200)
        });

        it(`active should return true when new instance is initialised`, () => {
            expect(newInstance.active).to.equal(true);
        });

        it('should throw by setting a non boolean value', () => {
            expect(() => newInstance.active = 'petar').to.throw('Active status must be a boolean');
        });

        it('should return false when we set the value to false', () => {
            newInstance.active = false;
            expect(newInstance.active).to.equal(false);
        });
    });

    describe('toString tests', () => {
        beforeEach(() => {
            newInstance = new PaymentPackage('pays', 1000)
        });

        it('should return the correct string by active status', () => {
        expect(newInstance.toString()).to.equal('Package: pays\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200');
        });

        it('\'should return the correct string by not active status\'',() => {
            newInstance.active = false;
            expect(newInstance.toString()).to.equal('Package: pays (inactive)\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200');
        });
    });
});