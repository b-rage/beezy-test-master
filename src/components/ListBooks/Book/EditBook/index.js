import React, { Component } from 'react'

class EditBook extends Component {

    titleRef = React.createRef()
    priceRef = React.createRef()
    genreRef = React.createRef()

    onEditBook = (e) => {
        e.preventDefault()
        const title = this.titleRef.current.value,
            price = this.priceRef.current.value,
            genre = this.genreRef.current.value.toLowerCase()
        const newData = { id: this.props.info.id, title, price, genre }
        this.props.editBook(this.props.info.id, newData)

    }
    render() {
        const { title, price, genre } = this.props.info
        return (
            <div>
                <form onSubmit={this.onEditBook}>
                    <div className='form-group row mt-3'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>Title</label>
                        <div className='col-sm-8 col-lg-10'>
                            <input ref={this.titleRef} defaultValue={title} type='text' className='form-control' placeholder='title' />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>Price</label>
                        <div className='col-sm-8 col-lg-10'>
                            <input ref={this.priceRef} defaultValue={price} type='number' className='form-control' placeholder='price' />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>Genre</label>
                        <div className='col-sm-8 col-lg-10'>
                            <input ref={this.genreRef} defaultValue={genre} type='text' className='form-control' placeholder='genre' />
                        </div>
                    </div>
                    <div className='form-group row justify-content-center'>
                        <div className='col-sm-3'>
                            <button type='submit' className='btn btn-success w-100'>Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditBook

