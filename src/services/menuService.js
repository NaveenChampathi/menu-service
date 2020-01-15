const domain = 'http://stream-restaurant-menu-svc.herokuapp.com';

const getCategoryURL = () => {
    return `${domain}/category`;
}

const getCategoryItemsURL = (category) => {
    return `${domain}/item?category=${category}`;
}

const getCategories = ( ) => {
    return fetch(getCategoryURL()).then( res => {
            return res.json();
        }   
    )
}

const getCategoryItems = (category) => {
    return fetch(getCategoryItemsURL(category)).then( res => {
            return res.json();
        }   
    )
}

export default {
    getCategories,
    getCategoryItems
};