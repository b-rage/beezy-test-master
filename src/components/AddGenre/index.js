import React, { Component } from 'react'
import { AppConsumer } from '../../context/app-context'

class AddGenre extends Component {

    genreRef = React.createRef()

    state = { genre: '', error: false, errorGen: false }

    handleGenreChange = e => {
        const genre = e.target.value
        this.setState({ genre })
    }

    addNewGenre = e => {
        e.preventDefault()

        const genre = this.state.genre.toLowerCase()

        const _genre = this.context.genres.filter(item => item === genre)

        if( genre === '') {
            this.setState({ error: true })
        }else if(_genre.length > 0 ){
            this.setState({ errorGen: true })
        }else{
            const newGenre = genre 
            this.context.addGenre(newGenre)
            e.currentTarget.reset()
            this.setState({ error: false, errorGen: false })
        }       
    }

  render() {
      const { error, errorGen } = this.state
      return (
        <AppConsumer>
        { (context) => (
        <div className='card mt-5' ref={(ref) => { this.context = context; }}>
            <div className='card-body'>
                <h3 className='card-title text-center mb-5'>Add new Genre</h3>
                <form onSubmit={this.addNewGenre}>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>Genre</label>
                        <div className='col-sm-8 col-lg-10'>
                            <input onChange={this.handleGenreChange} type='text' className='form-control' placeholder='genre' />
                        </div>
                    </div>
                    <div className='form-group row justify-content-center'>
                        <div className='col-sm-3'>
                            <button type='submit' className='btn btn-success w-100'>Add</button>
                        </div>
                    </div>
                </form>
                { error ? <div className='alert alert-danger text-center'>genre are required</div> : null}
                { errorGen ? <div className='alert alert-danger text-center'>{`genre ${this.genreRef.current.value} already exist`}</div> : null}
            </div>           
        </div>
    )}</AppConsumer>
    )
  }
}

export default AddGenre