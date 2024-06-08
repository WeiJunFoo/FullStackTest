import { useEffect, useState } from 'react';
import './App.css';
import FrontPage from './FrontPage';
import FormPage from './FormPage';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/Add" element={<FormPage type="Add" />} />
                    <Route path="/Edit/:id" element={<FormPage type="Edit" />} />
                    <Route path="/Delete/:id" element={<FormPage type="Delete" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;