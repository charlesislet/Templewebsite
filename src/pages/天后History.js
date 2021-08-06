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
    'name': 'Ludwig van Beethoven',
    'birth': 1770,
    'death': 1827,
    'description': 'Surmontant à force de volonté les épreuves d’une vie marquée par la surdité qui le frappe à vingt-sept ans, célébrant dans sa musique le triomphe de l’héroïsme et de la joie quand le destin lui prescrivait l’isolement et la misère, il sera récompensé post mortem par cette affirmation de Romain Rolland : « Il est bien davantage que le premier des musiciens. Il est la force la plus héroïque de l’art moderne ».',
    'link': 'https://fr.wikipedia.org/wiki/Ludwig_van_Beethoven',
    'image': pic1
  },
  {
    'id': 2,
    'name': 'Wolfgang Amadeus Mozart',
    'birth': 1756,
    'death': 1791,
    'description': 'Mort à trente-cinq ans, il laisse une œuvre impressionnante (893 œuvres sont répertoriées dans le catalogue Köchel), qui embrasse tous les genres musicaux de son époque. Selon le témoignage de ses contemporains, il était, au piano comme au violon, un virtuose.',
    'link': 'https://fr.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart',
    'image': pic2
  },
  {
    'id': 3,
    'name': 'Jean-Sébastien Bach',
    'birth': 1685,
    'death': 1750,
    'description': 'Ses contemporains l’ont souvent considéré comme un musicien austère, trop savant et moins tourné vers l’avenir que certains de ses collègues. Il a formé de nombreux élèves et transmis son savoir à plusieurs fils musiciens pour lesquels il a composé quantité de pièces à vocation didactique, ne laissant cependant aucun écrit ou traité.',
    'link': 'https://fr.wikipedia.org/wiki/Jean-S%C3%A9bastien_Bach',
    'image': pic3
  }
  ,
  {
    'id': 4,
    'name': 'Frédéric Chopin',
    'birth': 1810,
    'death': 1849,
    'description': 'Reconnu comme l’un des plus grands compositeurs de musique de la période romantique, Frédéric Chopin est aussi l’un des plus célèbres pianistes du xixe siècle. Sa musique est encore aujourd’hui l’une des plus jouées et demeure un passage indispensable à la compréhension du répertoire pianistique universel.',
    'link': 'https://fr.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin',
    'image': pic4
  }
];

const marks = [
  {
    value: 1678,
    label: '1678'
  },
  {
    value: 1700,
    label: '1700'
  },
];

const PrettoSlider = withStyles({
  root: {
    color: '#5b166d',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function TienHistory() {
  const [selectedHistorycards, setSelectedHistorycards] = useState([]);
  const handleSliderChange = (event, value) => {
    setSelectedHistorycards(allHistorycards.filter(element => {
      return value >= element.birth && value <= element.death
    }))
  }

  useEffect(() => {
    handleSliderChange('', 1770);
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
        <PrettoSlider className="slider" valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={1770} marks={marks} min={1678} max={1897} onChange={handleSliderChange} onChangeCommitted={handleSliderChange} />
      <Historycards selectedHistorycards={selectedHistorycards} />
    </div>
    </>
  );
}
