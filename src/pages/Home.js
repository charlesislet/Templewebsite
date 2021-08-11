import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from '../components/Carousel';
import MediaCard from '../components/Card';
import pic1 from '../Image/天后宮/IMG_6834.JPG';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


export default function Home() {
  const classes = useStyles();
    return (
      <>
      <Carousel/>
      <Grid container className={classes.root}>
        <Grid item className='about' sm={6} xs={12}>
          <h1>關於</h1>
          <p>漫遊澎湖廟宇是個整合式資源平台，以線上博物館的方式導覽，在家就可參觀與探索廟宇的古老莊嚴</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img className='about-image' src={pic1}/>
        </Grid>
      </Grid>
      <MediaCard/>
      </>
    );
  }
  