import { createContext, useEffect, useState } from "react";
import getState from "./flux";

export const AppContext = createContext(null);

const injectContext = Component => {
    const StoreWrapper = () => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updateStore = {}) => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }))

        useEffect(() => {
            
        }, [])

        return (
            <AppContext.Provider value={state}>
                <Component />
            </AppContext.Provider>
        )
    }

    return StoreWrapper
}

export default injectContext
