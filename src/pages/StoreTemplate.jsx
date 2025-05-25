import React from 'react'
import "../assets/StoreTemplate.css"

function StoreTemplate() {
    return (
        <div>

            {/* <!-- Preloader Start --> */}
            <div id="preloader" className="preloader">
                <div className="animation-preloader">
                    <div className="spinner">
                    </div>
                    <div className="txt-loading">
                        <span data-text-preloader="E" className="letters-loading">
                            E
                        </span>
                        <span data-text-preloader="C" className="letters-loading">
                            C
                        </span>
                        <span data-text-preloader="O" className="letters-loading">
                            O
                        </span>
                        <span data-text-preloader="M" className="letters-loading">
                            M
                        </span>
                        <span data-text-preloader="A" className="letters-loading">
                            A
                        </span>
                        <span data-text-preloader="S" className="letters-loading">
                            S
                        </span>
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Back To Top Start --> */}
            <button id="back-top" className="back-to-top">
                <i className="fa-regular fa-arrow-up"></i>
            </button>

            {/* <!--<< Mouse Cursor Start >>-->   */}
            <div className="mouse-cursor cursor-outer"></div>
            <div className="mouse-cursor cursor-inner"></div>

            {/* <!-- fix-area Start --> */}
            <div className="fix-area">
                <div className="offcanvas__info">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <a href="index.html">
                                        <img src="https://cdn.dsmcdn.com/seller-store/uploads/1118761/9cc4d81d-9f1a-4b32-9f92-fdc8658b1d4f.jpeg" alt="logo-img" />
                                    </a>
                                </div>
                                <div className="offcanvas__close">
                                    <button>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="text d-none d-xl-block">
                                Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                            </p>
                            <div className="mobile-menu fix mb-3"></div>
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="mailto:info@example.com"><span className="mailto:info@example.com">info@example.com</span></a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="tel:+11002345909">+11002345909</a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">

                                </div>
                                <a href="contact.html" className="theme-btn"><span>Let’s Talk <i className="fa-solid fa-arrow-right"></i></span></a>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas__overlay"></div>

            {/* <!-- Sidebar Area Here --> */}
            <div id="targetElement" className="side_bar slideInRight side_bar_hidden">
                <div className="side_bar_overlay"></div>
                <div className="cart-title mb-50">
                    <h4>Log in</h4>
                </div>
                <div className="login-sidebar">
                    <form action="#" id="contact-form" method="POST">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="form-clt">
                                    <span>Username or email address *</span>
                                    <input type="text" name="name15" id="name15" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-clt">
                                    <span>Password *</span>
                                    <input id="password" type="password" placeholder="" />
                                    <div className="icon"><i className="fa-regular fa-eye"></i></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <button className="theme-btn" type="submit"><span>Log In</span></button>
                            </div>
                            <div className="col-lg-12">
                                <div className="from-cheak-items">
                                    <div className="form-check d-flex gap-2 from-customradio">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Remember Me
                                        </label>
                                    </div>
                                    <p>Forgot Password?</p>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p className="text">Or login with</p>
                    <div className="social-item">
                        <a href="#" className="facebook-text">
                            <img src="assets/img/facebook.png" alt="img" />
                            FACEBOOK</a>
                        <a href="#" className="facebook-text google-text">
                            <img src="assets/img/google.png" alt="img" />
                            Google</a>
                    </div>
                    <div className="user-icon-box">
                        <img src="assets/img/user.png" alt="img" />
                        <p>No account yet?</p>
                        <a href="account.html">Create an Account</a>
                    </div>
                </div>
                <button id="closeButton" className="x-mark-icon"><i className="fas fa-times"></i></button>
            </div>

            {/* <!-- Header Section Start --> */}
            <header id="header-sticky" className=" header-1">
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo">
                                <a href="index.html" className="header-logo">
                                    <img src="https://cdn.dsmcdn.com/seller-store/uploads/1118761/9cc4d81d-9f1a-4b32-9f92-fdc8658b1d4f.jpeg" alt="logo-img" />
                                </a>
                                <a href="index.html" className="header-logo-2 d-none">
                                    <img src="https://cdn.dsmcdn.com/seller-store/uploads/1118761/9cc4d81d-9f1a-4b32-9f92-fdc8658b1d4f.jpeg" alt="logo-img" />
                                </a>
                            </div>
                            <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                    <nav id="mobile-menu" style={{ display: 'block' }}>
                                        <ul>
                                            <li className="has-dropdown active menu-thumb">
                                                <a href="index.html">
                                                    Home
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                                <ul className="submenu has-homemenu">
                                                    <li>
                                                        <div className="homemenu-items">
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb">
                                                                    <img src="assets/img/header/home-1.jpg" alt="img" />
                                                                    <div className="demo-button">
                                                                        <a href="index.html" className="theme-btn">
                                                                            Demo Page
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Home 01
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <img src="assets/img/header/home-2.jpg" alt="img" />
                                                                    <div className="demo-button">
                                                                        <a href="index-2.html" className="theme-btn">
                                                                            Demo Page
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Home 02
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu">
                                                                <div className="homemenu-thumb mb-15">
                                                                    <img src="assets/img/header/home-3.jpg" alt="img" />
                                                                    <div className="demo-button">
                                                                        <a href="index-3.html" className="theme-btn">
                                                                            Demo Page
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="homemenu-content text-center">
                                                                    <h4 className="homemenu-title">
                                                                        Home 03
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown active d-xl-none">
                                                <a href="index.html" className="border-none">
                                                    Home
                                                </a>
                                                <ul className="submenu">
                                                    <li><a href="index.html">Home 01</a></li>
                                                    <li><a href="index-2.html">Home 02</a></li>
                                                    <li><a href="index-3.html">Home 03</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="news-details.html">
                                                    Pages
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                                <ul className="submenu">
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="order.html">Track Your Order</a></li>
                                                    <li><a href="login.html">Login</a></li>
                                                    <li><a href="sign-up.html">Sign-Up</a></li>
                                                    <li><a href="categories.html">Categories</a></li>
                                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                                    <li><a href="forgate-password.html">Forget Password</a></li>
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="faq.html">Faq</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="product-details.html">
                                                    Shop
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                                <ul className="submenu">
                                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                                    <li><a href="shop-left-sideber.html">Shop Left Sideber</a></li>
                                                    <li><a href="shop-right-sideber.html">Shop Right Sideber</a></li>
                                                    <li><a href="shop-cart.html">Shop Cart</a></li>
                                                    <li><a href="checkout.html">Cheekout</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="news-details.html">
                                                    Blog
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                                <ul className="submenu">
                                                    <li><a href="news-grid.html">Blog Grid</a></li>
                                                    <li><a href="news-list.html">Blog List</a></li>
                                                    <li><a href="news-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact Us</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="search-widget">
                                    <form action="#">
                                        <input type="text" placeholder="Search for Products..." />
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

            {/* <!-- search-wrap Start --> */}
            <div className="search-wrap">
                <div className="search-inner">
                    <i className="fas fa-times search-close" id="search-close"></i>
                    <div className="search-cell">
                        <form method="get">
                            <div className="search-field-holder">
                                <input type="search" className="main-search-input" placeholder="Search..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- Modal Version 2 --> */}
            <div className="modal modal-common-wrap fade" id="exampleModal2" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="shop-details-wrapper">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="shop-details-image">
                                            <div className="tab-content">
                                                <div className="shop-thumb">
                                                    <img src="assets/img/shop/popup.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="product-details-content">
                                            <h3 className="pb-3">Sulwhasoo Essential Cream</h3>
                                            <div className="star pb-3">
                                                <a href="#"> <i className="fas fa-star"></i></a>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                                <a href="#"> <i className="fas fa-star"></i></a>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                                <span>(25 Customer Review)</span>
                                            </div>
                                            <p className="mb-3">
                                                In today’s online world, a brand’s success lies in combining
                                                technological planning and social strategies to draw
                                                customers in–and keep them coming back
                                            </p>
                                            <div className="price-list">
                                                <h3>$1,260.00</h3>
                                            </div>
                                            <div className="cart-wrp">
                                                <div className="cart-quantity">
                                                    <form id='myform' method='POST' className='quantity' action='#'>
                                                        <input type='button'  className='qtyminus minus' />
                                                        <input type='text' name='quantity'  className='qty' />
                                                        <input type='button'  className='qtyplus plus' />
                                                    </form>
                                                </div>
                                                <a href="product-details.html" className="icon">
                                                    <i className="far fa-heart"></i>
                                                </a>
                                                <div className="social-profile">
                                                    <span className="plus-btn"><i className="far fa-share"></i></span>
                                                    <ul>
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="shop-btn">
                                                <a href="shop-cart.html" className="theme-btn">
                                                    <span> Add to cart</span>
                                                </a>
                                                <a href="product-details.html" className="theme-btn">
                                                    <span> Buy now</span>
                                                </a>
                                            </div>
                                            <h6 className="details-info"><span>SKU:</span> <a href="product-details.html">124224</a></h6>
                                            <h6 className="details-info"><span>Categories:</span> <a href="product-details.html">Crux Indoor Fast and Easy</a></h6>
                                            <h6 className="details-info style-2"><span>Tags:</span> <a href="product-details.html"> <b>accessories</b> <b>business</b></a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Hero-Section Start --> */}
            <section className="hero-section hero-1 fix hero-bg">
                <div className="arrow-button">
                    <button className="array-prev active">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="array-next">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div className="shape">
                    <img src="assets/img/hero/shape.png" alt="img" />
                </div>
                <div className="right-image">
                    <img src="assets/img/hero/02.png" alt="img" />
                </div>
                <div className="video">
                    <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                        <i className="fa-duotone fa-play"></i>
                    </a>
                    <div className="circle-image">
                        <img src="assets/img/hero/circle.png" alt="img" />
                    </div>
                </div>
                <div className="container">
                    <div className="hero-items">
                        <div className="hero-content">
                            <h6>45% MEGA SALE OFFER</h6>
                            <h1>
                                Discover Customizable Furniture
                            </h1>
                            <a href="contact.html" className="theme-btn">Discover Now</a>
                            <p>
                                Unlock unbeatable savings on every purchase. Introducing our new collection of stylish and comfortable sofas, designed to elevate your living space with modern elegance.
                            </p>
                        </div>
                        <div className="swiper hero-image-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="hero-image">
                                        <img src="assets/img/hero/01.png" alt="img" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="hero-image">
                                        <img src="assets/img/hero/01.png" alt="img" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="hero-image">
                                        <img src="assets/img/hero/01.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Feature-Section Start --> */}
            <section className="feature-section fix">
                <div className="container">
                    <div className="feature-wrapper">
                        <div className="feature-item style-2 wow fadeInUp" data-wow-delay=".2s">
                            <div className="icon">
                                <img src="assets/img/icon/01.svg" alt="img" />
                            </div>
                            <div className="content">
                                <h6>
                                    Free Delivary
                                </h6>
                                <p>Orders from all item</p>
                            </div>
                        </div>
                        <div className="feature-item wow fadeInUp" data-wow-delay=".4s">
                            <div className="icon">
                                <img src="assets/img/icon/02.svg" alt="img" />
                            </div>
                            <div className="content">
                                <h6>
                                    Return & Refunf
                                </h6>
                                <p>Maney back guarantee</p>
                            </div>
                        </div>
                        <div className="feature-item wow fadeInUp" data-wow-delay=".6s">
                            <div className="icon">
                                <img src="assets/img/icon/03.svg" alt="img" />
                            </div>
                            <div className="content">
                                <h6>
                                    Member Discount
                                </h6>
                                <p>Onevery order over $140.00</p>
                            </div>
                        </div>
                        <div className="feature-item wow fadeInUp" data-wow-delay=".8s">
                            <div className="icon">
                                <img src="assets/img/icon/04.svg" alt="img" />
                            </div>
                            <div className="content">
                                <h6>
                                    Support 24/7
                                </h6>
                                <p>Contact us 24 hours a day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Offer-Section Start --> */}
            <section className="offer-section section-padding pt-0 fix">
                <div className="container">
                    <div className="offer-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="offer-card-item wow fadeInUp" data-wow-delay=".3s">
                                    <div className="content">
                                        <p>UP TO 20% OFF</p>
                                        <h3>
                                            <a href="product-details.html">Accent Leisure <br /> Chairs</a>
                                        </h3>
                                        <a href="product-details.html" className="theme-btn">Shop Now <i className="fa-regular fa-arrow-right"></i></a>
                                    </div>
                                    <div className="offer-image">
                                        <img src="assets/img/offer/01.png" alt="img" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="offer-box">
                                            <div className="content">
                                                <span>Trending</span>
                                                <h3>
                                                    <a href="product-details.html">Exotic Chairs</a>
                                                </h3>
                                            </div>
                                            <div className="offer-image">
                                                <img src="assets/img/offer/02.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="offer-box style-2">
                                            <div className="content">
                                                <span>New Collection</span>
                                                <h3>
                                                    <a href="product-details.html">Luxury Sofa</a>
                                                </h3>
                                            </div>
                                            <div className="offer-image">
                                                <img src="assets/img/offer/03.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="offer-bg-box bg-cover" style={{ backgroundImage: 'url(assets/img/offer/04.jpg)' }}>
                                    <div className="content">
                                        <p>Collection</p>
                                        <h3>
                                            <a href="product-details.html">Interior Decor <br /> Furniture</a>
                                        </h3>
                                        <a href="product-details.html" className="theme-btn">Shop Now <i className="fa-regular fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- About-Section Start --> */}
            <section className="about-section section-padding fix pt-0">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src="assets/img/about/01.jpg" alt="img" className="wow fadeInUp" data-wow-delay=".3s" />
                                    <div className="about-image-2">
                                        <img src="assets/img/about/02.jpg" alt="img" className="wow fadeInUp" data-wow-delay=".5s" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-title style-2">
                                        <h6 className="sub-title wow fadeInUp">
                                            Unity Collection
                                        </h6>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            Shop our limited
                                            Edition Collaborations
                                        </h2>
                                    </div>
                                    <div className="text">
                                        <p className="wow fadeInUp" data-wow-delay=".5s">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor. Donec consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. dolore magna
                                        </p>
                                        <a href="about.html" className="theme-btn wow fadeInUp" data-wow-delay=".7s">More about us <i className="fa-regular fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Shop-Section Start --> */}
            <section className="shop-section section-padding fix section-bg">
                <div className="container custom-container">
                    <div className="section-title text-center">
                        <h6 className="sub-title wow fadeInUp">
                            Choose Your Category
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Choose Your Category
                        </h2>
                    </div>
                    <div className="swiper shop-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="shop-box-item">
                                    <div className="shop-image">
                                        <img src="assets/img/shop/01.png" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <a href="shop-grid.html">Chair</a>
                                        </h4>
                                        <p>starting @ $48.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="shop-box-item">
                                    <div className="shop-image">
                                        <img src="assets/img/shop/02.png" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <a href="shop-grid.html">Bed</a>
                                        </h4>
                                        <p>starting @ $48.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="shop-box-item">
                                    <div className="shop-image">
                                        <img src="assets/img/shop/03.png" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <a href="shop-grid.html">Sofa</a>
                                        </h4>
                                        <p>starting @ $48.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="shop-box-item">
                                    <div className="shop-image">
                                        <img src="assets/img/shop/04.png" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <a href="shop-grid.html">Table</a>
                                        </h4>
                                        <p>starting @ $48.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="shop-box-item">
                                    <div className="shop-image">
                                        <img src="assets/img/shop/05.png" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <a href="shop-grid.html">Side Drawer</a>
                                        </h4>
                                        <p>starting @ $48.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="shop-pagi-items">
                        <div className="shop-dot"></div>
                    </div>
                </div>
            </section>

            {/* <!-- product-section Start --> */}
            <section className="product-section section-padding fix">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title wow fadeInUp">
                            <h6 className="sub-title">
                                Product Collection
                            </h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Featured Collections
                            </h2>
                        </div>
                        <ul className="nav">
                            <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                                <a href="#Course" data-bs-toggle="tab" className="nav-link active">
                                    All Collection
                                </a>
                            </li>
                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                <a href="#Curriculum" data-bs-toggle="tab" className="nav-link">
                                    Popular
                                </a>
                            </li>
                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                <a href="#Instructors" data-bs-toggle="tab" className="nav-link">
                                    On sale
                                </a>
                            </li>
                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                <a href="#Reviews" data-bs-toggle="tab" className="nav-link bb-none">
                                    Best Rated
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div id="Course" className="tab-pane fade show active">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/01.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Marmont gold-tone ring</a>
                                            </h4>
                                            <p>Sterling silver erring</p>
                                            <span>$76.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/02.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Pop gold baselight</a>
                                            </h4>
                                            <p>Gold vermeil, pearl</p>
                                            <span>$19.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/03.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Diamond vintage ring</a>
                                            </h4>
                                            <p>14k yellow gold</p>
                                            <span>$19.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/04.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Amber earrings close-up</a>
                                            </h4>
                                            <p>Gold vermeil, white topaz</p>
                                            <span>$23.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/05.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Gold malachite earrings</a>
                                            </h4>
                                            <p>Sterling silver erring</p>
                                            <ul className="doller">
                                                <li>
                                                    $19.00 <del>$27.00</del>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/06.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Gold jewellery baselight</a>
                                            </h4>
                                            <p>14k yellow gold</p>
                                            <span>$16.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/07.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Prong diamond ring</a>
                                            </h4>
                                            <p>Gold vermeil, pearl</p>
                                            <span>$102.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/08.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Malachite earrings</a>
                                            </h4>
                                            <p>14k yellow gold</p>
                                            <ul className="doller">
                                                <li>
                                                    $123.00 <del>$126.00</del>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="Curriculum" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/01.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Marmont gold-tone ring</a>
                                            </h4>
                                            <p>Sterling silver erring</p>
                                            <span>$76.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/02.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Pop gold baselight</a>
                                            </h4>
                                            <p>Gold vermeil, pearl</p>
                                            <span>$19.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/03.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Diamond vintage ring</a>
                                            </h4>
                                            <p>14k yellow gold</p>
                                            <span>$19.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/04.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Amber earrings close-up</a>
                                            </h4>
                                            <p>Gold vermeil, white topaz</p>
                                            <span>$23.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="Instructors" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/05.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Gold malachite earrings</a>
                                            </h4>
                                            <p>Sterling silver erring</p>
                                            <ul className="doller">
                                                <li>
                                                    $19.00 <del>$27.00</del>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/06.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Gold jewellery baselight</a>
                                            </h4>
                                            <p>14k yellow gold</p>
                                            <span>$16.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/07.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Prong diamond ring</a>
                                            </h4>
                                            <p>Gold vermeil, pearl</p>
                                            <span>$102.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/08.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Malachite earrings</a>
                                            </h4>
                                            <p>14k yellow gold</p>
                                            <ul className="doller">
                                                <li>
                                                    $123.00 <del>$126.00</del>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="Reviews" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/01.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Marmont gold-tone ring</a>
                                            </h4>
                                            <p>Sterling silver erring</p>
                                            <span>$76.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/02.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Pop gold baselight</a>
                                            </h4>
                                            <p>Gold vermeil, pearl</p>
                                            <span>$19.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/03.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Diamond vintage ring</a>
                                            </h4>
                                            <p>14k yellow gold</p>
                                            <span>$19.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-card-item">
                                        <div className="product-image">
                                            <img src="assets/img/product/04.jpg" alt="img" />
                                            <ul className="social-icon">
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <a href="product-details.html"><i className="fa-regular fa-heart"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h4>
                                                <a href="product-details.html">Amber earrings close-up</a>
                                            </h4>
                                            <p>Gold vermeil, white topaz</p>
                                            <span>$23.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Shop-colllection-section Start --> */}
            <section className="shop-collection-section fix">
                <div className="container custom-container">
                    <div className="shop-wrapper">
                        <div className="row g-4 align-items-center">
                            <div className="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="shop-collection-image">
                                    <img src="assets/img/shop/06.jpg" alt="img" />
                                    <h6>WITH NEW LOOK & NEW COLLECTION</h6>
                                    <div className="banner-product">
                                        <div className="product-details">
                                            <h4 className="title"><a href="product-details.html">Carenchy Sofa</a></h4>
                                            <div className="price">$15.22 - $15.22</div>
                                            <div className="rating-image">
                                                <img src="assets/img/cart/rating.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="plus-icon ripple">
                                            <i className="far fa-plus"></i>
                                        </div>
                                    </div>
                                    <div className="banner-product style-2">
                                        <div className="product-details">
                                            <h4 className="title"><a href="product-details.html">Carenchy Sofa</a></h4>
                                            <div className="price">$15.22 - $15.22</div>
                                            <div className="rating-image">
                                                <img src="assets/img/cart/rating.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="plus-icon ripple">
                                            <i className="far fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="shop-right-items">
                                    <p>
                                        BUILD YOUR
                                        OWN SETS
                                    </p>
                                    <div className="right-image">
                                        <img src="assets/img/shop/07.jpg" alt="img" />
                                    </div>
                                    <h3>Customizable Book Self</h3>
                                    <a href="product-details.html" className="link-btns">Shop this collection <i className="fa-solid fa-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- product-section Start --> */}
            <section className="product-section-2 section-padding fix">
                <div className="container">
                    <div className="section-title text-center">
                        <h6 className="sub-title wow fadeInUp">
                            Best Seller This Week’s
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".5s">
                            Most Selling Product
                        </h2>
                    </div>
                    <div className="swiper product-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="product-card-item-2">
                                    <div className="product-image">
                                        <img src="assets/img/product/09.png" alt="img" />
                                    </div>
                                    <div className="product-content">
                                        <h4>
                                            <a href="product-details.html">Carenchy Sofa</a>
                                        </h4>
                                        <p>Studio Designs Home</p>
                                        <span>$76.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-card-item-2">
                                    <div className="product-image">
                                        <img src="assets/img/product/10.png" alt="img" />
                                    </div>
                                    <div className="product-content">
                                        <h4>
                                            <a href="product-details.html">Windsor Shairs</a>
                                        </h4>
                                        <p>Modern Large Accent Lounge Chair</p>
                                        <span>$29.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-card-item-2">
                                    <div className="product-image">
                                        <img src="assets/img/product/11.png" alt="img" />
                                    </div>
                                    <div className="product-content">
                                        <h4>
                                            <a href="product-details.html">Blockers Egg Chair</a>
                                        </h4>
                                        <p>Light Luxury Leather Chair</p>
                                        <span>$19.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-card-item-2">
                                    <div className="product-image">
                                        <img src="assets/img/product/12.png" alt="img" />
                                    </div>
                                    <div className="product-content">
                                        <h4>
                                            <a href="product-details.html">Accent Leisure Chairs</a>
                                        </h4>
                                        <p>Modern Large Accent Lounge Chair</p>
                                        <span>$23.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="product-pagi-items">
                        <div className="product-dot"></div>
                    </div>
                </div>
            </section>

            {/* <!-- Brand-section Start --> */}
            <div className="brand-section fix">
                <div className="container">
                    <div className="brand-wrapper">
                        <div className="swiper brand-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="brand-box-item style-2">
                                        <div className="brand-image">
                                            <img src="assets/img/brand/01.png" alt="brand-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="brand-box-item">
                                        <div className="brand-image">
                                            <img src="assets/img/brand/03.png" alt="brand-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="brand-box-item">
                                        <div className="brand-image">
                                            <img src="assets/img/brand/04.png" alt="brand-img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="brand-box-item">
                                        <div className="brand-image">
                                            <img src="assets/img/brand/05.png" alt="brand-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="array-buttons">
                            <button className="array-prev"><i className="fa-solid fa-chevron-left"></i></button>
                            <button className="array-next"><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- News-section Start --> */}
            <section className="news-section section-padding pb-0 fix">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <h6 className="sub-title wow fadeInUp">
                                Our Blog & News
                            </h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Latest News & Articles
                            </h2>
                        </div>
                        <a href="news-details.html" className="theme-btn theme-btn-2 wow fadeInUp" data-wow-delay=".5s">Discover More</a>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img src="assets/img/news/01.jpg" alt="img" />
                                    <h6 className="side-box">14 July, 2025</h6>
                                </div>
                                <div className="news-content">
                                    <ul className="post-meta">
                                        <li>
                                            <i className="fa-regular fa-tag"></i>
                                            Fashion, Lift Style, News
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="news-details.html">Seasonal decorating bringing the spirit of the season into your home</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img src="assets/img/news/02.jpg" alt="img" />
                                    <h6 className="side-box">14 July, 2025</h6>
                                </div>
                                <div className="news-content">
                                    <ul className="post-meta">
                                        <li>
                                            <i className="fa-regular fa-tag"></i>
                                            Fashion, <span>Lift Style</span>, News
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="news-details.html">Artful arrangements mastering the art of styling shelves and vignettes</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img src="assets/img/news/03.jpg" alt="img" />
                                    <h6 className="side-box">14 July, 2025</h6>
                                </div>
                                <div className="news-content">
                                    <ul className="post-meta">
                                        <li>
                                            <i className="fa-regular fa-tag"></i>
                                            Fashion, Lift Style, News
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="news-details.html">Outdoor oasis creating a stylish and functional outdoor living space</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Instagram Banner Section Start --> */}
            <div className="instagram-banner fix section-padding pb-0">
                <div className="instagram-wrapper">
                    <h2 className="text-center wow fadeInUp" data-wow-delay=".3s">Trends on image feed</h2>
                    <p className="wow fadeInUp" data-wow-delay=".5s">After many months design and development of a modern online retailer</p>
                    <div className="swiper instagram-banner-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="assets/img/instagram/01.jpg" alt="insta-img" />
                                        <a href="https://instagram.com" className="icon">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="assets/img/instagram/02.jpg" alt="insta-img" />
                                        <a href="https://instagram.com" className="icon">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="assets/img/instagram/03.jpg" alt="insta-img" />
                                        <a href="https://instagram.com" className="icon">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="assets/img/instagram/04.jpg" alt="insta-img" />
                                        <a href="https://instagram.com" className="icon">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="assets/img/instagram/05.jpg" alt="insta-img" />
                                        <a href="https://instagram.com" className="icon">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="instagram-banner-items">
                                    <div className="banner-image">
                                        <img src="assets/img/instagram/06.jpg" alt="insta-img" />
                                        <a href="https://instagram.com" className="icon">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- footer-section Start --> */}
            <footer className="footer-section footer-bg fix">
                <div className="container">
                    <div className="footer-widget-wrapper">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <a href="#" className="footer-logo">
                                            <img src="https://cdn.dsmcdn.com/seller-store/uploads/1118761/9cc4d81d-9f1a-4b32-9f92-fdc8658b1d4f.jpeg" alt="logo-img" />
                                        </a>
                                    </div>
                                    <div className="footer-content">
                                        <div className="text">
                                            <p>Got Questions? Call us</p>
                                            <a href="tel:+67041390762">+670 413 90 762</a>
                                        </div>
                                        <ul className="contact-list">
                                            <li>
                                                <i className="fa-regular fa-envelope"></i>
                                                <a href="mailto:cartly@gmail.com">cartly@gmail.com</a>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-location-dot"></i>
                                                79 Sleepy Hollow St.<br />
                                                Jamaica, New York 1432
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>My Account</h3>
                                    </div>
                                    <ul className="list-items">
                                        <li>
                                            <a href="order.html">
                                                Track Orders
                                            </a>
                                        </li>
                                        <li>
                                            <a href="product-details.html">
                                                Shipping
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-cart.html">
                                                Wishlist
                                            </a>
                                        </li>
                                        <li>
                                            <a href="my-account.html">
                                                My Account
                                            </a>
                                        </li>
                                        <li>
                                            <a href="order.html">
                                                Order History
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Returns
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Infomation</h3>
                                    </div>
                                    <ul className="list-items">
                                        <li>
                                            <a href="contact.html">
                                                Our Story
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Terms & Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="news-details.html">
                                                Latest News
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Subcribe.</h3>
                                    </div>
                                    <div className="footer-content">
                                        <p className="f-text">Our conversation is just getting started</p>
                                        <div className="footer-input">
                                            <input type="email" id="email2" placeholder="Enter Your Email" />
                                            <button className="newsletter-btn" type="submit">
                                                <span>Subscribe</span>
                                            </button>
                                        </div>
                                        <div className="social-item">
                                            <h6>Follow Us On</h6>
                                            <div className="social-icon d-flex align-items-center">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-wrapper">
                            <p className="wow fadeInUp" data-wow-delay=".3s">
                                ©All Rights reserved | by <span>Ecomas.</span>
                            </p>
                            <div className="bottom-list wow fadeInUp" data-wow-delay=".5s">
                                <div className="app-image">
                                    <img src="assets/img/footer/01.png" alt="img" />
                                </div>
                                <div className="app-image">
                                    <img src="assets/img/footer/02.png" alt="img" />
                                </div>
                                <div className="app-image">
                                    <img src="assets/img/footer/03.png" alt="img" />
                                </div>
                                <div className="app-image">
                                    <img src="assets/img/footer/04.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!-- Newsletter Modal Area Start--> */}
            <div className="modal fade bd-example-modal-lg common-newsletter-modal" id="exampleModal" tabIndex="-1" role="dialog"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body modal1 modal-bg">
                            <div className="row">
                                <div className="col-12">
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div className="col-lg-12">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-12">
                                            <div className="offer-modal-img d-none d-lg-block">
                                                <img src="assets/img/cart/common-modal.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="offer-modal-right">
                                                <h3>Subcribe to Our Newsletter</h3>
                                                <p>Subscribe to our newsletter and Save your <span>20% money</span> with
                                                    discount code today.</p>
                                                <form action="#!">
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Enter your email" />
                                                        <div className="input-group-append">
                                                            <button className="theme-btn style6">Subscribe</button>
                                                        </div>
                                                    </div>
                                                    <div className="check-boxed-modal">
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" />
                                                        <label htmlFor="vehicle1">Do not show this window</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default StoreTemplate