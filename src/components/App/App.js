import Header from '../Header/Header'
import JobsList from '../JobsList/JobsList';
import './app.scss';
import React from 'react'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <JobsList/>
      </main>
    </div>
  )
}
export default App;



