import React from 'react';
import { Link } from 'react-router-dom';

function Header({ sellerId, storeInfo }) {
    return (
        <header id="header-sticky" className="header-1">
            <div className="container-fluid style-2">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="logo">
                            <Link to={`/store/${sellerId}`} className="header-logo">
                                {storeInfo && storeInfo.icon ? (
                                    <img src={storeInfo.icon} alt={storeInfo.name || "Store Logo"}/>
                                ) : (
                                    <img src="assets/img/logo/red-logo.svg" alt="logo-img"/>
                                )}
                            </Link>
                            <Link to={`/store/${sellerId}`} className="header-logo-2 d-none">
                                {storeInfo && storeInfo.icon ? (
                                    <img src={storeInfo.icon} alt={storeInfo.name || "Store Logo"}/>
                                ) : (
                                    <img src="assets/img/logo/red-logo.svg" alt="logo-img"/>
                                )}
                            </Link>
                        </div>
                        <div className="mean__menu-wrapper">
                            <div className="main-menu">
                                <nav id="mobile-menu" style={{ display: 'block' }}>
                                    <ul>
                                        <li className="has-dropdown active menu-thumb">
                                            <a href="#">
                                                Ana Sayfa
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </a>
                                        </li>
                                        <li className="has-dropdown">
                                            <a href="#">
                                                Sayfalar
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="#">Hakkımızda</a></li>
                                                <li><a href="#">Sipariş Takibi</a></li>
                                                <li><a href="#">Giriş</a></li>
                                                <li><a href="#">Kayıt</a></li>
                                                <li><a href="#">Kategoriler</a></li>
                                                <li><a href="#">SSS</a></li>
                                                <li><a href="#">404</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Mağaza
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="#">Ürün Listesi</a></li>
                                                <li><a href="#">Sepet</a></li>
                                                <li><a href="#">Ödeme</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Blog
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </a>
                                            <ul className="submenu">
                                                <li><a href="#">Blog Grid</a></li>
                                                <li><a href="#">Blog List</a></li>
                                                <li><a href="#">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">İletişim</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
                            <div className="search-widget">
                                <form action="#">
                                    <input type="text" placeholder="Ürün ara..."/>
                                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <a href="#0" className="search-trigger search-icon style-2"><i className="fa-regular fa-magnifying-glass"></i></a>
                            <div className="header__hamburger d-xl-none my-auto">
                                <div className="sidebar__toggle">
                                    <i className="fas fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header; 