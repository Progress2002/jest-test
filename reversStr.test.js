const reverseString = require('./reverseStr')

test ('return the revers form of string', () => {
    expect(reverseString('abcd')).toBe('dcba');
})