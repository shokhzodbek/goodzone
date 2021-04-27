import React from 'react';
import im1 from '../../assets/brandlar/1.png';
import im2 from '../../assets/brandlar/2.png';
import im3 from '../../assets/brandlar/3.png';
import im4 from '../../assets/brandlar/4.png';
import im5 from '../../assets/brandlar/5.png';
import im6 from '../../assets/brandlar/6.png';
import im7 from '../../assets/brandlar/7.png';
import im8 from '../../assets/brandlar/8.png';
import im9 from '../../assets/brandlar/9.png';
import im10 from '../../assets/brandlar/10.png';
import { Row, Col, Image } from 'react-bootstrap';
import './Brands.css';
const data = [
	{
		id: '1',
		image: im1
	},
	{
		id: '2',
		image: im2
	},
	{
		id: '3',
		image: im3
	},
	{
		id: '4',
		image: im4
	},
	{
		id: '5',
		image: im5
	},

	{
		id: '6',
		image: im6
	},
	{
		id: '7',
		image: im7
	},
	{
		id: '8',
		image: im8
	},
	{
		id: '9',
		image: im9
	},
	{
		id: '10',
		image: im10
	},
	{
		id: '9',
		image: im9
	},
	{
		id: '10',
		image: im10
	}
];

function Brands() {
	return (
		<div className="brands">
			<div className="container-fluid">
				<h2>Mashhur brandlar</h2>
				<div className="row">
					{data.map((it) => (
						<Col lg={2} md={12} style={{ marginBottom: 20 }}>
							<Image src={it.image} style={{ width: '100%' }} rounded />
						</Col>
					))}
				</div>
			</div>
		</div>
	);
}

export default Brands;
