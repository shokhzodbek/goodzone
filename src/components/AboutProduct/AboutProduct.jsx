import React, { useState } from 'react';
import './AboutProduct.css';
import { AiTwotoneShop } from 'react-icons/ai';
import { MdChatBubble } from 'react-icons/md';
import { FaDropbox } from 'react-icons/fa';
import AboutContainer from './AboutContainer';
import AboutItem from './AboutItem';
import AboutRate from './AboutRate';
import AboutExist from './AboutExist';
function AboutProduct() {
	const [active, setActive] = useState(true);
	const [active1, setActive1] = useState(null);
	const [active2, setActive2] = useState(null);
	const handleActive = () => {
		setActive(true);
		setActive1(false);
		setActive2(false);
	};
	const handleActive2 = () => {
		setActive(false);
		setActive1(true);
		setActive2(false);
	};
	const handleActive3 = () => {
		setActive(false);
		setActive1(false);
		setActive2(true);
	};
	return (
		<div className="about-products">
			<div className="about-button">
				<span onClick={handleActive} className={`${active && 'active'}`}>
					<FaDropbox style={{ marginRight: 10 }} /> Tovar haqida
				</span>
				<span onClick={handleActive2} className={`${active1 && 'active'}`}>
					<AiTwotoneShop style={{ marginRight: 10 }} />
					Do'konlarda mavjudligi
				</span>
				<span onClick={handleActive3} className={`${active2 && 'active'}`}>
					<MdChatBubble style={{ marginRight: 10 }} /> Sharhlar
				</span>
			</div>
			<AboutContainer>
				{active && <AboutItem />}
				{active1 && <AboutExist />}
				{active2 && <AboutRate />}
			</AboutContainer>
		</div>
	);
}

export default AboutProduct;
