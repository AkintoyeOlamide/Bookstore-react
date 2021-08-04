import React from 'react';

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <form>
    <div className="input-group">
      <input type="text" />
    </div>
    <div className="input-group">
      <select name="book-categories" id="categories">
        {
          bookCategories.map(category => (
            <option key={`key-${category}`} value={category}>
              {category}
            </option>
          ))
        }
      </select>
    </div>
    <button type="button">Submit</button>
  </form>
);

export default BooksForm;
