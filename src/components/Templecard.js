import React from 'react';
import { Link } from 'react-router-dom';
import './Templecard.css';
import Grid from '@material-ui/core/Grid';
import pic1 from '../Image/天后2.jpg';
import pic2 from '../Image/城隍.jpg';
import pic3 from '../Image/武聖.jpg';

export default function Templecard() {
    return(
        <Grid container className='templecards'>
            <Grid item className='templecard' sm={4} xs={12}>
                <img src={pic1}></img>
                <p>天后宮</p>
                <div class="templecard-btn">
                    <Link to='./tien'><button>點擊探索</button></Link>
                </div>
            </Grid>
            <Grid item className='templecard' sm={4} xs={12}>
                <img src={pic2}></img>
                <p>城隍廟</p>
                <div class="templecard-btn">
                    <h4>網站開發中</h4>
                </div>
            </Grid>
            <Grid item className='templecard' sm={4} xs={12}>
                <img src={pic3}></img>
                <p>關帝廟</p>
                <div class="templecard-btn">
                    <h4>網站開發中</h4>
                </div>
            </Grid>
        </Grid>
    )
}