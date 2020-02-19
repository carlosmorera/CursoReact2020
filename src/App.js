import React, {Component} from "react";
import axios from 'axios'

class App extends Component {
    state = {
        movie: {},
        cargando: false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({cargando: true})

        const title = event.target[0].value
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=f36d2e4f'

        //Se hace uso de axios  en el caso de que el navegador sea muy antiguo, es el ramplzo de fetch
        /*fetch(url + '&t=' + title)
            .then(res => res.json())
            .then(movie => this.setState({movie, cargando: false}))*/

        //Con axios no es necesario hacer la mutacion ajson ya que el por defecto lo hace
        //Se debe hacer mapear la info del response
        //Se puede enviar un segundo parametro
        axios.get(url,{
            params:{
                t:title
            }
        })
            .then(res => this.setState({
                movie: res.data,
                cargando: false
            }))

    }

    render() {
        const {movie, cargando} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre de la pelicula"
                    />
                    <button>
                        Buscar
                    </button>
                </form>
                {cargando &&
                <h1>Cargando...</h1>
                }
                {movie.Title && !cargando &&
                <div>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Plot}</p>
                    <img
                        src={movie.Poster}
                        alt='Poster'
                        style={{
                            width: '150px'
                        }}
                    />

                </div>}
            </div>
        )
    }
}

export default App
