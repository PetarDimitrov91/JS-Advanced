const { expect } = require('chai');
const { Repository } = require('../repository');

describe('Class Repository test', () => {


    describe('test consturctor', () => {
        let Repo = null;
        beforeEach(() => Repo = new Repository({
            name: "string",
            age: "number",
            birthday: "object"
        }));

        it('testcreating', () => {
            expect(Repo.props).deep.equal({
                name: "string",
                age: "number",
                birthday: "object"
            });
        });

        it('testing get data', () => {
            expect(Repo.count).to.equal(0);
        });

        it('throw with not present ID', () => {
            expect(() => Repo.getId(43124324234)).to.throw();
        });

    });
});