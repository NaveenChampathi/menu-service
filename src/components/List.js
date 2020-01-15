import React from 'react';

const List = ({ categories, getMenuItemsForACategory }) => {
    return <ul>
        {
            categories.map( (category, i) => {
                return <li key={i} onClick={() => getMenuItemsForACategory(category.short_name) }>{category.name}</li>
            })
        }
        </ul>;
};

export default List;