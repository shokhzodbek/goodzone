import React from 'react';
import logo from '../../assets/logo.svg';
import { Close } from '@material-ui/icons';
import './ToggleMenu.css';
function ToggleMenu({ handle }) {
	return (
		<div className="menu-fixed">
			<div className="toogle-menu">
				<div className="close">
					<Close style={{ fontSize: 18, fontWeight: 500 }} onClick={handle} />
				</div>
				<div className="menu-head">
					<img src={logo} alt="logo" />
				</div>
				<div className="header-bottom1">
					<ul>
						<li>
							<a href="/">Aksiyalar va chegirmalar</a>
						</li>
						<li>
							<a href="/">Noutbok va komputerlar</a>
						</li>
						<li>
							<a href="/">Smartfon va gadjitlar</a>
						</li>
						<li>
							<a href="/">Televizor va audiolar</a>
						</li>
						<li>
							<a href="/">Oshxona jihozlari</a>
						</li>
						<li>
							<a href="/">Go'zallik va salomatlik</a>
						</li>
						<li>
							<a href="/">Uy uchun texnikalar</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ToggleMenu;
