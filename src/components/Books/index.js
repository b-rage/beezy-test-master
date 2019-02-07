import React from 'react'
import AddBook from '../AddBook'
import ListBooks from '../ListBooks'

const Books = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <AddBook />
            </div>
            <div className='col-md-6'>
            <ListBooks/>
            </div>
        </div>
    </div>
  )
}

export default Books
