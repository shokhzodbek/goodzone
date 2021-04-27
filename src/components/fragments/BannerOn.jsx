import React from 'react';
import banner from '../../assets/banner/7.jfif';
import './BannerOn.css';
function BannerOn() {
	return (
		<div className="bannerOn">
			<div className="row">
				<div className="col-lg-12 " style={{ width: '100%' }}>
					<img src={banner} alt="" style={{ width: '100%', height: '100%', borderRadius: 10 }} />
				</div>
			</div>
		</div>
	);
}

export default BannerOn;
