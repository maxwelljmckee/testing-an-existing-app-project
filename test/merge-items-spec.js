const { expect } = require('chai');
const { mergeItems } = require('../merge-items');
describe("The mergeItems function", () => {
  const template = `
    <table>
      <tbody>
        <!-- Content here -->
      </tbody>
    </table>
  `;
  it("should return no <tr>s and no <td>s for no items", () => {
    const items = []
    const actual = mergeItems(template, items);
    
    expect(actual).to.contain('<table>')
    expect(actual).to.contain('</table>')
    expect(actual).to.contain('<tbody>')
    expect(actual).to.contain('</tbody>')
    expect(actual).to.not.contain('<tr>')
    expect(actual).to.not.contain('</tr>')
    expect(actual).to.not.contain('<td>')
    expect(actual).to.not.contain('</td>')
    expect(actual).to.not.contain('<!-- Content here -->')
  });
  
  it("should return a single <tr>, four <td>s, and a <form> for one uncompleted item", () => {
    const items = [
      { title: 'Title 1', category: 'Category 1' },
    ];
    const actual = mergeItems(template, items)

    expect(actual).to.contain('<table>')
    expect(actual).to.contain('</table>')
    expect(actual).to.contain('<tbody>')
    expect(actual).to.contain('</tbody>')
    expect(actual).to.contain('<tr>')
    expect(actual).to.contain('</tr>')
    expect(actual).to.contain('<td>Title 1</td>')
    expect(actual).to.contain('<td>Category 1</td>')
    expect(actual).to.contain('<form method="POST" action="/items/1">')
    expect(actual).to.not.contain('<!-- Content here -->')
  });

  it("should return a single <tr>, four <td>s, and no <form> for one completed item", () => {
    const items = [
      { title: 'Title 1', category: 'Category 1', isComplete: true },
    ];
    const actual = mergeItems(template, items);

    expect(actual).to.contain('<table>')
    expect(actual).to.contain('</table>')
    expect(actual).to.contain('<tbody>')
    expect(actual).to.contain('</tbody>')
    expect(actual).to.contain('<tr>')
    expect(actual).to.contain('</tr>')
    expect(actual).to.contain('<td>Title 1</td>')
    expect(actual).to.contain('<td>Category 1</td>')
    expect(actual).to.not.contain('<form method="POST" action="/items/1">')
    expect(actual).to.not.contain('<!-- Content here -->')
  });

  it("should return three <tr>s for three items", () => {
    expect.fail('please write this test');
  });
});
