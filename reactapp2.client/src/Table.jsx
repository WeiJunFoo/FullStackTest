import React from 'react'
import Button from './Button';


function Table(props) {
    return (
        <table className="table table-striped border" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(customer =>
                    <tr key={customer.id}>
                        <td>{customer.firstName +" " + customer.lastName}</td>
                        <td><Button type="Edit" id={customer.id} /></td>
                        <td><Button type="Delete" id={customer.id} /></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
export default Table;
