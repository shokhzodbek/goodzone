import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { RiCloseLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cardAction';
import './OrderItem.css';
function OrderItem({ items }) {
	const dispatch = useDispatch();
	// const dispatch = useDispatch();
	// const { count } = useSelector((state) => state.counter);
	// console.log('count++++++++++++++++', count);
	const [count, setCount] = useState(1);
	const increaseCount = (e) => {
		e = count;
		setCount((e += 1));
	};
	const decreaseCount = (e) => {
		e = count;
		setCount((e -= 1));
	};
	const removeCart = (id) => {
		dispatch(removeFromCart(id));
	};
	return (
		<div className="orderItem">
			<div className="number-items">
				<AddIcon onClick={increaseCount} />
				<span>{count < 0 ? setCount(1) : count}</span>
				<RemoveIcon onClick={decreaseCount} />
			</div>
			<img src={items.image} alt="" />
			<div className="price-item">
				<h5>{items.name}</h5>
				<span>{items.price} so'm</span>
			</div>
			<span>{count * items.price} so'm</span>
			<RiCloseLine style={{ color: 'lightgray', fontWeight: 'bold' }} onClick={() => removeCart(items.product)} />
		</div>
	);
}

export default OrderItem;
