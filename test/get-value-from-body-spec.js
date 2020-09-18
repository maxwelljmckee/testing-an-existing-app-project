const { expect } = require('chai');
const { getValueFromBody } = require('../get-value-from-body');

describe("The getValueFromBody function", () => {
  it('returns an empty string for an empty body', () => {
    // Arrange
    const body = "";
    const key = "notThere";

    // Act
    const actual = getValueFromBody(body, key)
    const expected = '';

    // Assert
    // Replace the fail line with an assertion for the
    // expected value of ""
    expect(actual).to.equal(expected)
  });
  
  it('returns an empty string for a body without the key', () => {
    const body = "name=Bess&age=29&job=Boss";
    const key = "notThere";
    
    const actual = getValueFromBody(body, key);
    const expected = '';

    expect(actual).to.equal(expected)
  });

  it('returns the value of the key in a simple body', () => {
    const body = "name=Bess";
    const key = "name";

    // Act
    const actual = getValueFromBody(body, key);
    const expected = 'Bess';


    // Assert
    expect(actual).to.equal(expected)
  });

  it('returns the value of the key in a complex body', () => {
    const body = "name=Bess&age=29&job=Boss";
    const key1 = 'name';
    const key2 = 'age';
    const key3 = 'job';
    

    // Act
    const test1 = getValueFromBody(body, key1);
    const test2 = getValueFromBody(body, key2);
    const test3 = getValueFromBody(body, key3);

    // Assert
    expect(test1).to.equal('Bess');
    expect(test2).to.equal('29');
    expect(test3).to.equal('Boss');
  });

  it('decodes the return value of URL encoding', () => {
    const body = "name=Bess&age=29&job=Boss&level=Level%20Thirty-One";
    const key = "level";

    // Act
    const actual = getValueFromBody(body, key);
    const expected = 'Level Thirty-One';

    // Assert
    expect(actual).to.equal(expected)
  });
});
