import React, {Component} from "react";

class DetailUser extends Component {
    state = {
        user: {},
        loading: false
    }

    componentDidMount() {
        this.newSearch()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userId !== this.props.userId)
            this.newSearch()

    }

    newSearch = () => {

        this.setState({
            loading: true
        })

        const URL = 'https://jsonplaceholder.typicode.com/users/' + this.props.userId
        fetch(URL)
            .then(res => res.json())
            .then(user => this.setState({
                user,
                loading: false
            }))
    }


    render() {
        const {user, loading} = this.state
        return (
            <div>
                <h2>User Details</h2>
                {loading
                    ? (<h2>Cargando</h2>)
                    : (<pre>{JSON.stringify(user, null, 4)}</pre>)
                }
            </div>
        )
    }
}

class App extends Component {
    state = {
        id: 1
    }
    add = () => {
        this.setState({
            id: this.state.id + 1
        })
    }

    render() {
        const {id} = this.state
        return (
            <div>

                <h1>componentDidUpdate</h1>
                <h2>Id :{id}</h2>
                <button
                    onClick={this.add}
                >
                    click
                </button>
                <DetailUser
                    userId={id}/>
            </div>
        )
    }
}

export default App
