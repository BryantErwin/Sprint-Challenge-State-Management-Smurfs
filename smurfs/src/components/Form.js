import React, { useState } from "react"
import { connect } from "react-redux"
import { addSmurf } from "../actions/actions"

const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newSmurf)
        props.addSmurf(newSmurf)
    }

    const handleChanges = (e) => {
        let name = e.target.name;

        setNewSmurf({ ...newSmurf, [name]: e.target.value })
    }

    return (
        <div>
            <form>
                <input name="name" type="text" placeholder="name" onChange={handleChanges}/>
                <input name="age" type="text" placeholder="age" onChange={handleChanges}/>
                <input name="height" type="text" placeholder="height" onChange={handleChanges}/>
                <button type="submit" onClick={handleSubmit}>Submit Your Smurf</button>
            </form>
        </div>
    )
}

export default connect(null, { addSmurf })(Form)