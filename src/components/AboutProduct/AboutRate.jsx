import React from 'react';
import { RiStarFill } from 'react-icons/ri';
import './AboutRate.css';
import { Button } from 'react-bootstrap';
function AboutRate() {
	return (
		<div className="about-rate">
			<div className="about-star">
				<RiStarFill />
				<RiStarFill />
				<RiStarFill />
				<RiStarFill />
				<RiStarFill />
			</div>
			<input type="text" placeholder="Ismizdi kiriting" />
			<textarea placeholder="Fikrizdi qoldiring" name="" id="" cols="30" rows="7" />
			<div className="about-rate-button">
				<Button className="btn" variant="danger">
					Fikringizdi qoldiring
				</Button>
			</div>
		</div>
	);
}

export default AboutRate;
