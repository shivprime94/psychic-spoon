import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import PageNotFound from './components/pageNotFound/pageNotFound'
import MovieDetail from './components/movieDetail/movieDetail'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/movie/:imdbID' component={MovieDetail} />
            <Route component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
