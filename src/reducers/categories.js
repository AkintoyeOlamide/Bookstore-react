import { CHANGE_CATEGORY } from '../actions/index';

const initialState = {
  category: 'All',
};

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY: {
      const category = action.payload;
      return {
        category,
      };
    }
    default: return state;
  }
};

export default CategoriesReducer;
