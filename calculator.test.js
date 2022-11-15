const calculator = require ('./calculator');

describe ('claculator', ()=> {
    test('add 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
        expect(calculator.add(5, 5)).toBe(10);
        expect(calculator.add(10, 2)).toBe(12);
    })

    test('subtract 5 - 2 to equal 3', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
        expect(calculator.subtract(10, 5)).toBe(5);
        expect(calculator.subtract(200, 1)).toBe(199);
    })

    test('dvide 10 / 5 to equal 2', () => {
        expect(calculator.divide(10, 5)).toBe(2);
        expect(calculator.divide(4, 2)).toBe(2);
        expect(calculator.divide(200, 5)).toBe(40);
    })

    test('multiply 5 * 2 to equal 10', () => {
        expect(calculator.multiply(5, 2)).toBe(10);
        expect(calculator.multiply(10, 5)).toBe(50);
        expect(calculator.multiply(200, 1)).toBe(200);
    })
})