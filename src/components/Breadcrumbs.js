import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Link as RouterLink} from 'react-router-dom';
import './Breadcrumbs.css';


export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs className='breadcrumbs' aria-label="breadcrumb">
      <Link className='breadcrumbs-item' color="inherit" href="/" >
        簡介
      </Link>
      <Link component={RouterLink} to="/tienhistory" className='breadcrumbs-item' color="inherit" >
        歷史
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
}
