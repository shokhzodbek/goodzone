import React from 'react';

import banner1 from '../../assets/banner/4.jfif';
import banner2 from '../../assets/banner/5.jfif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';
function Banner() {
	return (
		<div className="banners container-fluid">
			<div className="row">
				<div className="col-lg-9 mb-4">
					<img src={banner2} className="banner2" alt="" />
				</div>

				<div className="col-lg-3">
					<img src={banner1} className="banner1" alt="" />
				</div>
			</div>
		</div>
	);
}

export default Banner;
