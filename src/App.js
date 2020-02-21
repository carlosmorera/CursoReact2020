import React, {Component, PureComponent} from "react";

const taskStyle = {
    padding: '1em',
    borderBottom: '1px solid #CCC',
    marginTop: '0.4em'
}
//PureComponent valida las prosp que recive para mirar si se rendereiza o no
class Task extends PureComponent {

    deleteTask = () => {
        this.props.onRemove(this.props.task)
    }


    //EL metodo  shouldComponentUpdate se usa cuando no es PureComponent
   /* shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.task.id !== this.props.task.id
    }
*/
    render() {
        const {task} = this.props
        return (
            <div
                style={taskStyle}
            >
                <button
                    onClick={this.deleteTask}
                >
                    X
                </button>
                <span>
                {task.text}
                </span>
            </div>
        )
    }
}


class App extends Component {

    state = {
        list: []
    }

    agregar = (e) => {
        e.preventDefault()
        const text = e.target[0].value
        const id = Math.random().toString(16)
        const task = {text, id}
        this.setState(state => ({
            list: [
                ...state.list,
                task]
        }))
        e.target[0].value = ''
    }

    delete = (taskDelete) => {
       this.setState(state =>({
           list: state.list.filter(task =>{
               return task.id !== taskDelete.id
           })
       }))
    }

    render() {
        return (
            <div>
                <h3>shouldComponentUpdate</h3>
                <form
                    onSubmit={this.agregar}
                >
                    <input
                        type="text"
                        placeholder='Tarea'
                    />
                    <button>
                        Agregar
                    </button>
                </form>
                <div>
                    {this.state.list.map(element => (
                        <Task
                            key={element.id}
                            task={element}
                            onRemove={this.delete}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default App
