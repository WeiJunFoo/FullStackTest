import React from 'react'
import Button from './Button';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios'; 
import { createCustomer, getCustomer, updateCustomer, deleteCustomer } from './Service';
import { useParams } from 'react-router-dom';


function FormPage(props, history) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });

    useEffect(() => {
        if (id !== undefined) {
            loadCustomer();
        }
    }, [id]);

    const loadCustomer = async () => {
        const result = await getCustomer(id);
        setCustomer(result.data);
    };

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id == undefined) {
            await createCustomer(customer);
        } else {
            if (props.type == "Edit") {
                await updateCustomer(id, customer);
            }
            else {
                await deleteCustomer(id);
            }
            
        }
        navigate('/');
    };

    const Back = () => {
        navigate("/");
    }

    return (
        <div className="container">
            <div className="mb-4">
                <h1>Customer Profile</h1>
            </div>
            
            <form onSubmit={handleSubmit} >
                <div className="row mb-3">
                    <div className="col-2">
                        <label className="col-form-label">First Name: </label>
                    </div>
                    <div className="col-4">
                        <input className="form-control" name="firstName" value={customer.firstName} onChange={handleChange} required></input>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Last Name: </label>
                    </div>
                    <div className="col-4">
                        <input className="form-control" name="lastName" value={customer.lastName} onChange={handleChange} required></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-2">
                        <label className="col-form-label">Phone: </label>
                    </div>
                    <div className="col-4">
                        <input type="tel" className="form-control" name="phone" value={customer.phone} onChange={handleChange} required></input>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Email: </label>
                    </div>
                    <div className="col-4">
                        <input type="email" className="form-control" name="email" value={customer.email} onChange={handleChange} required></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-2">
                        <label className="col-form-label">Address: </label>
                    </div>
                    <div className="col-4">
                        <input className="form-control" name="address" value={customer.address} onChange={handleChange}></input>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">City: </label>
                    </div>
                    <div className="col-4">
                        <input className="form-control" name="city" value={customer.city} onChange={handleChange}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-2">
                        <label className="col-form-label">Postcode: </label>
                    </div>
                    <div className="col-4">
                        <input type="number" className="form-control" name="postalCode" value={customer.postalCode} onChange={handleChange}></input>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Country: </label>
                    </div>
                    <div className="col-4">
                        <input className="form-control" name="country" value={customer.country} onChange={handleChange}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <button className="btn btn-dark form-control" type="submit" >{props.type}</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-outline form-control" onClick={() => Back()}>Back</button>
                    </div>
                </div>

                
            </form>
        </div>
    );
}
export default FormPage;
