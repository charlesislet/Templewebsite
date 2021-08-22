import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './天后.css'
import SimpleBreadcrumbs from '../components/Breadcrumbs';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import pic1 from '../Image/天后宮/IMG_3161.JPG';
import pic2 from '../Image/天后宮/IMG_3175.JPG';
import pic3 from '../Image/天后宮/IMG_3201.JPG';
import pic4 from '../Image/天后宮/IMG_9492.JPG';

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: 'right',
    width: '10px',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default function Tien() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  var settings = {
    className: "slider",
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // variableWidth: true
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
      <Grid container className='description'>
        <Grid item className='word' sm={6} xs={12}>
          <h2>天后宮簡介</h2>
          <p>
          天后宮位於澎湖縣馬公市正義街上，俗稱『天妃宮』、『媽祖宮』，在明代稱為『娘宮』、『媽娘宮』、『娘媽宮』『媽宮』等，也是馬公地名的由來；
          天后宮是全台灣歷史最悠久的媽祖廟，在西元1604年荷蘭人被明朝擊退到澎湖時就已經存在，可見其歷史之悠久，也是馬公地區民眾的信仰中心。
          </p>
        </Grid>
        <Grid item  sm={6} xs={12}>
          <img  src={ pic1 }></img></Grid>
        </Grid>
      <Grid container className='info-box'>
        <Grid item sm={7} xs={12} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1515.57783696468!2d119.5639376472616!3d23.564741090997252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346c5a8cb0ec27c7%3A0x7898100c08a9fbe9!2z5r6O5rmW5aSp5ZCO5a6u!5e0!3m2!1szh-TW!2stw!4v1627364027673!5m2!1szh-TW!2stw' />"}}/>
        <Grid item sm={5} xs={12}>
          <h4 className='info-word'><FontAwesomeIcon icon={faMapMarkerAlt} style={{color:'rgb(194, 21, 47)'}}/>   地址</h4>
          <p>澎湖縣馬公市正義街1號</p>
          <h4 className='info-word'><FontAwesomeIcon icon={faClock} style={{color:'rgb(194, 21, 47)'}}/>   營業時間</h4>
          <p>星期一至星期日  07:00-19:00</p>
          <h4 className='info-word'><FontAwesomeIcon icon={faPhone} style={{color:'rgb(194, 21, 47)'}}/>   電話號碼</h4>
          <p>06-9262819</p>
        </Grid>
      </Grid>
      <div className='collection'>
        <h1>雕飾與藏品</h1>
        <div>
        <Slider {...settings}>
          <div>
            <img  src={pic1} onClick={handleClickOpen}></img>
            <Dialog className='dialog'fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
              <IconButton className={classes.button} edge="" onClick={handleClose} aria-label="close">
                <FontAwesomeIcon icon={faTimesCircle} style={{color:'#000000'}}/>
              </IconButton>
              <img src={pic1}></img>
              <p>位於三川殿步口(為房屋前面以屋簷延伸為頂的走廊空間)上方架棟的雕花，其雕刻手法因木匠受嶺南畫派影響，以內枝外葉的手法，表現出凹凸的前後層次，展現細膩工法，題材為歷史故事或花鳥，為天后宮裝飾藝術中最重要的部份，也是全臺廟宇中最優秀作品之一。</p>
            </Dialog>
          </div>
          <div>
            <img src={pic2}></img>
          </div>
          <div>
            <img src={pic3}></img>
          </div>
          <div>
            <img src={pic4}></img>
          </div>
        </Slider>
        </div>
      </div>
    </div>
    
    </>
  );
}

