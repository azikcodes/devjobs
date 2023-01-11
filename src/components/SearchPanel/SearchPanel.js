import { Component } from 'react'
import logo from '../../images/devjobs.svg';
import './searchPanel.scss'

function SearchPanel() {
  return (
    <section className='container search-panel'>
    <form action="#" className='form'>
        <div className='search__inp input'>
            <label htmlFor="search">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z" fill="#5964E0"/>
                </svg>
            </label>
            <input 
                name='jobName'
                type="text" 
                id='search' 
                placeholder='Filter by title, companies, expertise…'/>
        </div>
        <div className='navigator__inp input'>
            <label htmlFor="navigator">
                <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.4477 0C10.6804 0 12.7796 0.870546 14.3585 2.45105C17.2803 5.37556 17.6434 10.8781 15.1348 14.2255L8.4477 23.894L1.75057 14.2119C-0.747997 10.8781 -0.384894 5.37556 2.53693 2.45105C4.11575 0.870546 6.21459 0 8.4477 0ZM5.47357 8.29091C5.47357 9.97484 6.84272 11.3455 8.52485 11.3455C10.207 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.207 5.23636 8.52485 5.23636C6.84272 5.23636 5.47357 6.60698 5.47357 8.29091Z" fill="#5964E0"/>
                </svg>
            </label>
            <input
                name='countryName' 
                type="text" 
                id='navigator' 
                placeholder='Filter by location…'/>
        </div>
        <div className='checkbox'>
            <input
                defaultChecked="false"
                type="checkbox" 
                id='checkbox'
            />
            <label htmlFor="checkbox">
                Full Time Only
            </label>
        </div>
        <button>Search</button>
    </form>
</section>    
  )
}


export default SearchPanel