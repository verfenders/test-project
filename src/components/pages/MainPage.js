import React, { Fragment } from "react";
import Form from "../form/Form";
import Notes from "../notes/Notes";



const MainPage = () => {
    const notes = new Array(3)
        .fill("check")
        .map((_, i) => ({ id: i, title: `Note ${i + 1}` }))

    return (

        <Fragment>
            <Form />
            <hr />
            <Notes notes={notes} />
        </Fragment>
    )

}


export default MainPage;