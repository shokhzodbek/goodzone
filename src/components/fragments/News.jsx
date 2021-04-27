import React from 'react';
import imgOne from '../../assets/news/1.png';
import imgTwo from '../../assets/news/2.jfif';
import imgThree from '../../assets/news/3.jfif';
import { Card } from 'react-bootstrap';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './News.css';
const data = [
	{
		id: '1',
		title: 'Итоги детского конкурса',
		img: imgOne,
		time: '01.01.2021'
	},
	{
		id: '2',
		title: 'Как выбрать подходящий',
		img: imgThree,
		time: '12.02.2021'
	},
	{
		id: '3',
		title: 'ASMR',
		img: imgTwo,
		time: '23.03.2021'
	}
];

function News() {
	return (
		<div className="news container-fluid">
			<h2>Habarlar</h2>
			<div className="row">
				{data.map((item) => (
					<div className="col-lg-4 col-md-12 mb-3">
						<Card>
							<Card.Img variant="top" src={item.img} />
							<Card.Body>
								<Card.Text>
									<h3>{item.title}</h3>
								</Card.Text>

								<div className="news-time">
									<span>{item.time}</span>
									<a href="/">
										Davom etish {''}
										<FaLongArrowAltRight />
									</a>
								</div>
							</Card.Body>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
}

export default News;
