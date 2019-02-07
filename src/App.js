import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Books from './components/Books'
import Genres from './components/Genres'
import { AppProvider } from './context/app-context'


const App = () => {
  return (
    <Router>
      <AppProvider>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/genres" component={Genres} />
      </AppProvider>
    </Router>
  )
}

export default App

