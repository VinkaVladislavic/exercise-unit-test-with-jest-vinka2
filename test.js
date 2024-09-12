const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(3.745);
})

test("One dollar should be (156.5 / 1.07) yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(3.5);
    const expected = 3.5 * (156.5 / 1.07);
    expect(yenes).toBe(expected);
})

test("One Yen should be ( 0.87 / 156.5 ) pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * ( 0.87 / 156.5 );
    expect(pounds).toBe(expected);
})
