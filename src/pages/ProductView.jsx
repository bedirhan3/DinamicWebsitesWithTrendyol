import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProductView() {
    const { id, id2 } = useParams();
    const location = useLocation();
    const decodedLink = decodeURIComponent(id2);
    const sellerId = decodedLink.split('merchantId=')[1]?.split('&')[0] || id;
    const searchParams = location.search;
    
    // Ürün detaylarını tutacak state'leri tanımlıyorum
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [storeInfo, setStoreInfo] = useState(null);
    const [reviews, setReviews] = useState([]);






    let config2 = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://www.trendyol.com'+decodedLink+'&v=xl&filterOverPriceListings=false',
        headers: { }
      };

    async function makeRequest() {

      try {
        setLoading(true);
        // Local API'ye istek at, decodedLink'i parametre olarak gönder
        // const response = await axios.get("/trendyol"+decodedLink+"&v=xl&filterOverPriceListings=false");
        const response = await axios.request(config2);
        console.log(response.data);
        
        // Trendyol'dan gelen veriyi işleme
        const responseData = response.data;
        
        // Pencere başlığını sayfada gösterilen HTML'den çıkarma
        const match = responseData.match(/<title>(.*?)<\/title>/);
        const title = match ? match[1] : "Ürün Detayı";
        
        // Ürün verisini çıkarma - JSON verisini çeken regex
        const jsonMatch = responseData.match(/window.__PRODUCT_DETAIL_APP_INITIAL_STATE__ = ({.*?});/s);
        
        if (jsonMatch) {
            try {
                const productData = JSON.parse(jsonMatch[1]);
                setProduct(productData.product);
            } catch (e) {
                console.error("JSON parse error:", e);
                setError("Ürün verisi çözümlenemedi");
            }
        } else {
            setError("Ürün verisi bulunamadı");
        }
        
        // Yorumları çıkarma - Schema.org JSON-LD'den review array'ini al
        const reviewsMatch = responseData.match(/"review":\s*\[(.*?)\]/s);
        if (reviewsMatch) {
            try {
                const reviewsJson = `[${reviewsMatch[1]}]`;
                const reviewsData = JSON.parse(reviewsJson);
                setReviews(reviewsData);
            } catch (e) {
                console.error("Reviews parse error:", e);
                setReviews([]);
            }
        } else {
            setReviews([]);
        }
        
        setLoading(false);
      }
      catch (error) {
        console.log(error);
        setLoading(false);
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
    }, [decodedLink, searchParams, sellerId]);
    

    
  return (
    <div>
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
                                <input type="text" name="name15" id="name15" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-clt">
                                <span>Password *</span>
                                <input id="password" type="password" placeholder=""/>
                                <div className="icon"><i className="fa-regular fa-eye"></i></div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <button className="theme-btn" type="submit"><span>Log In</span></button>
                        </div>
                        <div className="col-lg-12">
                            <div className="from-cheak-items">
                                <div className="form-check d-flex gap-2 from-customradio">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
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
                    <a href="#" className="facebook-text"><img src="assets/img/facebook.png" alt="img"/>
                    FACEBOOK</a>
                    <a href="#" className="facebook-text google-text"><img src="assets/img/google.png" alt="img"/>
                    Google</a>
                </div>
                <div className="user-icon-box">
                    <img src="assets/img/user.png" alt="img"/>
                    <p>No account yet?</p>
                    <a href="account.html">Create an Account</a>
                </div>
            </div>
            <button id="closeButton" className="x-mark-icon"><i className="fas fa-times"></i></button>
        </div>

        <Header sellerId={sellerId} storeInfo={storeInfo} />

        {/* <!-- search-wrap Start --> */}
        <div className="search-wrap">
            <div className="search-inner">
                <i className="fas fa-times search-close" id="search-close"></i>
                <div className="search-cell">
                    <form method="get">
                        <div className="search-field-holder">
                            <input type="search" className="main-search-input" placeholder="Search..."/>
                        </div>
                    </form>
                </div>
            </div>
        </div>

         {/* <!-- Shop Details Section Start --> */}
        <section className="shop-details-section section-padding fix shop-bg">
            <div className="container">
            <div className="shop-details-wrapper">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="shop-details-image">
                        <div className="tab-content">
                            {product && product.images && product.images.map((image, index) => (
                                <div id={`thumb${index+1}`} className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} key={index}>
                                    <div className="shop-thumb">
                                        <img src={`https://cdn.dsmcdn.com${image}`} alt={`${product.name} - Resim ${index+1}`}/>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <ul className="nav">
                            {product && product.images && product.images.map((image, index) => (
                                <li className="nav-item" key={index}>
                                    <a href={`#thumb${index+1}`} data-bs-toggle="tab" className={`nav-link ${index === 0 ? 'ps-0 active' : ''}`}>
                                        <img src={`https://cdn.dsmcdn.com${image}`} alt={`${product.name} - Küçük Resim ${index+1}`}/>
                                    </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-details-content">
                            {product && (
                                <>
                                    <h3 className="pb-3">
                                        {product.brand ? product.brand.name : ''} {product.name}
                                    </h3>
                                    <div className="star pb-3">
                                        {product.ratingScore && Array(Math.floor(product.ratingScore.averageRating || 0)).fill().map((_, index) => (
                                            <a href="#" key={index}><i className="fas fa-star"></i></a>
                                        ))}
                                        {product.ratingScore && (
                                            <span>({product.ratingScore.totalCommentCount || 0} Yorum)</span>
                                        )}
                                    </div>
                                    
                                    {product.descriptions && product.descriptions.length > 0 && (
                                        <p className="mb-3">
                                            {product.descriptions[0].text.replace(/\[page=".*?"\](.*?)\[\/page\]/g, '$1')}
                                        </p>
                                    )}
                                    
                                    <div className="price-list">
                                        <h3>
                                            {product.price && product.price.discountedPrice ? 
                                                product.price.discountedPrice.text : 
                                                (product.price ? product.price.sellingPrice.text : 'Fiyat Bulunamadı')}
                                        </h3>
                                        {product.price && product.price.discountedPrice && product.price.originalPrice && 
                                         product.price.discountedPrice.value !== product.price.originalPrice.value && (
                                            <del>{product.price.originalPrice.text}</del>
                                        )}
                                    </div>
                                    

                                    <div className="shop-btn">
            
                                        <a href={"https://www.trendyol.com/"+id2} target='_blank' className="theme-btn">
                                            <span>Trendyol'dan al</span>
                                        </a>
                                    </div>
                                    {product.productCode && (
                                        <h6 className="details-info"><span>Ürün Kodu:</span> <a href="#">{product.productCode}</a></h6>
                                    )}
                                    {product.category && (
                                        <h6 className="details-info"><span>Kategori:</span> <a href="#">{product.category.name}</a></h6>
                                    )}
                                    {product.brand && (
                                        <h6 className="details-info style-2"><span>Marka:</span> <a href="#"><b>{product.brand.name}</b></a></h6>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        {/* <!-- Single-tab Section Start --> */}
        <section className="single-tab-section section-padding fix pt-0">
            <div className="container">
                <div className="single-tab">
                    <ul className="nav mb-5">
                        <li className="nav-item">
                            <a href="#description" data-bs-toggle="tab" className="nav-link ps-0 active">
                                <h6>Ürün Açıklaması</h6>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#additional" data-bs-toggle="tab" className="nav-link">
                                <h6>Ürün Özellikleri</h6>
                            </a>
                        </li>
                        <li className="nav-item">
                          <a href="#review" data-bs-toggle="tab" className="nav-link">
                              <h6>Yorumlar</h6>
                          </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                        <div id="description" className="tab-pane fade show active">
                          <div className="description-items">
                             <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                   <div className="description-content">
                                      <h3>Ürün Açıklaması</h3>
                                      {product && product.descriptions && product.descriptions.map((desc, index) => (
                                          <p className="mb-4" key={index}>
                                              {desc.text.replace(/\[page=".*?"\](.*?)\[\/page\]/g, '$1')}
                                          </p>
                                      ))}
                                      
                                      {product && product.webCategoryTree && (
                                          <div className="description-list-items d-flex justify-content-between">
                                             <ul className="description-list">
                                                <li>
                                                   Kategori:
                                                   <span>{product.webCategoryTree.map(cat => cat.name).join(' > ')}</span>
                                                </li>
                                                {product.merchant && (
                                                    <li>
                                                        Satıcı:
                                                        <span>{product.merchant.name}</span>
                                                    </li>
                                                )}
                                                {product.productCode && (
                                                    <li>
                                                        Ürün Kodu:
                                                        <span>{product.productCode}</span>
                                                    </li>
                                                )}
                                             </ul>
                                          </div>
                                      )}
                                   </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                                   <div className="description-image">
                                      {product && product.images && product.images[0] && (
                                          <img src={`https://cdn.dsmcdn.com${product.images[0]}`} alt={product.name}/>
                                      )}
                                   </div>
                                </div>
                             </div>
                          </div>
                        </div>
                        <div id="additional" className="tab-pane fade">
                          <div className="table-responsive">
                             <table className="table table-bordered">
                                 <tbody>
                                   {product && product.attributes && product.attributes.map((attr, index) => (
                                       <tr key={index}>
                                         <td>{attr.key.name}</td>
                                         <td>{attr.value.name}</td>
                                       </tr>
                                   ))}
                                 </tbody>
                             </table>
                         </div>
                        </div>
                        <div id="review" className="tab-pane fade">
                            <div className="review-items">
                                {/* Mevcut yorumları göster */}
                                <div className="existing-reviews mb-5">
                                    <h4 className="mb-4">Müşteri Yorumları</h4>
                                    {reviews && reviews.length > 0 ? (
                                        <div className="reviews-list">
                                            {reviews.map((review, index) => (
                                                <div key={index} className="single-review border-bottom pb-4 mb-4">
                                                    <div className="review-header d-flex justify-content-between align-items-start mb-3">
                                                        <div className="reviewer-info">
                                                            <h6 className="reviewer-name mb-1">
                                                                {review.author?.name || 'Anonim Kullanıcı'}
                                                            </h6>
                                                            <p className="review-date text-muted mb-2">
                                                                {review.datePublished ? new Date(review.datePublished).toLocaleDateString('tr-TR') : ''}
                                                            </p>
                                                        </div>
                                                        {review.reviewRating && (
                                                            <div className="review-rating">
                                                                <div className="star">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <i 
                                                                            key={i} 
                                                                            className={`fas fa-star ${i < review.reviewRating.ratingValue ? 'text-warning' : 'text-muted'}`}
                                                                        ></i>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="review-content">
                                                        <p className="review-text mb-0">
                                                            {review.reviewBody}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="no-reviews text-center py-5">
                                            <div className="mb-3">
                                                <i className="far fa-comment-dots fa-3x text-muted"></i>
                                            </div>
                                            <h5 className="text-muted">Henüz yorum yok</h5>
                                            <p className="text-muted">Bu ürün için henüz yorum yapılmamış. İlk yorumu siz yapın!</p>
                                        </div>
                                    )}
                                </div>

                                <div className="review-title mt-5 py-15 mb-30">
                                    <h4>Yorum Ekle</h4>
                                    <div className="rate-now d-flex align-items-center">
                                        <p>Bu ürünü değerlendirin</p>
                                        <div className="star">
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                         <i className="fas fa-star"></i>
                                      </div>
                                    </div>
                                </div>
                                <div className="review-form">
                                   <form action="#" id="contact-form2" method="POST">
                                      <div className="row g-4">
                                         <div className="col-lg-6">
                                            <div className="form-clt">
                                               <input type="text" name="name" id="name" placeholder="Ad Soyad"/>
                                            </div>
                                         </div>
                                         <div className="col-lg-6">
                                            <div className="form-clt">
                                               <input type="text" name="email" id="email" placeholder="E-posta Adresi"/>
                                            </div>
                                         </div>
                                         <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8">
                                            <div className="form-clt-big form-clt">
                                               <textarea name="message" id="message" placeholder="Yorumunuz"></textarea> 
                                            </div>
                                         </div>
                                         <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9">
                                            <button type="submit" className="theme-btn hover-color">
                                                Yorum Gönder
                                            </button>
                                         </div>
                                      </div>
                                   </form>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
               </div>
        </section>

        {/* <!-- Product-collection Section Start --> */}
        <section className="product-collection-section-2 section-padding pt-0 fix">
            <div className="container">
                <div className="section-title style-2 text-center">
                    <h6 className="sub-title wow fadeInUp">
                        Önerilen Ürünler
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Benzer Ürünler
                    </h2>
                </div>
               <div className="tab-content">
                <div className="row">
                    {/* Burada ilgili ürünler gösterilebilir */}
                    {product && product.allVariants && product.allVariants.slice(0, 4).map((variant, index) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                            <div className="product-collection-item">
                                <div className="product-image">
                                    {product.images && product.images[0] && (
                                        <img src={`https://cdn.dsmcdn.com${product.images[0]}`} alt={product.name}/>
                                    )}
                                    <div className="product-btn">
                                        <a href="#" className="theme-btn-2 style-2">Sepete Ekle</a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <p>{product.brand ? product.brand.name : ''}</p>
                                    <h4>
                                        <a href="#">{product.name} - {variant.value}</a>
                                    </h4>
                                    <ul className="doller">
                                        <li>
                                            {variant.price} {variant.currency || 'TL'}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
               </div>
            </div>
        </section>

        <Footer storeInfo={storeInfo} />
    </div>
    
      )
}

export default ProductView