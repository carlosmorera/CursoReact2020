import React, {Component} from "react";
import PropTypes from 'prop-types'

//Para instalar propTypes --> npm i prop-types
/* En una furncion arrow se definen fera de la funcion
const Profile = () => ()
Profile.propTypes = {}*/

class Profile extends Component {

    //De esta forma se definen ls propTypes dentro de la clase
    static propTypes = {
        name: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number
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
            </div>
        )
    }
}

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
                    age={46}
                />
            </div>
        )
    }
}

export default App
