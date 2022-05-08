const mathUtil = require('../../src/math-util');

describe("MathUtil", () => {
    
    describe("when sum", () => {
        it('should be able to sum two numbers', () => {
            expect(mathUtil.sum(5, 5)).toBe(10);
        });

        it('should be able to sum many numbers', () => {
            expect(mathUtil.sumArray([10,10,10,10,10, 50])).toBe(100);
        });
    });

});