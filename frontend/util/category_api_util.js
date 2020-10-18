export const fetchCategories = () => {
    return $.ajax({
        url: '/api/categories',
        method: 'GET'
    });
};

export const fetchCategory = (categoryId) => {
    return $.ajax({
        url: `/api/categoires/${categoryId}`,
        method: 'GET'
    });
};