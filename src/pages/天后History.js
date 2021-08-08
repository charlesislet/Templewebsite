import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import './天后History.css';
import './天后.css';
import SimpleBreadcrumbs from '../components/Breadcrumbs';
import Historycards from '../components/Historycards';
import pic1 from '../Image/天后宮/媽祖神像.jpg';
import pic2 from '../Image/天后宮/IMG_3175.JPG';
import pic3 from '../Image/天后宮/IMG_3201.JPG';
import pic4 from '../Image/天后宮/IMG_9492.JPG';

const allHistorycards = [
  {
    'id': 1,
    'name': '明萬曆卅二年',
    'year': 1604,
    'description': '沈有容諭退紅毛番',
    'link': '',
    // 'image': 
  },
  {
    'id': 2,
    'name': '康熙廿二年',
    'year': 1683,
    'description': '施琅攻佔澎湖，將勝利歸功於媽祖庇佑',
    'link': '',
    // 'image': 
  },
  {
    'id': 3,
    'name': '光緒十一年',
    'year': 1885,
    'description': '重建',
    'link': '',
    // 'image': 
  }
];

const marks = [
  {
    value: 1604,
    label: '1604'
  },
  {
    value: 1683,
    label: '1683'
  },
  {
    value: 1885,
    label: '1885'
  },
];

const PrettoSlider = withStyles({
  root: {
    color: '#008040',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    zIndex:3,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 12px)',
  },
  track: {
    height: 15,
    borderRadius: 2,
  },
  rail: {
    height: 15,
    borderRadius: 2,
  },
  mark: {
    height: 15,
    width: 5,
    borderRadius: 6,
    backgroundColor: '#e60000',
    zIndex:1,
  },
  markActive: {
    backgroundColor: '#00cc66',
    zIndex:2,
  }
})(Slider);

export default function TienHistory() {
  const [selectedHistorycards, setSelectedHistorycards] = useState([]);
  const handleSliderChange = (event, value) => {
    setSelectedHistorycards(allHistorycards.filter(element => {
      return value == element.year
    }))
  }

  useEffect(() => {
    handleSliderChange('', 1604);
  }, [])
  return (
    <>
    <div className="header-tien">
      <div className="main-info-tien">
       <h1>天后宮</h1>
      </div>
    </div>
    <div className='container'>
        <SimpleBreadcrumbs/>
        <PrettoSlider className="slider" valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={1604} marks={marks} min={1604} max={1885} onChange={handleSliderChange} onChangeCommitted={handleSliderChange} />
        <Historycards selectedHistorycards={selectedHistorycards} />
    </div>
    </>
  );
}
