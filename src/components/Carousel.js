import React from 'react';
import './Carousel.css';
import Button from '@material-ui/core/Button';

const Carousel = () => {
	return(
    <>
    <div className="header">
      <div className="main-info">
       <h1>漫遊澎湖廟宇</h1>
       <p>與媽公城的浪漫邂逅</p>
      <Button variant="contained" color="secondary">
        點此探索
      </Button>
      </div>
    </div>
    
    </>
	)

}

export default Carousel;