import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import './LoginPage.css';
const RegisterCard = ({ handle }) => {
	return (
		<div className="register-card">
			<h3>Ro'yxatdan o'tish</h3>

			<form action="">
				<input type="text" placeholder="Ism" />
				<input type="text" placeholder="Familya" />
				<input
					type="tel"
					id="phone"
					name="phone"
					placeholder="Telefon raqamingizdi kiriting"
					pattern="[+]{1}[0-9]{11,14}"
					required
				/>
				<input type="password" placeholder="Parolni kiriting" />
				<input type="password" placeholder="Paroldi tasdiqlang" />
				<Button variant="danger">Ro'yhatdan o'tish</Button>
				<span>
					Ro'yhatdan o'tganmisiz? <span onClick={handle}>Kirish</span>
				</span>
			</form>
		</div>
	);
};
const RegisteredCard = ({ handle }) => {
	return (
		<div className="register-card">
			<h3>Xush kelibsiz</h3>
			<span>Telefon raqamingiz parolingiz bilan kiring</span>

			<form action="">
				<input
					type="tel"
					id="phone"
					name="phone"
					placeholder="Telefon raqamingizdi kiriting"
					pattern="[+]{1}[0-9]{11,14}"
					required
				/>
				<input type="password" placeholder="Parolni kiriting" />
				<Button variant="danger">Kirish</Button>
				<span>
					Ro'yhatdan o'tganmisiz? <span onClick={handle}>Ro'yhatdan o'tish</span>
				</span>
			</form>
		</div>
	);
};
function LoginPage({ close, closeHandle }) {
	const [actives, setActives] = useState(true);
	const handleActivites = () => {
		setActives(!actives);
	};
	return (
		<div className={`login-page ${close && 'close'}`}>
			<div className="login-close" onClick={closeHandle}>
				<MdClose />
			</div>
			{actives ? <RegisteredCard handle={handleActivites} /> : <RegisterCard handle={handleActivites} />}
		</div>
	);
}

export default LoginPage;
