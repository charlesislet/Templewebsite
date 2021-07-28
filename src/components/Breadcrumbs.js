import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import './Breadcrumbs.css';

function handleClick(event) {
  event.preventDefault();
}

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs className='breadcrumbs' aria-label="breadcrumb">
      <Link className='breadcrumbs-item' color="inherit" href="/" onClick={handleClick}>
        簡介
      </Link>
      <Link className='breadcrumbs-item' color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        歷史
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
}
