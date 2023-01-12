import {Component} from 'react';
import JobsItem from '../JobsItem/JobsItem';
import './jobsList.scss';



import React from 'react'

 function JobsList() {
  return (
    <section className='jobslist__wrapper container'>
    <section className="jobslist">
        <JobsItem 
          companyName="Epam"
          companyCountry="Uzbekistan"
          logo='https://devjobs-backend.netlify.app/icons/vector.svg'
          title="FullStack developer"
          whenPlaced='1h ago'
          workTime='Part time'
          key='1'   
        />
        <JobsItem 
          companyName="Epam"
          companyCountry="Uzbekistan"
          logo='https://devjobs-backend.netlify.app/icons/vector.svg'
          title="FullStack developer"
          whenPlaced='1h ago'
          workTime='Part time'
          key='1'   
        />
        <JobsItem 
          companyName="Epam"
          companyCountry="Uzbekistan"
          logo='https://devjobs-backend.netlify.app/icons/vector.svg'
          title="FullStack developer"
          whenPlaced='1h ago'
          workTime='Part time'
          key='1'   
        />
      </section>
      <button className='loadmore'>Load more</button>
  </section>
  )
}



export default JobsList;

