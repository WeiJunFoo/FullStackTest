import React from 'react'
import Button from './Button';
import Table from './Table';
import { useEffect, useState } from 'react';
import { getCustomers, deleteCustomer } from './Service';


function FrontPage() {
    const [customers, setCustomers] = useState();

    useEffect(() => {
        loadCustomers();
    }, []);

    const contents = customers === undefined
        ? <p><em>Loading...</em></p>
        : <Table list= {customers} />;
    async function loadCustomers() {
        const result = await getCustomers();
        setCustomers(result.data);
    }

    return (
        <div className="container">
            <div className="mb-4">
                <h1 id="title">Customer List</h1>
            </div>
            <div className="d-flex justify-content-end mb-2">
                <Button type="Add" />
            </div>
            {contents}
        </div>
    );
}
export default FrontPage;
