const capitalize = require("./capiterlizer");


test('capiterlize progress to return Progress', () => {
    expect(capitalize('progress')).toBe('Progress');
    expect(capitalize('sam')).toBe('Sam');
    expect(capitalize('ben')).toBe('Ben');
})