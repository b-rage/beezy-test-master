import React, { Component } from 'react'
import './index.css'

class EditGenre extends Component {

    genreRef = React.createRef()

    onEditGenre = (e) => {
        e.preventDefault()
        const genreInput = this.genreRef.current.value.toLowerCase()
        this.props.editGenre(this.props.info, genreInput)
    }
    render() {
        const  genre   = this.props.info
        return (
            <div className='edit-container'>
                <form onSubmit={this.onEditGenre}>
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

export default EditGenre