import React from 'react';

const TableBody = ({ items }) => {
    return <tbody>
        {
            items.map( item => {
                return <tr>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.description}
                    </td>
                </tr>
            })
        }
    </tbody>
}

const ItemsTable = ({ items }) => {
    return <table className="table">
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
        <TableBody items={items} />
    </table>
}


export default ItemsTable;