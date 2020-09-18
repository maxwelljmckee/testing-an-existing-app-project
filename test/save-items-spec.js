const { expect } = require('chai');
const { saveItems } = require('../save-items');


describe("The saveItems function", () => {
  it('adds the new item to the list', () => {
    const items = [];
    const newItem = { bingo: 'bango'}

    const actual = saveItems(items, newItem)
    const expected = [{ bingo: 'bango' }]

    expect(actual).to.eql(expected);
  });

  it('makes sure the result and the original are different', () => {
    const items = [
      { title: 'Title 1', category: 'Category 1' },
    ];
    const newItem = { bingo: 'bango' }
    const actual = saveItems(items, newItem);
    const expected = [
      { title: 'Title 1', category: 'Category 1' },
      { bingo: 'bango' }
    ];

    expect(actual).to.eql(expected);
    expect(items).to.not.equal(actual);
  });
});
