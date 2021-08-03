import { connect } from 'react-redux';
import changeCategory from '../actions/categoryActions';
import categories from '../utils/cat';

const categorySelect = (props) => {
  const displayCategories = [];
  categories.map((cat) => displayCategories.push(<option value={cat}>{cat}</option>));

  return (
    <select
      name="categories"
      id="categories"
      required
      onChange={(e) => {
        props.changeCategory(e.target.options[e.target.selectedIndex].value);
        document.querySelector(
          '.book-list-header',
        ).innerText = `${e.target.value} BOOKS`;
      }}
      className=" w-100 form-select"
    >
      <option value="All" selected>
        All
      </option>
      {displayCategories}
    </select>
  );
};

const mapStateToProps = (state) => ({
  category: state.Category.category,
});
const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => dispatch(changeCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(categorySelect);
