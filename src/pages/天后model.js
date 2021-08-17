import React from 'react';
import './天后.css';
import SimpleBreadcrumbs from '../components/Breadcrumbs';


export default function Tienmodel() {
  return(
    <>
    <div className="header-tien">
      <div className="main-info-tien">
       <h1>天后宮</h1>
      </div>
    </div>
    <div className='container'>
      <SimpleBreadcrumbs/>
      <div class="sketchfab-embed-wrapper"> 
      <iframe title="澎湖天后宮" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered  src="https://sketchfab.com/models/6d7c727de72b4ba681482365b4da47fb/embed" width="100%" height="500vh"> </iframe> 
      </div>
    </div>
    
    </>
  )
}
