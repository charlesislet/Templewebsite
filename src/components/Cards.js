import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css';
import pic1 from '../Image/天后2.jpg';
import pic2 from '../Image/城隍.jpg';
import pic3 from '../Image/武聖.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
    <div className="card-title">
      <h1>探索廟宇</h1>
    </div>
    <Grid container className="cards">
    <Grid className="card-temple" sm={4} xs={12}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ pic1 }
        />
        <CardContent>
        <p>馬公市</p>
        <h2>天后宮</h2>
        </CardContent>
      </CardActionArea>
      <CardActions className='cardaction'>
        <Link to='/tien'>
          <button >
          查看更多
          </button>
        </Link>
      </CardActions>
    </Card>
    </Grid>
    <Grid className="card-temple" sm={4} xs={12}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= { pic2 }
          title="Contemplative Reptile"
        />
        <CardContent>
        <p>馬公市</p>
        <h2>城隍廟</h2>
        </CardContent>
      </CardActionArea>
      <CardActions className='cardaction'>
        <Link to=''>
          <button disabled >
          網頁開發中
          </button>
        </Link>
      </CardActions>
    </Card>
    </Grid>
    <Grid className="card-temple" sm={4} xs={12}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= { pic3 }
        />
        <CardContent>
        <p>馬公市</p>
        <h2>關帝廟</h2>
        </CardContent>
      </CardActionArea>
      <CardActions className='cardaction'>
        <Link to=''>
          <button disabled >
          網頁開發中
          </button>
        </Link>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </>
  );
}