import React, { Fragment, useContext, useEffect } from "react";
import { FirebaseContext } from "../../context/firebase/FirebaseContext";
import Form from "../form/Form";
import Notes from "../notes/Notes";
import Spinner from "../spinner/Spinner"


const MainPage = () => {


    const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line 
    }, [])

    return (

        <Fragment>
            <Form />

            <hr />

            {loading
                ? <Spinner />
                : <Notes notes={notes} onRemove={removeNote} />
            }
        </Fragment>
    )

}


export default MainPage;