// frontend/src/components/Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart, checkout }) => {
    // Calculate the total amount
    const totalAmount = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((product, index) => (
                        <li key={index}>
                            {product.name} - ${product.price}
                            <button onClick={() => removeFromCart(product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            {cart.length > 0 && <button onClick={checkout}>Checkout</button>}
        </div>
    );
};

export default Cart;
