import React, { Component } from 'react'
import { AppConsumer } from '../../context/app-context'
import uuid from 'uuid'

class AddBook extends Component {

    state = { title: '', genre: '', price: '', error: false }

    handleTitleChange = e => {
        const title = e.target.value
        this.setState({ title })
    }

    handleGenreChange = e => {
        const genre = e.target.value
        this.setState({ genre })
    }

    handlePriceChange = e => {
        const price = e.target.value
        this.setState({ price })
    }

    addNewBook = e => {
        e.preventDefault()
        const { title, genre, price } = this.state

        if( title === '' || price === '' || genre === '') {
            this.setState({ error: true })
        }else{
            const newBook = { id: uuid(), title, price, genre }
            this.context.addBook(newBook)
            e.currentTarget.reset()
            this.setState({ error: false })
        }      
    }

  render() {
      const { error } = this.state
      return (
        <AppConsumer>
        { (context) => (
        <div className='card mt-5' ref={(ref) => { this.context = context; }}>
            <div className='card-body'>
                <h3 className='card-title text-center mb-5'>Add new book</h3>
                <form onSubmit={this.addNewBook}>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>Title</label>
                        <div className='col-sm-8 col-lg-10'>
                            <input onChange={this.handleTitleChange} type='text' className='form-control' placeholder='title' />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>Price</label>
                        <div className='col-sm-8 col-lg-10'>
                            <input onChange={this.handlePriceChange} type='number' className='form-control' min='0'  placeholder='price' />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>Genre</label>
                        <div className='col-sm-8 col-lg-10'>
                            <input onChange={this.handleGenreChange} type='text' className='form-control'  placeholder='genre' />
                        </div>
                    </div>
                    <div className='form-group row justify-content-center'>
                        <div className='col-sm-3'>
                            <button type='submit' className='btn btn-success w-100'>Add</button>
                        </div>
                    </div>
                </form>
                { error ? <div className='alert alert-danger text-center'>all fields are required</div> : null}
            </div>           
        </div>
    )}</AppConsumer>
    )
  }
}

export default AddBook
