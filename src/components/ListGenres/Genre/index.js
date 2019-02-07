import React, { Component } from 'react'
import EditGenre from './EditGenre'


class Genre extends Component {

    state = { edit: false }

    deleteGenre = () => {
        this.props.deleteGenre(this.props.info)       
    }

    editGenre = () => {
        this.setState({ edit: true })            
    }

    onEditGenre = (_genre, newDataGenre) => {

        this.props.editGenre(_genre, newDataGenre)
        this.setState({ edit: false }) 
    }

  render() {
      const genre = this.props.info
 
    return (
      <div className='media mt-3'>
        <div className='media-body'>
            <p className='card-text'>genre: {genre}</p>
            <button onClick={this.deleteGenre} className='btn btn-danger'>Delete</button>
            <button onClick={this.editGenre} className='btn btn-warning ml-3'>Edit</button>
            {this.state.edit ? <EditGenre info={genre} editGenre={this.onEditGenre}/> : null}
            <hr></hr>
        </div>
      </div>
    )
  }
}

export default Genre