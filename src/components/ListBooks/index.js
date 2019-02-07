import React from 'react'
import { AppConsumer } from '../../context/app-context'
import Book from './Book'

const ListBooks = () => {
    
  return (
    <AppConsumer>
        { (context) => (
        <div className='card mt-5'>
            <div className='card-body'>
                <h3 className='card-title text-center'>Books</h3>
                <div>
                    {Object.keys(context.books).map(book => (
                        <Book key={book} info={context.books[book]} deleteBook={context.deleteBook} editBook={context.editBook}/>
                    ))}
                </div>
            </div>
        </div>
    )}</AppConsumer>
  )
}

export default ListBooks







