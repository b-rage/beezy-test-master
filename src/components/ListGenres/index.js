import React from 'react'
import { AppConsumer } from '../../context/app-context'
import Genre from './Genre'

const ListGenres = () => {
   
  return (
    <AppConsumer>
    { (context) => (
        <div className='card mt-5'>
            <div className='card-body'>
                <h3 className='card-title text-center'>Genres</h3>
                <div>
                    {Object.keys(context.genres).map(genre => (
                        <Genre key={genre} info={context.genres[genre]} deleteGenre={context.deleteGenre} editGenre={context.editGenre}/>
                    ))}
                </div>
            </div>
        </div>
    )}</AppConsumer>
  )
}

export default ListGenres