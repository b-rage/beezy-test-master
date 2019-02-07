import React, { Component } from "react";


//
// Initial State
//

//const initialState = { books:[], genres:[] }

//
// Context...
//

export const AppContext = React.createContext();


class AppProvider extends Component {
  
  state = { books:[], genres:[] }
 
  
  addBook = async (newBook) => {
    try {
        await setTimeout(() => { 
            const books = [...this.state.books, newBook]
            let genre = newBook.genre
            let _genres = [...this.state.genres]
            if(_genres.includes(genre)) {
                this.setState({books: books, genres: _genres})
            }else{
                _genres.push(genre)
                this.setState({books: books, genres: _genres})
            }
        }, 600)
    } catch (error) {
        console.log(error)
    }
}

deleteBook = async (id) => {
    try {
        await setTimeout(() => {
            const _books = [...this.state.books]
            const books = _books.filter(book => book.id !== id)
            this.setState({ books }) 
        }, 600)
    } catch (error) {
        console.log(error)
    }    
}

editBook = async (id, newData) => {
    try {
        await setTimeout(() => {
            const _books = [...this.state.books]
            const books = _books.filter(book => book.id !== id)
            const __books = [...books, newData] 
            let _genres = [...this.state.genres]
            if(_genres.includes(newData.genre)) {
                this.setState({books: __books, genres: _genres})
            }else{
                _genres.push(newData.genre)
                this.setState({books: __books, genres: _genres})
            }       
        }, 600)
    } catch (error) {
        console.log(error)
    }
}

addGenre = async (newGenre) => {
    try {
        await setTimeout(() => {
            let genres = [...this.state.genres, newGenre]
            this.setState({ genres })
        }, 600)
    } catch (error) {
        console.log(error)
    }
             
}

deleteGenre = async (_genre) => {
    try {
        await setTimeout(() => {
            let _genres = [...this.state.genres]
            let genres = _genres.filter(genre => genre !== _genre)
            let _books = [...this.state.books]
            let books = _books.filter(book => book.genre !== _genre)
            this.setState({ genres, books }) 
        }, 600)
    } catch (error) {
        console.log(error)
    }
}

editGenre = async (oldDataGenre, newDataGenre) => {   
    try {
        await setTimeout(() => {
            let _genres = [...this.state.genres]
            let genres = _genres.map(genre => {
                if(genre === oldDataGenre) genre = newDataGenre
                return genre
            })
            let _books = [...this.state.books]
            let books = _books.map(book => {
                if(book.genre === oldDataGenre) book.genre = newDataGenre
                return book
            })
            this.setState({books, genres})
        }, 600)
    } catch (error) {
        console.log(error)
    }
}
  
  render() {
    return (
      <AppContext.Provider value={{
        books: this.state.books,
        genres: this.state.genres,
        addBook: this.addBook,
        deleteBook: this.deleteBook,
        editBook: this.editBook,
        addGenre: this.addGenre,
        editGenre: this.editGenre,
        deleteGenre: this.deleteGenre

      }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }

}

const AppConsumer = AppContext.Consumer;
export { AppProvider, AppConsumer };