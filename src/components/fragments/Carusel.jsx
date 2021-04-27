import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/banner/1.png';
import img2 from '../../assets/banner/2.jfif';
import img3 from '../../assets/banner/3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
function Carusel1() {
	return (
		<div>
			<Carousel>
				<Carousel.Item interval={9000}>
					<img className="d-block w-100" src={img1} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item interval={9000}>
					<img className="d-block w-100" src={img2} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item interval={9000}>
					<img className="d-block w-100" src={img3} alt="First slide" />
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Carusel1;
