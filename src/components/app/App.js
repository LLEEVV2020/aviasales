import React from 'react'

import Logo from '../Logo'
import Filters from '../Filters'

import classes from './App.module.scss'

function App() {
  return (
    <section className={classes['app']}>
      <Logo />
      <div className={classes['app__body']}>
        <div className={classes['app__left-column']}>
          <Filters className={classes['app__filters']} />
        </div>
        <div className={classes['app__right-column']}>
          <p>Sorting</p>
          <p>Progress</p>
          <p>Airlines</p>
        </div>
      </div>
    </section>
  )
}

export default App

//import { Filter } from '../../const'
