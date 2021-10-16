const { expect } = require('chai');
const cinema = require('../cinema');

describe('Cinema tests', () => {
    describe('showMovies tests', () => {
        it('returns the correct string wehne the arr.length == 0', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });

        it('returns correct movies', () => {
            const movies = ['King Kong', 'The Tomorrow War', 'Joker'];
            expect(cinema.showMovies(movies)).to.equal(movies.join(', '));
        });
    });

    describe('ticketPrice tests', () => {
        /*
        "Premiere": 12.00,
        "Normal": 7.50,
        "Discount": 5.50
         */
        it('returns the correct price for Premiere', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(Number(12.00));
        });

        it('returns the correct price for Normal', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(Number(7.50));
        });

        it('returns the correct price for Discount', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(Number(5.50));
        });

        it('throws when no such projectionType is given', () => {
            expect(() => cinema.ticketPrice('notValid')).to.throw('Invalid projection type.');
        });

    });

    describe('swapSeatsInHall', () => {
        it('returns correct when one parameter does not exist', () => {
            expect(cinema.swapSeatsInHall(10)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('returns correct when the numbers are not integers', () => {
            expect(cinema.swapSeatsInHall(12.5, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(12, 12.2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('12.5', 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(12, '10')).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('returns correct when one of the numbers are > 20', () => {
            expect(cinema.swapSeatsInHall(21, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 21)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('returns correct when the Seats are less or equal of 0', () => {
            expect(cinema.swapSeatsInHall(-1, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, -1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 2)).to.equal('Unsuccessful change of seats in the hall.');

        });

        it('returns correct when the Seats are correct', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 1)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 1)).to.equal('Successful change of seats in the hall.');
        });
    });
});