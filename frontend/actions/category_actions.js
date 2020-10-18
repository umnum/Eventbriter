import * as CategoryAPIUtils from '../util/category_api_util';
import { receiveErrors } from '../actions/session_actions';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveCategories = (categories) => {
    return ({
        type: RECEIVE_CATEGORIES,
        categories
    });
};

export const receiveCategory = (category) => {
    return ({
        type: RECEIVE_CATEGORY,
        category
    });
};

export const fetchCategories = () => {
    return (dispatch => {
        return CategoryAPIUtils.fetchCategories()
            .then(categories => dispatch(receiveCategories(categories)),
                  errors => dispatch(receiveErrors(errors)));
    });
};

export const fetchCategory = (categoryId) => {
    return (dispatch => {
        return CategoryAPIUtils.fetchCategory(categoryId)
            .then(category => dispatch(receiveCategory(category)),
                  errors => dispatch(receiveErrors(errors)));
    });
};