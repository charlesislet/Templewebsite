import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './天后History.css';
import './天后.css';
import SimpleBreadcrumbs from '../components/Breadcrumbs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../Image/天后宮/媽祖神像.jpg';
import pic2 from '../Image/天后宮/IMG_3175.JPG';
import pic3 from '../Image/天后宮/IMG_3201.JPG';
import pic4 from '../Image/天后宮/IMG_9492.JPG';

export default function TienHistory() {
  var settings = {
    // customPaging: function (slider, i) {
		// 	var title = $(slider.$slides[i]).data('title');
		// 	return '<span class="dots__item"><span class="dots__number">0'+ Number(i+1) + '</span>' + title + ' </span>';
		// },
      // var thumb = $(slider.$slides[i]).find('.slider-nav');
      //     return thumb;

    lazyLoad: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <>
    <div className="header-tien">
      <div className="main-info-tien">
       <h1>天后宮</h1>
      </div>
    </div>
    <div className='container'>
        <SimpleBreadcrumbs/>
        <Slider className='history-slider slider' {...settings}>
        <section className= "history-box">
            <div className="history-column">
                <img src={pic1}></img>
            </div>
            <div className="history-column">
                <p className='year'>1604</p>
                <p className='history-column-description'>創建於何時卻始終沒有定論。不過，可以確定的是，明萬曆32年（1604）就已經存在</p>
            </div>
        </section>
        <section className= "history-box">
            <div className="history-column">
                <img src={pic1}></img>
            </div>
            <div className="history-column">
                <p className='year'>1604</p>
                <p className='history-column-description'>創建於何時卻始終沒有定論。不過，可以確定的是，明萬曆32年（1604）就已經存在</p>
            </div>
        </section>
        </Slider>
        
    </div>
    </>
  );
}
