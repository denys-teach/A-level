import logo from './img/tarra-logo.svg';
import box_image from './img/Computer-sales.jpg';

import './App.scss';

const ProductItem = () =>
    <div class="product-item">
        <img src="" alt="Product"/>
        <p class="product-title">sdfhsdfhfdh</p>
        <p class="product-price">20000</p>
    </div>
const FooterList = () => 
    <ul class="footer-list">
        <li class="footer-list-item">dsfhgdsfh</li>
        <li class="footer-list-item"><a class="footer-list-item-link" href="">Про компанію</a></li>
        <li class="footer-list-item"><a class="footer-list-item-link" href="">Каталог</a></li>
        <li class="footer-list-item"><a class="footer-list-item-link" href="">Доставка</a></li>
        <li class="footer-list-item"><a class="footer-list-item-link" href="">Оплата</a></li>
    </ul>
function App() {
  return (
    <div id='body'>
        <div class="page-light">
              <div class="wrapper">
                  <header class="header">
                      <nav>
                          <ul class="nav">
                              <li class="nav-item"><a class="nav-link" href="">afdgadfg</a></li>
                              <li class="nav-item"><a class="nav-link" href="">afdgadfg</a></li>
                              <li class="nav-item"><a class="nav-link" href="">afdgadfg</a></li>
                          </ul>
                      </nav>
                      <img class="img-logo" src={logo} alt="Logo"/>
                      <nav>
                          <ul class="nav">
                              <li class="nav-item"><a class="nav-link" href="">afdgadfg</a></li>
                              <li class="nav-item"><a class="nav-link" href="">afdgadfg</a></li>
                          </ul>
                      </nav>
                      <div class="cart">
                          <span class="cart-count">5</span>
                      </div>
                  </header>
              </div>
          </div>
          <div class="page page-light">
              <div class="wrapper">
                  <main class="main">
                      <div class="main-item sale">
                          <p class="sale-description">Зимняя продажа</p>
                          <h1 class="sale-title">Sales</h1>
                          <a href="" class="btn">See model</a>
                      </div>
                      <div class="box">
                          <div class="main-item box-price">
                              <strike class="box-price_old">24000 ₴</strike>
                              <p class="box-price_new">18999 ₴</p>
                          </div>
                          <img class="box-image" src={box_image} alt="PK"/>
                      </div>
                  </main>
              </div>
          </div>
          <div class="page page-dark notice">
              <div class="wrapper">
                  <h1 class="notice-title"><span>Бесплатная доставка</span> от 1000</h1>
                  <p class="notice-description">Зробіть замовлення та отримайте подарунок</p>
              </div>
          </div>
          <div class="page-light">
              <div class="wrapper">
                  <div class="collection">
                      <div class="colection-item colection-man">
                          <h2 class="collection-title">Мужская колекция</h2>
                          <p class="collection-description">fgdgdfgdf dfgdsfg dsf dfdfg</p>
                          <a href="" class="btn btn-xs">
                              <img src="" alt="Arrow"/>
                          </a>
                      </div>
                      <div class="colection-item colection-woman">
                          <h2 class="collection-title">Женская колекция</h2>
                          <p class="collection-description">fgdgdfgdf dfgdsfg dsf dfdfg</p>
                          <a href="" class="btn btn-xs">
                              <img src="" alt="Arrow"/>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="page">
              <div class="wrapper">
                  <h2 class="title-h2">fdsjhfghsdfh</h2>
                  <div class="product">
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                      <ProductItem/>
                  </div>
                  <a href="" class="btn btn-center"><span>all model</span></a>
              </div>
          </div>
          <div class="page-dark">
              <div class="wrapper">
                  <footer class="footer">
                      <div class="footer-logo">
                          <img src={logo} alt="Logo" width="150px"/>
                      </div>
                      <div class="footer-nav">
                          <FooterList/>
                          <FooterList/>
                          <FooterList/>
                          <FooterList/>
                      </div>
                  </footer>
              </div>
          </div>
    </div>
  );
}

export default App;
