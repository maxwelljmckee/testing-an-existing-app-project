const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      let categories = [];
      let actual = mergeCategories(template, categories, 'li');

      expect(actual).to.contain('<div>');
      expect(actual).to.contain('</div>');
      expect(actual).to.contain('<ul>');
      expect(actual).to.contain('</ul>');
      expect(actual).to.not.contain('<li>');
      expect(actual).to.not.contain('</li>');
      expect(actual).to.not.contain('<!-- Content here -->');
    });
    
    it("should return a single <li> for one category", () => {
      let categories = ['item'];
      let actual = mergeCategories(template, categories, 'li');
      
      expect(actual).to.contain('<div>');
      expect(actual).to.contain('</div>');
      expect(actual).to.contain('<ul>');
      expect(actual).to.contain('</ul>');
      expect(actual).to.contain('<li>item</li>');
      expect(actual).to.not.contain('<!-- Content here -->');
    });
    
    it("should return an <li> for each category", () => {
      let categories = ['cat', 'dog', 'raccoon', 5, true];
      let actual = mergeCategories(template, categories, 'li');
      
      expect(actual).to.contain('<div>', '</div>', '<ul>', '</ul>');
      expect(actual).to.contain('<li>cat</li>');
      expect(actual).to.contain('<li>dog</li>');
      expect(actual).to.contain('<li>raccoon</li>');
      expect(actual).to.contain('<li>5</li>');
      expect(actual).to.contain('<li>true</li>');
      expect(actual).to.not.contain('<!-- Content here -->');
    });
  });

  
  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      const categories = [];
      const actual = mergeCategories(template, categories, 'option');

      expect(actual).to.contain('<div>');
      expect(actual).to.contain('</div>');
      expect(actual).to.contain('<select>');
      expect(actual).to.contain('</select>');
      expect(actual).to.not.contain('<option>');
      expect(actual).to.not.contain('</option>');
      expect(actual).to.not.contain('<!-- Content here -->');
    });

    it("should return a single <option> for one category", () => {
      const categories = ['item'];
      const actual = mergeCategories(template, categories, 'option');
      
      expect(actual).to.contain('<div>');
      expect(actual).to.contain('</div>');
      expect(actual).to.contain('<select>');
      expect(actual).to.contain('</select>');
      expect(actual).to.contain('<option>item</option>');
      expect(actual).to.not.contain('<option>monkey</option>');
      expect(actual).to.not.contain('<!-- Content here -->');
    });
    
    it("should return an <option> for each category", () => {
      const categories = ['Chores', 'Work', 'School']
      const actual = mergeCategories(template, categories, 'option');
      
      expect(actual).to.contain('<div>');
      expect(actual).to.contain('</div>');
      expect(actual).to.contain('<select>');
      expect(actual).to.contain('</select>');
      expect(actual).to.contain('<option>Chores</option>');
      expect(actual).to.contain('<option>Work</option>');
      expect(actual).to.contain('<option>School</option>');
      expect(actual).to.not.contain('<option>monkey</option>');
      expect(actual).to.not.contain('<!-- Content here -->');
    });
  });
});
