import React, {Component} from "react";

class App extends Component {
    state = {
        movie: {},
        cargando: false
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.setState({cargando: true})

        const title = event.target[0].value
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=f36d2e4f'

        /*fetch(url + '&t=' + title)
            .then(res => res.json())
            .then(movie => this.setState({movie, cargando: false}))*/


        //Esta forma es con Axios
        /*const res = await axios.get(url,{
            params:{
                t:title
            }
        })
        const res = await axios.get(url,{
            params:{
                t:title
            }
        })*/

        const res = await fetch(url+ '&t=' + title)
        const json = await res.json()

        this.setState({
            movie: json,
            cargando: false
        })


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
