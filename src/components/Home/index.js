import React, { Component } from 'react'
import { AppConsumer } from '../../context/app-context';
import './index.css'

class Home extends Component {

  state = { search:''}

  updateSearch = (e) => { 
    this.setState({search: e.target.value})
  }

  render() {
   /* let  filteredBooks = this.context.books.filter((book) => {
     return book.genre.toLowerCase().indexOf(this.state.search) !== -1
   }) */
   
    return (
      <AppConsumer>
        { (context) => (
      <div className='my-container' ref={(ref) => { this.context = context; }}>
        <div>
          <h4>Search Books by Genre</h4>
        </div>
        <div>
          <input type='text' value={this.state.search} onChange={this.updateSearch} placeholder=' search...' />
          {/* <ul className='list-group'>
            {filteredBooks.map((book) => {
              return <li className='list-item' key={book.id}>{book.title} - {book.price} € - {book.genre}</li>
            })}
          </ul> */}
        </div>
      </div>
    )}</AppConsumer>)
  }
}

export default Home
