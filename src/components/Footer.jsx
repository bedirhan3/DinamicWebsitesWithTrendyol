import React from 'react';

function Footer({ storeInfo }) {
    return (
        <footer className="footer-section footer-bg fix">
            <div className="container">
                <div className="footer-widget-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <a href="#" className="footer-logo">
                                        {storeInfo && storeInfo.icon ? (
                                            <img src={storeInfo.icon} alt={storeInfo.name || "Mağaza Logosu"}/>
                                        ) : (
                                            <img src="assets/img/logo/red-logo.svg" alt="logo-img"/>
                                        )}
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <div className="text">
                                        <p>{storeInfo ? `${storeInfo.name} Mağazası` : 'Sorularınız mı var? Bizi arayın'}</p>
                                        {storeInfo && storeInfo.score && (
                                            <p>Mağaza Puanı: <strong>{storeInfo.score}</strong></p>
                                        )}
                                        {storeInfo && storeInfo.productCount && (
                                            <p>Ürün Sayısı: <strong>{storeInfo.productCount}</strong></p>
                                        )}
                                    </div>
                                    <ul className="contact-list">
                                        <li>
                                            <i className="fa-regular fa-envelope"></i>
                                            <a href="mailto:cartly@gmail.com">iletisim@{storeInfo ? storeInfo.name?.toLowerCase().replace(/\s+/g, '') : 'magaza'}.com</a>
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-location-dot"></i>
                                            {storeInfo ? storeInfo.name : 'Mağaza'} Merkezi<br/>
                                            İstanbul, Türkiye
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Hesabım</h3>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <a href="#">
                                            Sipariş Takibi
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Kargo
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            İstek Listesi
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Hesabım
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Sipariş Geçmişi
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            İadeler
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Bilgi</h3>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <a href="#">
                                            Hikayemiz
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Kariyer
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Gizlilik Politikası
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Kullanım Koşulları
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Son Haberler
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            İletişim
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Abone Ol</h3>
                                </div>
                                <div className="footer-content">
                                    <p className="f-text">Sohbetimiz yeni başlıyor</p>
                                    <div className="footer-input">
                                        <input type="email" id="email2" placeholder="E-posta Adresiniz"/>
                                        <button className="newsletter-btn" type="submit">
                                            <span>Abone Ol</span>
                                        </button>
                                    </div>
                                    <div className="social-item">
                                        <h6>Bizi Takip Edin</h6>
                                        <div className="social-icon d-flex align-items-center">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#" className="bg-2"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 