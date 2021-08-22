import React from 'react';
import './虎垛.css';
import Grid from '@material-ui/core/Grid';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import pic1 from '../../Image/天后宮/IMG_3175.JPG';

export default function 虎垛() {
    return(
        <div className='container'>
            <Grid container className='pic-info'>
                <Grid item className='pic-info-item' sm={6} xs={12}>
                    <InnerImageZoom className='pic-info-img' src={pic1} zoomSrc={pic1} zoomType="hover" zoomPreload={true}/>
                </Grid>
                <Grid item className='pic-info-item' sm={6} xs={12}>
                    <h1>虎垛</h1>
                    <p>天后宮</p>
                </Grid>
            </Grid>
        </div>
    )
}