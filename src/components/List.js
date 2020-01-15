import React from 'react';

const List = ({ categories }) => {
    return <ul>
        {
            categories.map( (category, i) => {
                return <li key={i}>{category.name}</li>
            })
        }
        </ul>;
};

export default List;