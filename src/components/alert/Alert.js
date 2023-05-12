
import React, { useContext } from "react"
import { AlertContext } from "../../context/alert/AlertContext";
import { CSSTransition } from 'react-transition-group'
const Alert = () => {

    const { alert, hide } = useContext(AlertContext)


    return (
        <CSSTransition
            in={alert.visible}
            timeout={
                {
                    enter: 500,
                    exit: 200
                }
            }
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || "warning"} alert-dismissible`} >
                <strong>Внимание</strong> {alert.text}
                <button onClick={hide} type="button" class="btn-close" aria-label="Close"></button>
            </div>
        </CSSTransition>

    )
}

export default Alert;
