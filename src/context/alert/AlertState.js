import React, { useReducer } from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../Types";
import { AlertContext } from "./AlertContext";
import { AlertReducer } from "./AlertReducer";

const AlertState = ({ children }) => {

    const [state, dispatch] = useReducer(AlertReducer, { visible: false })

    const show = (text, type = 'warning') => {

        dispatch({
            type: SHOW_ALERT,
            payload: { text, type }
        })

    }

    const hide = () => dispatch({ type: HIDE_ALERT })

    return (
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState;