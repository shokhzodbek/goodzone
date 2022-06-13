import React from "react";
import Carusel1 from "../components/fragments/Carusel";
import CardItem from "../components/fragments/CardItem";

import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../components/fragments/Banner";
import "./HomePage.css";
import BannerOn from "../components/fragments/BannerOn";
import News from "../components/fragments/News";
import Brands from "../components/fragments/Brands";

function HomePage() {
  return (
    <div className="home-page">
      {/* carusel */}
      <Carusel1 />
      {/* items */}
      <div className="home-item">
        <p>Yange mahsulotlar</p>
        <CardItem />
      </div>
      <div className="home-item">
        <CardItem />
      </div>
      <div className="home-item">
        <CardItem />
      </div>
      {/* banner */}
      <Banner />
      {/* items */}
      <div className="home-item">
        <p>Mahsulotlar</p>
        <CardItem />
      </div>
      {/* banner */}
      <BannerOn />
      {/* items */}
      <div className="home-item">
        <p>Yange mahsulotlar</p>
        <CardItem />
      </div>
      <div className="home-item">
        <p>Yange mahsulotlar</p>
        <CardItem />
      </div>
      <div className="home-item">
        <p>Yange mahsulotlar</p>
        <CardItem />
      </div>
      <Brands />
      <News />

      {/* items */}
      {/* banner */}
      {/* company logo */}
      {/* news */}
    </div>
  );
}

export default HomePage;
