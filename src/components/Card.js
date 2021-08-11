import React from 'react';
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
    <div className="cards">
    <div className="card">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ pic1 }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            天后宮
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            位於馬公市中央里的天后宮主祀媽祖，建於西元1604年，是全臺灣歷史最悠久的媽祖廟。廟體建築出自唐山名匠之手，有深具藝術造詣的各類建築構建與裝飾，廟中並典藏有現存臺灣最早的古碑—沈有容諭退紅毛番韋麻郎等之碑
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to='/tien'>
          <Button size="small" color="primary">
          查看更多
          </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
    <div className="card">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= { pic2 }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            城隍廟
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            位於馬公市中央里的天后宮主祀媽祖，建於西元1604年，是全臺灣歷史最悠久的媽祖廟。廟體建築出自唐山名匠之手，有深具藝術造詣的各類建築構建與裝飾，廟中並典藏有現存臺灣最早的古碑—沈有容諭退紅毛番韋麻郎等之碑
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          查看更多
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= { pic3 }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            關帝廟
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            位於馬公市中央里的天后宮主祀媽祖，建於西元1604年，是全臺灣歷史最悠久的媽祖廟。廟體建築出自唐山名匠之手，有深具藝術造詣的各類建築構建與裝飾，廟中並典藏有現存臺灣最早的古碑—沈有容諭退紅毛番韋麻郎等之碑
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          查看更多
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
    </>
  );
}
