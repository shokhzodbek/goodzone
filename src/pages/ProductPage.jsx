import React from 'react';
import image from '../assets/items/item.jfif';
import './ProductPage.css';
import { RiArrowDropRightLine, RiStarFill } from 'react-icons/ri';
import { BsArrowLeftShort, BsChat } from 'react-icons/bs';
import image1 from '../assets/brandlar/1.png';
import { FaShoppingBag } from 'react-icons/fa';
import AboutProduct from '../components/AboutProduct/AboutProduct';
import products from '../products';
import { useParams } from 'react-router-dom';

const ProductRight = ({ product }) => {
	return (
		<div className="product-right">
			<h3>
				<span>{product.name}</span>
			</h3>
			<img src={image1} alt="" />
			<div className="product-rating">
				<RiStarFill />
				<RiStarFill />
				<RiStarFill />
				<RiStarFill />
				<RiStarFill />
				<span>
					<BsChat />
					<span>(Sharhlar yuq)</span>
				</span>
			</div>
			<span>
				<a href="/">Tovar haqida</a>
			</span>
			<div className="product-price">
				<span>{product.price} so'm</span>
				<span>Sotuvda mavjud</span>
			</div>
			<div className="product-button">
				<button className="btn1">
					<FaShoppingBag />
					<span>Sotib olish</span>
				</button>
				<button className="btn1 btn2">UNIRED tomonidan hisonlash</button>
			</div>
			<p>
				Veb-saytdagi narxlar bizning do'konimizdagi narxlardan farq qilishi mumkin. Tafsilotlar bizning
				call-markazimizda: +998712070307
			</p>
		</div>
	);
};

const ProductLift = ({ product }) => {
	return (
		<div className=" product-left">
			<a href="/">
				<BsArrowLeftShort style={{ fontSize: 20 }} />
				<span> Orqaga</span>
			</a>
			<img src={product.image} alt="product" />
		</div>
	);
};

const ProductLocation = ({ product }) => {
	return (
		<div className="page-location">
			<a href="/">
				Bosh sahifa
				<RiArrowDropRightLine />
			</a>

			<a href="/">
				Product tur
				<RiArrowDropRightLine />
			</a>

			<span>{product.name}</span>
		</div>
	);
};
function ProductPage() {
	let { id } = useParams();
	let product = products.find((prod) => prod._id === id);
	console.log(product);
	return (
		<div className="product-page">
			<ProductLocation product={product} />
			<div className="product-image">
				<ProductLift product={product} />
				<ProductRight product={product} />
			</div>
			<AboutProduct />
		</div>
	);
}

export default ProductPage;
