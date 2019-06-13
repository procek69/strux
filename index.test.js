require('./index');

test('grouping by column "a"', () => {
    let array = [
        { a: 1, b: [1, 2, 3] },
        { a: 1, b: [1, 2] },
        { a: 2, b: [1, 2, 3, 4] },
    ];

    expect(array.groupByColumn('a')).toMatchObject([
        [
            { "a": 1, "b": [1, 2, 3] },
            { "a": 1, "b": [1, 2] },
        ],
        [
            { "a": 2, "b": [1, 2, 3, 4] }
        ]
    ]);
});

test('unique', () => {
    expect([1,2,3,4,4,4,3,3,3].uniques()).toMatchObject([1,2,3,4]);
});