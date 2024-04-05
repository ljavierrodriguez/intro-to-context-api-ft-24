const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            name: 'Pedro',
            username: '',
            password: '',
            counter: 0
        },
        actions: {
            handleLogin: () => {},
            handleRegister: () => {},
            handleCounter: () => {
                const store = getStore() // store: {}
                console.log(store.name)
                setStore({ 
                    counter: store.counter + 1
                })
            }
        }
    }
}

export default getState