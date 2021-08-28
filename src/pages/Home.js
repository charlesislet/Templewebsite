import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Templecard from '../components/Templecard';
import pic1 from '../Image/天后宮/IMG_6834.JPG';
import pic2 from '../Image/天后宮/IMG_3161.JPG';
import pic3 from '../Image/天后宮/IMG_3175.JPG';
import pic4 from '../Image/天后宮/IMG_3201.JPG';
import pic5 from '../Image/天后宮/IMG_9492.JPG';
import pic6 from '../Image/天后宮/IMG_3174.JPG';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


export default function Home() {
  const classes = useStyles();
  const settings = {
    className: "decoration-slider",
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
      <>
      <Navbar/>
      <Templecard/>
      <Grid container className={classes.root}>
        <Grid item sm={6} xs={12}>
          <img className='about-image' src={pic1}/>
        </Grid>
        <Grid item className='about' sm={6} xs={12}>
          <h1>關於</h1>
          <p>漫遊澎湖廟宇是個整合式資源平台，以線上博物館的方式導覽，在家就可參觀與探索廟宇的古老莊嚴</p>
        </Grid>
      </Grid>
      <div className='decoration'>
      <h1>壁飾與文物</h1>
      <Slider {...settings}>
          <div className='decoration-1' >
            <img  src={pic2}></img>
          </div>
          <div className='decoration-2' >
            <Link to="/虎垛">
            <img  src={pic6} onMouseOver={e => e.currentTarget.src = pic3} onMouseOut={e => e.currentTarget.src = pic6}></img>
            </Link>
          </div>
          <div className='decoration-3' > 
            <img  src={pic4}></img>
          </div>
          <div className='decoration-4' >
            <img  src={pic5}></img>
          </div>
        </Slider>
        </div>
      </>
    );
  }
  