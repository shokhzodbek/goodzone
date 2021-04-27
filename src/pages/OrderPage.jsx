import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import './OrderPage.css';
import ShowOrder from '../pages/ShowOrder';
import { useSelector } from 'react-redux';
function OrderPage({ number = 0, price = 0 }) {
	const data = useSelector((state) => state.cart);
	console.log(data);
	const [show, setShow] = useState(false);
	const handleButoon = () => {
		setShow(!show);
	};
	return (
		<>
			<div className="order-page" onClick={handleButoon}>
				<div className="order-number">
					<FaShoppingBag />
					<span>{data?.cartItems.length} шт.</span>
				</div>
				<div className="order-price">
					<span>{data?.cartItems.reduce((sum, x) => (sum += parseFloat(x.price)), 0)} so'm</span>
				</div>
			</div>
			<ShowOrder show={show} handle={handleButoon} />
		</>
	);
}

export default OrderPage;
