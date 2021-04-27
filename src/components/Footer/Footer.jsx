import React from 'react';
import { CgPhone } from 'react-icons/cg';
import { FaFacebookF, FaInstagram, FaTelegram, FaYoutube, FaOdnoklassniki, FaVideo } from 'react-icons/fa';
import './Footer.css';
function Footer() {
	return (
		<div className="footerr">
			<footer className="container py-5">
				<div className="row">
					<div className="col-12 col-md">
						<h5>Kompanya</h5>
						<ul className="list-unstyled text-small">
							<li>
								<a className="text-muted" href="/">
									Yangiliklar
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Do'kon manzillari
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Kompaniya haqida
								</a>
							</li>
						</ul>
					</div>
					<div className="col-12 col-md">
						<h5>Xaridorga yordam</h5>
						<ul className="list-unstyled text-small">
							<li>
								<a className="text-muted" href="/">
									Savol va Javob
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Saytda qanday buyurtma berish kerak
								</a>
							</li>
							<li>
								<a className="text-muted" href="/">
									Tovarlarni almashtirish,qaytarish va ta'mirlash
								</a>
							</li>
						</ul>
					</div>
					<div className="col-12 col-md">
						<h5>Ma'lumot turlari</h5>
						<ul class="list-unstyled text-small">
							<li>
								<a className="text-muted" href="/">
									Muddatli to'lov
								</a>
							</li>
							<li>
								<a class="text-muted" href="/">
									Yetkazib berish
								</a>
							</li>
							<li>
								<a class="text-muted" href="/">
									Bonuslar To'lov
								</a>
							</li>
						</ul>
					</div>
					<div class="col-12 col-md">
						<h5>Resources</h5>
						<ul class="list-unstyled text-small my-3">
							<li>
								<a class="text-muted" href="/">
									<CgPhone /> +998(99)448-36-90
								</a>
							</li>
						</ul>
					</div>
					<div class="col-12 col-md">
						<h5>Bizni kuzating</h5>
						<ul class="list-unstyled text-small d-flex align-items-center">
							<li className="nav-item">
								<a class="text-muted" href="/">
									<FaFacebookF />
								</a>
							</li>
							<li>
								<a class="text-muted ml-2" href="/">
									<FaInstagram />
								</a>
							</li>
							<li>
								<a class="text-muted mx-2" href="/">
									<FaTelegram />
								</a>
							</li>
							<li>
								<a class="text-muted" href="/">
									<FaOdnoklassniki />
								</a>
							</li>
							<li>
								<a class="text-muted mx-2" href="/">
									<FaYoutube />
								</a>
							</li>
							<li>
								<a class="text-muted" href="/">
									<FaVideo />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="container">
					<div className="row d-flex justify-content-between">
						<h6 className="d-block mb-3 mt-3 text-muted text-light">
							Copyright &copy; 2021 GOODZONE.UZ internet-do'koni. Barcha huquqlar himoyalangan.
						</h6>
						<h6 className="d-block mb-3 mt-3 text-muted text-light">Created By Shokhzod</h6>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
