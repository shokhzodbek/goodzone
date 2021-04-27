import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import OrderItem from '../components/OrderItem/OrderItem';
import './ShowOrder.css';
function ShowOrder({ number = 0, show, handle }) {
	const data = useSelector((state) => state.cart);
	return (
		<div className={`show-order ${show && 'show-show'}`}>
			<div className="show-header">
				<div className="shov-header-basket">
					<FaShoppingBag />
					<span>{data?.cartItems.length} шт.</span>
				</div>
				<span>
					<RiCloseLine onClick={handle} />
				</span>
			</div>
			<div className="show-body">
				{data?.cartItems.length > 0 ? (
					data?.cartItems.map((item) => <OrderItem items={item} />)
				) : (
					<div className="empty-bucket">
						<h3>Savatda hech narsa yuq</h3>
					</div>
				)}
			</div>
			<button className="order-button">Buyurtma qilmoq</button>
		</div>
	);
}

export default ShowOrder;
