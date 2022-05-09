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

    describe("when multiply", () => {
        it('should be able to sum two numbers', () => {
            expect(mathUtil.multiplyArray([5, 5, 4])).toBe(100);
        });
    });
    
    describe("when sub", () => {
        it('should be able to subtract two numbers', () => {
            expect(mathUtil.sub(100, 80)).toBe(20);
            expect(mathUtil.sub(100, 150)).toBe(-50);
        });
    });

});
