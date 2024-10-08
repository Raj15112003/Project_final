import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../Pages/CSS/Checkout.css';

const Checkout = () => {
    // State variables to store address details
    const [name, setName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add logic to process the checkout, e.g., send the address details to a server
        // After processing, redirect the user to the payment method selection page
    };

    return (
        <div className='checkout'>
            <div className="checkout-container">
                <h2>Checkout</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Address Line 1:</label>
                        <input type="text" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Address Line 2:</label>
                        <input type="text" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>City:</label>
                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>State:</label>
                        <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Postal Code:</label>
                        <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
                    </div>
                    <Link to="/payment" className="place-order-link"><button>Place Order</button></Link> {/* Use Link component for navigation */}
                </form>
            </div>
        </div>
    );
};

export default Checkout;
