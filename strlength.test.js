const stringLength = require('./strLength')

test(' 1 character long and not longer than 10 characters', ()=> {
    expect(stringLength('Progress')).not.toBe(6);
    expect(stringLength('bb')).toBeGreaterThanOrEqual(1);
    expect(stringLength('ben')).toBeGreaterThan(2);
    expect(stringLength('Progress')).toBeLessThanOrEqual(8);
})

