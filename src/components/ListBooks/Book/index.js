import React, { Component } from 'react'
import EditBook from './EditBook'


class Book extends Component {

    state = { edit: false }

    deleteBook = () => {
        this.props.deleteBook(this.props.info.id)       
    }

    editBook = () => {
        this.setState({ edit: true })            
    }

    onEditBook = (id, newData) => {

        this.props.editBook(id, newData)
        this.setState({ edit: false }) 
    }

  render() {
      const { title, price, genre } = this.props.info
    return (
      <div className='media mt-3' >
        <div className='media-body'>
            <p className='card-text'>title: {title}</p>
            <p className='card-text'>price: {price} €</p>
            <p className='card-text'>genre: {genre}</p>
            <button onClick={this.deleteBook} className='btn btn-danger'>Delete</button>
            <button onClick={this.editBook} className='btn btn-warning ml-3'>Edit</button>
            {this.state.edit ? <EditBook info={this.props.info} editBook={this.onEditBook}/> : null}
            <hr></hr>
        </div>
      </div>
    )
  }
}

export default Book

