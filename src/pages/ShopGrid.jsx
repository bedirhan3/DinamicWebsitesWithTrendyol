import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';




function ShopGrid() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [storeInfo, setStoreInfo] = useState(null);
    const sellerId = id;
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://apigw.trendyol.com/discovery-sellerstore-webgw-service/v1/search/products?q=sr%2F%3Fmid%3D'+sellerId+'%26sst%3DMOST_RECENT&storefrontId=1&sellerId='+sellerId+'&pageIndex=1&gender=1&culture=tr-TR&channelId=1',
        headers: {}
    };
    
    async function makeRequest() {
        try {
            const response = await axios.request(config);
            console.log(response.data);
            setProducts(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    async function makeRequest2() {
        try {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://apigw.trendyol.com/discovery-sellerstore-webgw-service/v1/seller-store/header?sst=0&culture=tr-TR&storefrontId=1&supplierId=' + sellerId + '&sellerStoreFrom=Widget&channelId=1',
                headers: { }
            };
            
            const response = await axios.request(config);
            console.log("Store Info Response:", response.data);
            
            if (response.data && response.data.isSuccess && response.data.result) {
                const { html } = response.data.result;
                
                // HTML'den seller bilgilerini çıkar
                const sellerNameMatch = html.match(/class="seller-store__name[^"]*"[^>]*>([^<]+)</);
                const sellerIconMatch = html.match(/src="([^"]+)"[^>]*alt="([^"]*)"[^>]*class="seller-icon"/);
                const sellerScoreMatch = html.match(/class="seller-store__score[^"]*"[^>]*>([^<]+)</);
                const backgroundImageMatch = html.match(/background:url\(([^)]+)\)/);
                
                // Script'teki JSON verisini decode et
                const scriptMatch = html.match(/window\["__SELLER-STORE-HEADER__STATE"\]="([^"]+)"/);
                
                let sellerData = {};
                
                if (scriptMatch) {
                    try {
                        // URL decode et
                        const decodedData = decodeURIComponent(scriptMatch[1]);
                        const parsedData = JSON.parse(decodedData);
                        
                        if (parsedData.template && parsedData.template.meta) {
                            const { seller, header } = parsedData.template.meta;
                            
                            sellerData = {
                                id: seller?.id,
                                name: seller?.name?.trim(),
                                officialName: seller?.officialName,
                                productCount: seller?.productCount,
                                score: seller?.score,
                                icon: header?.icon,
                                backgroundImage: header?.image,
                                fontColor: header?.fontColor,
                                backgroundColor: header?.color
                            };
                        }
                    } catch (e) {
                        console.error("Script JSON parse error:", e);
                        // Fallback to HTML parsing
                        sellerData = {
                            name: sellerNameMatch ? sellerNameMatch[1].trim() : '',
                            icon: sellerIconMatch ? sellerIconMatch[1] : '',
                            score: sellerScoreMatch ? sellerScoreMatch[1] : '',
                            backgroundImage: backgroundImageMatch ? backgroundImageMatch[1] : ''
                        };
                    }
                } else {
                    // HTML parsing fallback
                    sellerData = {
                        name: sellerNameMatch ? sellerNameMatch[1].trim() : '',
                        icon: sellerIconMatch ? sellerIconMatch[1] : '',
                        score: sellerScoreMatch ? sellerScoreMatch[1] : '',
                        backgroundImage: backgroundImageMatch ? backgroundImageMatch[1] : ''
                    };
                }
                
                setStoreInfo(sellerData);
                console.log("Parsed store info:", sellerData);
            } else {
                console.error("Invalid response structure:", response.data);
            }
        }
        catch (error) {
            console.log("Store info error:", error);
        }
    }

    useEffect(() => {
        makeRequest();
        makeRequest2();
    }, []);
    return (
        <div>

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
                        <a href="#" className="facebook-text"><img src="assets/img/facebook.png" alt="img" />FACEBOOK</a>
                        <a href="#" className="facebook-text google-text"><img src="assets/img/google.png" alt="img" />Google</a>
                    </div>
                    <div className="user-icon-box">
                        <img src="assets/img/user.png" alt="img" />
                        <p>No account yet?</p>
                        <a href="account.html">Create an Account</a>
                    </div>
                </div>
                <button id="closeButton" className="x-mark-icon"><i className="fas fa-times"></i></button>
            </div>

            {/* <!-- Sidebar Area Here --> */}
            <div id="targetElement2" className="side_bar-2 slideInRight side_bar_hidden2">
                <div className="side_bar_overlay"></div>
                <div className="main-sideber">
                    <div className="single-sidebar-widget-2">
                        <div className="wid-title">
                            <h5>price filter</h5>
                        </div>
                        <div className="range__barcustom">
                            <div className="slider">
                                <div className="progress" style={{ left: '25%', right: '25%' }}></div>
                            </div>
                            <div className="range-input">
                                <input type="range" className="range-min" min="0" max="10000" />
                                <input type="range" className="range-max" min="100" max="10000" />
                            </div>
                            <div className="range-items">
                                <div className="price-input d-flex">
                                    <div className="field style-2">
                                        <span>$</span>
                                        <input type="number" className="input-min" />
                                    </div>
                                    <div className="separators">-</div>
                                    <div className="field">
                                        <span>$</span>
                                        <input type="number" className="input-max" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-sidebar-widget-2">
                        <div className="wid-title">
                            <h5>Product Status</h5>
                        </div>
                        <div className="product-list">
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark bg-2 d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        On sale
                                    </span>
                                </span>
                            </label>
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        In stock
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="single-sidebar-widget-2">
                        <div className="courses-list">
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        <span className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                        <span className="ratting-text">(22)</span>
                                    </span>
                                </span>
                            </label>
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        <span className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star color-2"></i>
                                        </span>
                                        <span className="ratting-text">(15)</span>
                                    </span>
                                </span>
                            </label>
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        <span className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star color-2"></i>
                                            <i className="fas fa-star color-2"></i>
                                        </span>
                                        <span className="ratting-text">(03)</span>
                                    </span>
                                </span>
                            </label>
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        <span className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star color-2"></i>
                                            <i className="fas fa-star color-2"></i>
                                            <i className="fas fa-star color-2"></i>
                                        </span>
                                        <span className="ratting-text">(00)</span>
                                    </span>
                                </span>
                            </label>
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        <span className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star color-2"></i>
                                            <i className="fas fa-star color-2"></i>
                                            <i className="fas fa-star color-2"></i>
                                            <i className="fas fa-star color-2"></i>
                                        </span>
                                        <span className="ratting-text">(00)</span>
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="single-sidebar-widget-2">
                        <div className="wid-title">
                            <h5>Categories</h5>
                        </div>
                        <div className="widget-categories">
                            <ul>
                                <li><a href="product-details.html">Leather</a><span>10</span></li>
                                <li><a href="product-details.html">classNameic Watch</a><span>28</span></li>
                                <li><a href="product-details.html">Leather Man Wacth</a><span>12</span></li>
                                <li><a href="product-details.html">Trending Watch</a><span>17</span></li>
                                <li><a href="product-details.html">Google</a><span>22</span></li>
                                <li><a href="product-details.html">Woman Wacth</a><span>14</span></li>
                                <li><a href="product-details.html">Tables</a><span>19</span></li>
                                <li><a href="product-details.html">ShopEngine</a><span>29</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-sidebar-widget-2">
                        <div className="wid-title">
                            <h5>Filter by Color</h5>
                        </div>
                        <div className="list">
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        Red
                                    </span>
                                </span>
                                <span className="text">
                                    8
                                </span>
                            </label>
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark bg-2 d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        Dark Blue
                                    </span>
                                </span>
                                <span className="text">
                                    14
                                </span>
                            </label>
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark bg-3 d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        Orange
                                    </span>
                                </span>
                                <span className="text">
                                    18
                                </span>
                            </label>
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark bg-4 d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        Purple
                                    </span>
                                </span>
                                <span className="text">
                                    23
                                </span>
                            </label>
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark bg-5 d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        Yellow
                                    </span>
                                </span>
                                <span className="text">
                                    17
                                </span>
                            </label>
                            <label className="checkbox-single">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                    <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark bg-6 d-center"></span>
                                    </span>
                                    <span className="text-color">
                                        Green
                                    </span>
                                </span>
                                <span className="text">
                                    15
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="single-sidebar-widget-2">
                        <div className="wid-title">
                            <h5>Popular Brands</h5>
                        </div>
                        <div className="brand-post">
                            <div className="brand-item">
                                <div className="brand-image">
                                    <img src="assets/img/brand/b1.png" alt="img" />
                                </div>
                                <div className="brand-image">
                                    <img src="assets/img/brand/b2.png" alt="img" />
                                </div>
                            </div>
                            <div className="brand-item">
                                <div className="brand-image">
                                    <img src="assets/img/brand/b3.png" alt="img" />
                                </div>
                                <div className="brand-image">
                                    <img src="assets/img/brand/b4.png" alt="img" />
                                </div>
                            </div>
                            <div className="brand-item">
                                <div className="brand-image">
                                    <img src="assets/img/brand/b5.png" alt="img" />
                                </div>
                                <div className="brand-image">
                                    <img src="assets/img/brand/b6.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="closeButton2" className="x-mark-icon"><i className="fas fa-times"></i></button>
            </div>



            <Header sellerId={sellerId} storeInfo={storeInfo} />

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
                                                In today's online world, a brand's success lies in combining
                                                technological planning and social strategies to draw
                                                customers in–and keep them coming back
                                            </p>
                                            <div className="price-list">
                                                <h3>$1,260.00</h3>
                                            </div>
                                            <div className="cart-wrp">
                                                <div className="cart-quantity">
                                                    <form id='myform' method='POST' className='quantity' action='#'>
                                                        <input type='button' className='qtyminus minus' />
                                                        <input type='text' name='quantity' className='qty' />
                                                        <input type='button' className='qtyplus plus' />
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

            {/* <!-- product-details-Section Start --> */}
            <section className="product-details-section section-padding fix">
                <div className="container">
                    <div className="product-details-wrapper">
                        <div className="top-content">
                            <h2>Only Categories</h2>
                            <ul className="list">
                                <li>Home</li>
                                <li>
                                    Only Categories
                                </li>
                            </ul>
                        </div>
                        <div className="product-details-sideber">
                            <div className="product-details-wrap">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="#Course" data-bs-toggle="tab" className="nav-link active">
                                            <i className="fa-regular fa-grid-2"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#Curriculum" data-bs-toggle="tab" className="nav-link">
                                            <i className="fas fa-bars"></i>
                                        </a>
                                    </li>
                                </ul>
                                <p>Showing 1–14 of 26 results</p>
                            </div>
                            <div className="shop-right">
                                <div className="form-clt">
                                    <div className="nice-select" tabIndex="0">
                                        <span className="current">
                                            Default sorting
                                        </span>
                                        <ul className="list">
                                            <li data-value="1" className="option selected focus">
                                                Default sorting
                                            </li>
                                            <li data-value="1" className="option">
                                                Sort by popularity
                                            </li>
                                            <li data-value="1" className="option">
                                                Sort by average rating
                                            </li>
                                            <li data-value="1" className="option">
                                                Sort by latest
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="openButton2">
                                    <div className="filter-button">
                                        <h6><a href="#"><span><i className="fas fa-filter"></i></span>Filter</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="Course" className="tab-pane fade show active">
                                <div className="row">
                                    {products.length > 0 ?
                                    products.map((item, index) => (
                                        <Link 
                                            to={`/store/${id}/product/${encodeURIComponent(item.link)}`}
                                            state={{ productData: item }}
                                            className="col-xl-3 col-lg-6 col-md-6" 
                                            key={index}
                                        >
                                            <div className="product-details-item">
                                                <div className="shop-image">
                                                    <img src={"https://cdn.dsmcdn.com"+item.image} alt="img" />
                                                </div>
                                                <div className="content">
                                                    <p>{item.brand}</p>
                                                    <h4>
                                                        <a>{item.title}</a>
                                                    </h4>
                                                    <div className="star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <h6>{item.price.discountedText} TL <del>{item.price.oldText} TL</del></h6>
                                                </div>
                                            </div>
                                        </Link>
                                    )) : null}
                                </div>
                            </div>
                            <div id="Curriculum" className="tab-pane fade">
                                <div className="row justify-content-center">
                                    <div className="row g-4">
                                        <div className="col-xl-12">

                                            {products.length > 0 ?
                                            products.map((item, index) => (
                                                <div className="product-details-item style-2" key={index}>
                                                <div className="shop-image">
                                                    <img src={"https://cdn.dsmcdn.com"+item.image} alt="img" />
                                                </div>
                                                <div className="content">
                                                    <p>{item.brand}</p>
                                                    <h3>
                                                        <a href="product-details.html">{item.title}</a>
                                                    </h3>
                                                    <div className="star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <h6>{item.price.discountedText} TL <del>{item.price.oldText} TL</del></h6>
                                                    <p>
                                                        Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.
                                                    </p>
                                                    <a href={"https://www.trendyol.com/"+item.link} target="_blank" className="theme-btn">Ürüne Git</a>
                                                </div>
                                            </div>
                                            )) : null}


                                            <div className="product-details-item style-2">
                                                <div className="shop-image">
                                                    <img src="assets/img/shop/shop-3.jpg" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <p>Backpack, Wonder</p>
                                                    <h3>
                                                        <a href="product-details.html">Simple Modern School Boys</a>
                                                    </h3>
                                                    <div className="star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <h6>$102.00 <del>$226.00</del></h6>
                                                    <p>
                                                        Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.
                                                    </p>
                                                    <a href="shop-cart.html" className="theme-btn">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div className="product-details-item style-2">
                                                <div className="shop-image">
                                                    <img src="assets/img/shop/shop-6.jpg" alt="img" />
                                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                        <li>
                                                            <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i></a>
                                                        </li>
                                                        <li>
                                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                                <i className="fa-regular fa-eye"></i>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content">
                                                    <p>Bag, Wonder</p>
                                                    <h3>
                                                        <a href="product-details.html">Tommy Hilfiger Women's Jaden</a>
                                                    </h3>
                                                    <div className="star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <h6>$44.00 <del>$66.00</del></h6>
                                                    <p>
                                                        Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.
                                                    </p>
                                                    <a href="shop-cart.html" className="theme-btn">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div className="product-details-item style-2">
                                                <div className="shop-image">
                                                    <img src="assets/img/shop/shop-7.jpg" alt="img" />
                                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                        <li>
                                                            <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i></a>
                                                        </li>
                                                        <li>
                                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                                <i className="fa-regular fa-eye"></i>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content">
                                                    <p>Bag, Wonder</p>
                                                    <h3>
                                                        <a href="product-details.html">Tommy Hilfiger Women's Jaden</a>
                                                    </h3>
                                                    <div className="star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <h6>$44.00 <del>$66.00</del></h6>
                                                    <p>
                                                        Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.
                                                    </p>
                                                    <a href="shop-cart.html" className="theme-btn">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div className="product-details-item style-2">
                                                <div className="shop-image">
                                                    <img src="assets/img/shop/shop-11.jpg" alt="img" />
                                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                        <li>
                                                            <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i></a>
                                                        </li>
                                                        <li>
                                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                                <i className="fa-regular fa-eye"></i>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content">
                                                    <p>Whitetails Store</p>
                                                    <h3>
                                                        <a href="product-details.html">Legendary Whitetails Men's.</a>
                                                    </h3>
                                                    <div className="star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <h6>$36.00 <del>$66.00</del></h6>
                                                    <p>
                                                        Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.
                                                    </p>
                                                    <a href="shop-cart.html" className="theme-btn">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div className="product-details-item style-2">
                                                <div className="shop-image">
                                                    <img src="assets/img/shop/shop-4.jpg" alt="img" />
                                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                        <li>
                                                            <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i></a>
                                                        </li>
                                                        <li>
                                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                                <i className="fa-regular fa-eye"></i>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content">
                                                    <p>Bag, Wonder</p>
                                                    <h3>
                                                        <a href="product-details.html">Calvin Klein Gabrianna Novelty</a>
                                                    </h3>
                                                    <div className="star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <h6>$93.00 <del>$76.00</del></h6>
                                                    <p>
                                                        Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.
                                                    </p>
                                                    <a href="shop-cart.html" className="theme-btn">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div className="product-details-item style-2">
                                                <div className="shop-image">
                                                    <img src="assets/img/shop/shop-8.jpg" alt="img" />
                                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                        <li>
                                                            <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i></a>
                                                        </li>
                                                        <li>
                                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                                <i className="fa-regular fa-eye"></i>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content">
                                                    <p>Whitetails Store</p>
                                                    <h3>
                                                        <a href="product-details.html">Legendary Whitetails Men's.</a>
                                                    </h3>
                                                    <div className="star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <h6>$36.00 <del>$72.00</del></h6>
                                                    <p>
                                                        Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.
                                                    </p>
                                                    <a href="shop-cart.html" className="theme-btn">Add To Cart</a>
                                                </div>
                                            </div>
                                            <div className="product-details-item style-2">
                                                <div className="shop-image">
                                                    <img src="assets/img/shop/shop-10.jpg" alt="img" />
                                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                        <li>
                                                            <a href="product-details.html"><i className="fa-regular fa-cart-shopping"></i></a>
                                                        </li>
                                                        <li>
                                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                                <i className="fa-regular fa-eye"></i>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content">
                                                    <p>Whitetails Store</p>
                                                    <h3>
                                                        <a href="product-details.html">Backpack, School Bag</a>
                                                    </h3>
                                                    <div className="star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                    </div>
                                                    <h6>$82.00 <del>$99.00</del></h6>
                                                    <p>
                                                        Auctor urna nunc id cursus. Scelerisque purus semper eget duis at pharetra vel turpis nunc eget.
                                                    </p>
                                                    <a href="shop-cart.html" className="theme-btn">Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-nav-wrap">
                            <ul>
                                <li className="active"><a className="page-numbers" href="#">1</a></li>
                                <li><a className="page-numbers" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="page-numbers" href="#"><i className="fa-solid fa-arrow-right-long"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer storeInfo={storeInfo} />

        </div>

    )
}

export default ShopGrid