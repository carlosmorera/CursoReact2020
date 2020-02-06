//Objeto
const user = {
    name: 'carlos',
    username: 'mojo-jojo',
    country: 'Colombia',
    social: {
        facebook: 'fb.com',
        twitter: 'tw.com'
    }
}
//Funcion arrow
const saluda = (user) => {
//forma Destructurada
    const {name, country, social: {facebook: fb}, username: alias} = user
    /*Forma normal
        const name = user.name
        const name = user.country*/
//Ejemplo con un vector
    const order = ['pizza', 'te verde', 'pay', 1,2,3]

    const [comida, bebida, postre, ...vestorRestante] = order

    console.log(
        `Hola soy ${name} y vivo en ${country} y me puedes encontrar en ${fb} como ${alias} me gusta ${comida} con ${bebida} y ${postre} los numeros ${vestorRestante}`
    )
}

saluda(user)
