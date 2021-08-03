import { CHANGE_CATEGORY } from './index';

const changeCategory = (category) => ({
  type: CHANGE_CATEGORY,
  payload: category,
});

export default changeCategory;
