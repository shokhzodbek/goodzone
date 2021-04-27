import React from 'react';
import './CardItem.css';

import product from '../../products';
import Carousel from 'react-multi-carousel';
import { FaShoppingBasket } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cardAction';
const Cardbox = ({ name, image, price, id }) => {
	const dispatch = useDispatch();
	return (
		<div className="card-custom">
			<Link to={`/product/${id}`}>
				<img src={image} alt="" />
			</Link>
			<div className="card-body">
				<div className="card-title">
					<h4>{name}Kalonka Xiomi 100 blackGOLD</h4>
					<span>{price} so'm</span>
				</div>
				<div className="card-button">
					<button onClick={() => dispatch(addToCart(id))}>
						<FaShoppingBasket />
						<span>Sotib olish</span>
					</button>
				</div>
			</div>
		</div>
	);
};

function CardItem() {
	return (
		<>
			<Carousel
				additionalTransfrom={0}
				arrows={false}
				autoPlaySpeed={3000}
				centerMode={false}
				className=""
				containerClass="container-fluid"
				dotListClass=""
				draggable={false}
				focusOnSelect={false}
				infinite
				itemClass=""
				keyBoardControl
				minimumTouchDrag={80}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024
						},
						items: 5,
						partialVisibilityGutter: 40,
						slidesToSlide: 5
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0
						},
						items: 2,
						partialVisibilityGutter: 30,
						slidesToSlide: 2
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464
						},
						items: 3,
						partialVisibilityGutter: 30,
						slidesToSlide: 3
					}
				}}
				showDots={true}
				sliderClass=""
				slidesToSlide={1}
				swipeable
			>
				{product.map((x) => (
					<Cardbox price={x.price} image={x.image} name={x.name} id={x._id} />
				))}
			</Carousel>
		</>
	);
}

export default CardItem;
