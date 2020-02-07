import React, {Component} from "react";
import PropTypes from 'prop-types'

//Para instalar propTypes --> npm i prop-types
/* En una furncion arrow se definen fuera de la funcion las propTypes
const Profile = () => ()
Profile.propTypes = {}

En una furncion arrow se definen fuera de la funcion las defaultProps
Profile.defaultProps ={}
*/
const noop = () => {}
class Profile extends Component {

    //De esta forma se definen ls propTypes dentro de la clase
    static propTypes = {
        name: PropTypes.string.isRequired,
        bio: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number
    }
    static defaultProps ={
        age: 26,
        onHellow: noop
    }

    saluda =() =>{
        this.props.onHellow()
    }

    render() {
        const {name, bio, email, age} = this.props
        return (
            <div>
                <h1>{name}</h1>
                <p>
                    {bio}
                </p>
                <a href={`mailto:{email}`}>
                    {email}
                </a>
                <p>{age}</p>
                <button onClick={this.saluda}>
                    Saludar
                </button>
            </div>
        )
    }
}
/* De esta forma se pueden definir las default propTypes fuera de la clase

Profile.defaultProps ={
}*/

/* De esta forma se pueden definir las propTypes fuera de la clase
Profile.propTypes = {}*/

class App extends Component {
    render() {
        return (
            <div>
                <Profile
                    name='Carlos'
                    bio=' Soy desarrollador'
                    email='mail@mail.com'
                />
            </div>
        )
    }
}

export default App
