import React, { useState, useContext } from "react";
import { AlertContext } from "../../context/alert/AlertContext";
import { FirebaseContext } from "../../context/firebase/FirebaseContext";
const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Заметка была создана', 'success')
            }).catch(()=>{
                alert.show('Oops', 'danger')
            })

            setValue('')
        } else {
            alert.show('Поле должно быть заполнено', 'warning')
        }


    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}

export default Form;