const { expect } = require('chai');
const { searchItems } = require('../search-items');
describe("The searchItems function", () => {
  it('Returns an empty array when it is given an empty array and a non-empty term', () => {
    // ARRANGE
    const items = [];
    const term = 'apple';

    // ACT
    const result = searchItems(items, term);

    // ASSERT
    expect(result).to.have.length(0);
  });

  it('Returns all of the items when an empty search term is given', () => {
    // ARRANGE
    const items = [
      {title: 'It is 1', category: 'Category 1'},
      {title: 'THIS IS 2', category: 'Category 2'},
      {title: 'I am 1', category: 'Category 3'},
    ];
    const term = "";

    // ACT
    const result = searchItems(items, term);

    // ASSERT
    expect(result).to.have.length(items.length)
  });

  it('Returns items whose title contains the term, case insensitive', () => {
    // ARRANGE
    const items = [
      {title: 'It is 1', category: 'Category 1'},
      {title: 'THIS IS 2', category: 'Category 2'},
      {title: 'I am 1', category: 'Category 3'},
    ];
    const term = 'is';

    // ACT
    const result = searchItems(items, term);

    // ASSERT
    expect(result).to.have.length(2);
  });
});
