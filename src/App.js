import React, {Component} from "react";

class Contador extends Component {

    state = {
        video:{
            tittle: 'Super Video',
             likes: 0
        }
    }

    add = () => {
        this.setState((state) => ({
            video: {
                ...this.state.video,
                likes: this.state.video.likes + 1
            }
        }))
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.video.tittle}
                </h1>
                <button onClick={this.add}>
                    Likes ({this.state.video.likes})
                </button>
            </div>

        )
    }
}

const App = () => (
    <div>
        <Contador/>
    </div>
)

export default App
