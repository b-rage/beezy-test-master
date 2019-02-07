import React from 'react'
import AddGenre from '../AddGenre'
import ListGenres from '../ListGenres'

const Genres = (props) => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <AddGenre addGenre={props.addGenre} genres={props.genres}/>
            </div>
            <div className='col-md-6'>
            <ListGenres genres={props.genres} deleteGenre={props.deleteGenre} editGenre={props.editGenre}/>
            </div>
        </div>
    </div>
  )
}

export default Genres