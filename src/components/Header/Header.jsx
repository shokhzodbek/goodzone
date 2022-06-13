import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from 'react-bootstrap/Button';
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import { CgPhone } from "react-icons/cg";
import "./Header.css";
import logo from "../../assets/logo.png";
import LoginPage from "../../pages/LoginPage";
import uzicon from "../../assets/uz.png";
import Searchh from "../fragments/Search";
import ToggleMenu from "../fragments/ToggleMenu";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
const HeaderTop = () => {
  let lang = ["O'zbek", "Русский"];
  let location = ["Toshkent", "Samarkand"];
  const [drop, setDrop] = useState(true);
  const [locat, setLocat] = useState(location[0]);
  const [lan, setlan] = useState(lang[0]);
  return (
    <div className="header-top">
      <div className="top-left">
        <a href="/">Do'konlar</a>
        <a href="/">Yetkazib berish</a>
        <a href="/">Blog</a>
      </div>
      <div className="top-right">
        <div className="top-drop">
          <h3>{locat}</h3> <BiChevronDown />
        </div>
        <span>|</span>
        <div className="lang">
          <img src={uzicon} alt="" /> <h3>{lan}</h3>
        </div>
        <span>|</span>
        <div className="phone-number">
          <CgPhone /> +998(99)448-77-77
        </div>
      </div>
    </div>
  );
};

const HeaderMiddle = () => {
  const [activeLogin, setActiveLogin] = useState(true);
  const handleActiveLogin = () => {
    setActiveLogin(!activeLogin);
  };
  return (
    <>
      <div className={`header-middle`}>
        <img src={logo} alt="" style={{ height: 100 }} />
        <form>
          <input type="text" placeholder="Mahsulot bo'yicha qidirish" />
          <button type="submit">
            <BiSearch />
          </button>
        </form>

        <Button
          onClick={handleActiveLogin}
          variant="contained"
          color="secondary"
          className="enter-button"
          startIcon={<InputIcon />}
        >
          <h3>Kirish</h3>
        </Button>
      </div>
      <LoginPage close={activeLogin} closeHandle={handleActiveLogin} />
    </>
  );
};

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
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
  );
};
// responseve header
const HeaderRes = ({ handle, handleToggle }) => {
  return (
    <div className="header-res">
      <div className="menu-icon">
        <MenuIcon
          style={{ fontSize: 36, fontWeight: 300 }}
          onClick={handleToggle}
        />
      </div>

      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="search-icon">
        <BiSearch style={{ fontSize: 20, fontWeight: 600 }} onClick={handle} />
      </div>
    </div>
  );
};

const HeaderResBottom = () => {
  const [activeLogin, setActiveLogin] = useState(true);
  const handleActiveLogin = () => {
    setActiveLogin(!activeLogin);
  };
  return (
    <>
      <div className="header-res-bottom">
        <div className="phone-number">
          <CgPhone /> +998(99)444-77-77
        </div>
        <Button
          onClick={handleActiveLogin}
          variant="contained"
          color="secondary"
          className="enter-button"
          startIcon={<InputIcon />}
        >
          <h3>Kirish</h3>
        </Button>
      </div>
      <LoginPage close={activeLogin} closeHandle={handleActiveLogin} />
    </>
  );
};
function Header() {
  const [search, setSearch] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleSearchPage = () => {
    setSearch(!search);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
      {toggle && <ToggleMenu handle={handleToggle} />}
      {search && <Searchh handle={handleSearchPage} />}
      {search || toggle ? null : (
        <div>
          <HeaderRes handle={handleSearchPage} handleToggle={handleToggle} />
          <HeaderResBottom />
        </div>
      )}
    </div>
  );
}

export default Header;
