import {Component} from 'react';

import './jobsItem.scss';
import logo from '../../images/moon.svg'

import React from 'react'

function JobsItem(props) {
  let{logo , title , companyName , companyCountry , whenPlaced , workTime} = props
  return (
    <article className="jobslist__item">
    <a href="#">
        <div className='company__logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='card__info'>
            <span className='vac__createdat'>{whenPlaced}</span>
            <div className='dot'></div>
            <span className='vac__type'>{workTime}</span>
        </div>
        <div className='job__title'>
            <h1>{title}</h1>
        </div>
        <div className='company__name'>
          {companyName}
        </div>
        <div className='countary'>
          {companyCountry}
        </div>
    </a>
  </article>  )
}



export default JobsItem;
